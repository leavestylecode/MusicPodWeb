create table if not exists public.musicpod_reward_codes (
  id bigint generated always as identity primary key,
  code_hash text not null,
  encrypted_payload text not null,
  proof_hash text,
  claimed_at timestamptz,
  constraint musicpod_reward_codes_code_hash_key unique (code_hash),
  constraint musicpod_reward_codes_encrypted_payload_key unique (encrypted_payload),
  constraint musicpod_reward_codes_code_hash_format check (code_hash ~ '^[a-f0-9]{64}$'),
  constraint musicpod_reward_codes_proof_hash_format check (proof_hash is null or proof_hash ~ '^[a-f0-9]{64}$')
);

create unique index if not exists musicpod_reward_codes_proof_hash_key
on public.musicpod_reward_codes (proof_hash)
where proof_hash is not null;

alter table public.musicpod_reward_codes enable row level security;
revoke all on table public.musicpod_reward_codes from anon, authenticated;
grant select, insert, update on table public.musicpod_reward_codes to service_role;
grant usage, select on sequence public.musicpod_reward_codes_id_seq to service_role;

create or replace function public.musicpod_claim_reward_code(p_proof_hash text)
returns table (encrypted_payload text)
language plpgsql
security definer
set search_path = ''
as $$
declare
  selected_id bigint;
  selected_payload text;
begin
  if p_proof_hash is null or p_proof_hash !~ '^[a-f0-9]{64}$' then
    raise exception 'Invalid proof hash' using errcode = '22023';
  end if;

  select reward.encrypted_payload
  into selected_payload
  from public.musicpod_reward_codes as reward
  where reward.proof_hash = p_proof_hash
  limit 1;

  if found then
    return query select selected_payload;
    return;
  end if;

  select reward.id, reward.encrypted_payload
  into selected_id, selected_payload
  from public.musicpod_reward_codes as reward
  where reward.claimed_at is null
  order by reward.id
  for update skip locked
  limit 1;

  if not found then
    return;
  end if;

  begin
    update public.musicpod_reward_codes
    set proof_hash = p_proof_hash,
        claimed_at = now()
    where id = selected_id
      and claimed_at is null;
  exception when unique_violation then
    select reward.encrypted_payload
    into selected_payload
    from public.musicpod_reward_codes as reward
    where reward.proof_hash = p_proof_hash
    limit 1;
  end;

  if selected_payload is not null then
    return query select selected_payload;
  end if;
end;
$$;

revoke execute on function public.musicpod_claim_reward_code(text) from public, anon, authenticated;
grant execute on function public.musicpod_claim_reward_code(text) to service_role;
