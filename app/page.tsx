import type { CSSProperties } from "react";
import Image from "next/image";
import { ClickWheelDemo } from "./ClickWheelDemo";

const libraryItems = [
  { label: "专辑", icon: "/product/icons/albums.webp" },
  { label: "播放列表", icon: "/product/icons/playlists.webp" },
  { label: "随机播放", icon: "/product/icons/shuffle.webp" },
  { label: "正在播放", icon: "/product/icons/now-playing.webp" },
];

const faqs = [
  {
    question: "MusicPod 什么时候可以下载？",
    answer:
      "MusicPod 正在进行上架前的最后准备。开放下载后，本页会第一时间更新 App Store 链接。",
  },
  {
    question: "需要什么设备？",
    answer:
      "需要运行 iOS 26 的 iPhone。Apple Music 播放需要有效订阅，并在系统中允许 MusicPod 访问音乐资料库。",
  },
  {
    question: "它能播放哪些音乐？",
    answer:
      "MusicPod 原生接入 MusicKit，可以浏览你的播放列表、艺人、专辑、歌曲、作曲家与喜爱歌曲，并支持整库随机播放。",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        跳到主要内容
      </a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="MusicPod 首页">
          <Image src="/app-icon.png" alt="" width="44" height="44" unoptimized />
          <span>MusicPod</span>
        </a>

        <nav className="site-nav" aria-label="主导航">
          <a href="#experience">转盘体验</a>
          <a href="#features">功能</a>
          <a href="#customize">个性化</a>
        </nav>

        <a className="header-cta" href="#download">
          即将上线 <span aria-hidden="true">↓</span>
        </a>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <span id="top" className="anchor-target" aria-hidden="true" />
          <div className="hero-aurora" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> An iPod for the Apple Music era
            </p>
            <h1 id="hero-title">
              把 iPhone
              <span>变回 iPod。</span>
            </h1>
            <p className="hero-lede">
              MusicPod 将你的 Apple Music 资料库装进一台会回馈、会呼吸、
              可以完全属于你的 iPod。转动、点按，然后只管听。
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#download">
                <span className="button-kicker">App Store</span>
                <span>即将上线</span>
              </a>
              <a className="button button-ghost" href="#experience">
                看看它如何工作 <span aria-hidden="true">↓</span>
              </a>
            </div>

            <ul className="hero-meta" aria-label="产品信息">
              <li>为 iPhone 打造</li>
              <li>Apple Music</li>
              <li>iOS 26</li>
            </ul>
          </div>

          <div className="hero-product" aria-label="MusicPod 真实应用界面">
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />

            <Image
              className="floating-icon floating-icon-one"
              src="/product/icons/theme.webp"
              alt=""
              width="150"
              height="150"
              aria-hidden="true"
              unoptimized
            />
            <Image
              className="floating-icon floating-icon-two"
              src="/product/icons/playlists.webp"
              alt=""
              width="124"
              height="124"
              aria-hidden="true"
              unoptimized
            />

            <figure className="phone-stage">
              <div className="phone-frame">
                <div className="phone-speaker" aria-hidden="true" />
                <Image
                  className="product-screenshot"
                  src="/product/musicpod-home.webp"
                  alt="MusicPod 主界面：收藏歌曲、迷你播放器与红色点按式转盘"
                  width="1206"
                  height="2622"
                  sizes="(max-width: 850px) 74vw, 420px"
                  loading="eager"
                  fetchPriority="high"
                  unoptimized
                />
                <div className="phone-shine" aria-hidden="true" />
              </div>
              <figcaption>
                <span>真实界面</span>
                <span>原生 SwiftUI</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="statement" aria-label="产品定位">
          <p>不是复古滤镜。</p>
          <h2>是一套真正可以转动、点按、感受的播放方式。</h2>
          <div className="statement-tags" aria-label="产品能力">
            <span>点按式转盘</span>
            <span>触感回馈</span>
            <span>MusicKit</span>
            <span>VoiceOver</span>
          </div>
        </section>

        <section className="experience section" id="experience">
          <div className="section-copy reveal">
            <p className="section-index">01 · CLICK WHEEL</p>
            <h2>你的拇指，<br />会记得。</h2>
            <p>
              顺着转盘滑动，让熟悉的段落式触感带你穿过音乐资料库。按下中央键选择，
              MENU 返回，播放键让一切开始。无需重新学习。
            </p>
            <div className="micro-feature">
              <span aria-hidden="true">⌁</span>
              <div>
                <strong>每一格都有回应</strong>
                <p>滚动、选中与播放都有原生触感反馈。</p>
              </div>
            </div>
          </div>

          <div className="demo-wrap reveal">
            <div className="demo-instruction">
              <span className="demo-pulse" aria-hidden="true" />
              试着转动它
            </div>
            <ClickWheelDemo />
          </div>
        </section>

        <section className="features section" id="features" aria-labelledby="features-title">
          <div className="section-heading reveal">
            <p className="section-index">02 · YOUR LIBRARY</p>
            <h2 id="features-title">你的音乐，<br />一次转动就到。</h2>
            <p>熟悉的资料库，不一样的抵达方式。</p>
          </div>

          <div className="bento-grid">
            <article className="bento-card library-card reveal">
              <div className="card-copy">
                <p className="card-label">APPLE MUSIC LIBRARY</p>
                <h3>整座音乐资料库，<br />回到一只手里。</h3>
                <p>喜爱歌曲、播放列表、艺人、专辑与歌曲，全部铺平在首页。</p>
              </div>
              <div className="icon-ribbon" aria-label="MusicPod 资料库入口">
                {libraryItems.map((item, index) => (
                  <div className="ribbon-item" key={item.label} style={{ "--i": index } as CSSProperties}>
                    <Image src={item.icon} alt="" width="132" height="132" unoptimized />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="bento-card coverflow-card reveal">
              <div className="card-copy compact">
                <p className="card-label">COVER FLOW</p>
                <h3>让封面重新<br />成为主角。</h3>
                <p>转动浏览专辑，翻面进入曲目。</p>
              </div>
              <div className="coverflow" aria-hidden="true">
                <div className="album-cover cover-a"><span>Night<br />Drive</span></div>
                <div className="album-cover cover-b"><span>Blue<br />Hour</span></div>
                <div className="album-cover cover-c"><span>ORBIT</span></div>
                <div className="album-cover cover-d"><span>Soft<br />Focus</span></div>
                <div className="album-cover cover-e"><span>AM</span></div>
              </div>
            </article>

            <article className="bento-card vinyl-card reveal">
              <div className="card-copy compact">
                <p className="card-label">NOW PLAYING</p>
                <h3>一首歌，<br />值得一整面屏幕。</h3>
              </div>
              <div className="now-playing-art" aria-hidden="true">
                <div className="vinyl-record">
                  <Image src="/product/textures/vinyl.webp" alt="" width="512" height="512" unoptimized />
                  <div className="vinyl-label" />
                </div>
                <div className="track-copy">
                  <strong>Midnight Memory</strong>
                  <span>MusicPod Sessions</span>
                  <div className="waveform">
                    {Array.from({ length: 19 }).map((_, index) => (
                      <i key={index} style={{ "--bar": index } as CSSProperties} />
                    ))}
                  </div>
                  <div className="track-time"><span>1:42</span><span>3:58</span></div>
                </div>
              </div>
            </article>

            <article className="bento-card native-card reveal">
              <div className="native-orb" aria-hidden="true">
                <span>⌁</span>
              </div>
              <div className="card-copy compact">
                <p className="card-label">NATIVE BY DESIGN</p>
                <h3>怀旧的形，<br />今天的心。</h3>
                <p>SwiftUI、MusicKit、系统触感与 VoiceOver，全部原生。</p>
              </div>
              <div className="native-stack" aria-label="原生技术能力">
                <span>SwiftUI</span><span>MusicKit</span><span>Haptics</span>
              </div>
            </article>
          </div>
        </section>

        <section className="customize section" id="customize">
          <div className="customize-visual reveal" aria-hidden="true">
            <div className="pod pod-purple">
              <div className="pod-screen"><Image src="/product/icons/theme.webp" alt="" width="132" height="132" unoptimized /></div>
              <div className="pod-wheel"><span>MENU</span><i /></div>
            </div>
            <div className="pod pod-silver">
              <div className="pod-screen"><Image src="/product/icons/albums.webp" alt="" width="132" height="132" unoptimized /></div>
              <div className="pod-wheel"><span>MENU</span><i /></div>
            </div>
            <div className="pod pod-red">
              <div className="pod-screen"><Image src="/product/icons/favorites.webp" alt="" width="132" height="132" unoptimized /></div>
              <div className="pod-wheel"><span>MENU</span><i /></div>
            </div>
          </div>

          <div className="customize-copy reveal">
            <p className="section-index">03 · MAKE IT YOURS</p>
            <h2>每一台，<br />都可以是你的。</h2>
            <p>
              从机身、转盘、屏幕，到背景的颜色、方向与光晕。你也可以放进自己的照片，
              让 MusicPod 不只是另一台播放器。
            </p>

            <div className="color-row" aria-label="可选配色示例">
              <span className="swatch swatch-red" title="红色" />
              <span className="swatch swatch-orange" title="橙色" />
              <span className="swatch swatch-green" title="绿色" />
              <span className="swatch swatch-blue" title="蓝色" />
              <span className="swatch swatch-purple" title="紫色" />
              <span className="swatch swatch-silver" title="银色" />
              <span className="swatch swatch-black" title="黑色" />
            </div>

            <dl className="customize-stats">
              <div><dt>12</dt><dd>种机身与转盘配色</dd></div>
              <div><dt>9</dt><dd>套星云背景主题</dd></div>
              <div><dt>2</dt><dd>套首页图标语言</dd></div>
            </dl>
          </div>
        </section>

        <section className="detail-strip" aria-label="更多功能">
          <div className="detail-track">
            <span>深色与浅色屏幕</span><i>✦</i>
            <span>自定义照片背景</span><i>✦</i>
            <span>动态黑胶唱片</span><i>✦</i>
            <span>段落式触感</span><i>✦</i>
            <span>中英双语</span><i>✦</i>
            <span>深色与浅色屏幕</span><i>✦</i>
            <span>自定义照片背景</span><i>✦</i>
          </div>
        </section>

        <section className="faq section" aria-labelledby="faq-title">
          <div className="faq-heading reveal">
            <p className="section-index">04 · THE DETAILS</p>
            <h2 id="faq-title">开始之前，<br />你可能想知道。</h2>
          </div>
          <div className="faq-list reveal">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="download section" id="download" aria-labelledby="download-title">
          <div className="download-glow" aria-hidden="true" />
          <Image className="download-icon" src="/app-icon.png" alt="MusicPod 应用图标" width="120" height="120" unoptimized />
          <p className="section-index">COMING SOON</p>
          <h2 id="download-title">你的下一台 iPod，<br />就在这台 iPhone 里。</h2>
          <p>MusicPod 正在为 App Store 上线做最后准备。</p>
          <div className="download-actions">
            <span className="coming-badge"><strong>App Store</strong> 即将上线</span>
            <a href="mailto:leavestyle101@gmail.com?subject=MusicPod%20上线提醒">收到上线提醒 ↗</a>
          </div>
          <small>需要 iOS 26 · Apple Music 播放需要有效订阅</small>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <Image src="/app-icon.png" alt="" width="36" height="36" unoptimized />
          <div><strong>MusicPod</strong><span>Turn your iPhone back into an iPod.</span></div>
        </div>
        <div className="footer-links">
          <a href="https://www.leavestyle.com" target="_blank" rel="noreferrer">LeaveStyle</a>
          <a href="https://github.com/leavestylecode" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:leavestyle101@gmail.com">联系</a>
        </div>
        <p>© 2026 Leavestylecode</p>
      </footer>
    </div>
  );
}
