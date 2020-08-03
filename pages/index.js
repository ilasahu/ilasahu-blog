import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

// import {faTw}

const name = "Ila Sahu";
const space = " &nbsp";
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <div className={styles.firstFold} id="home">
          <>
            <div
              className={`${styles.row} ${styles.container} ${styles.alignItemCenter}`}
            >
              <div className={` ${styles.margintn7} `}>
                <h1 className={` ${styles.marginUnset} `}>Hey, I am Ila!</h1>
                <p className={` ${styles.marginUnset} `}>
                  Software • Baking • Fitness • Meditation
                </p>
              </div>
              <div className={`  ${styles.marginLeftAuto}  ${styles.margint7}`}>
                <img
                  src="/images/ila.png"
                  className={`${styles.headerHomeImage}  ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </div>
            </div>
          </>
        </div>
        <div className={`${styles.margint7}  ${styles.secondFold}`} id="about">
          <>
            <div className={`${styles.container}`}>
              <h2>About</h2>
              <p className={` ${styles.lineHeight1} ${styles.desc}`}>
                I'm a Bangalore based software developer specialized in backend
                technologies. I've immense love for Fitness, lifting weights,
                yoga and swimming. I love baking cakes and cookies. Pets are my
                best friend.
              </p>
            </div>
          </>
        </div>
        <div>
          <>
            <img
              src="/images/about.png"
              className={`${styles.aboutHomeImage}  `}
              alt={name}
            />
          </>
        </div>
        <div className={` ${styles.thirdFold}`} id="work">
          <>
            <div className={`${styles.container} ${styles.padt2}`}>
              <h2 className={styles.textCenter}>My Creations</h2>
              <div
                className={`${styles.row} ${styles.BItemCenter} ${styles.pt2} `}
              >
                <div className={`${styles.width50} `}>
                  <a href="http://builderx.io/" target="_blank">
                    <img
                      src="/images/builderx.png"
                      className={`${styles.creationImage}  ${styles.center} ${styles.imgShadow}`}
                      alt={name}
                    />
                  </a>
                </div>
                <div className={`${styles.width50}`}>
                  <h4 className={`${styles.textCenter} ${styles.marginUnset}`}>
                    <a
                      href="http://builderx.io/"
                      target="_blank"
                      className={styles.removeAStyle}
                    >
                      BuilderX
                    </a>
                  </h4>
                  <div>
                    <p className={styles.textCenter}>
                      BuilderX is a browser based design tool that codes React
                      Native & React for you
                    </p>
                  </div>
                  <div className={styles.textCenter}>
                    <a className={styles.tag}>Next.js</a>
                    <a className={styles.tag}>Laravel</a>
                    <a className={styles.tag}>MySQL</a>
                  </div>
                </div>
              </div>

              <div
                className={`${styles.row} ${styles.alignItemCenter} ${styles.pt3r}`}
              >
                <div className={`${styles.width50}`}>
                  <h4 className={`${styles.textCenter} ${styles.marginUnset}`}>
                    <a
                      href="http://market.nativebase.io/"
                      target="_blank"
                      className={styles.removeAStyle}
                    >
                      Nativebase Market
                    </a>
                  </h4>
                  <div>
                    <p className={styles.textCenter}>
                      NativeBase Market is a e-commerce website for Themes &
                      Templates
                    </p>
                  </div>
                  <div className={styles.textCenter}>
                    <a className={styles.tag}>Php</a>
                    <a className={styles.tag}>Laravel</a>
                    <a className={styles.tag}>Jquery</a>
                    <a className={styles.tag}>MySQL</a>
                  </div>
                </div>
                <div className={`${styles.width50} `}>
                  <a href="https://market.nativebase.io/" target="_blank">
                    <img
                      src="/images/nativebase-market.png"
                      className={`${styles.creationImage}  ${styles.center} ${styles.imgShadow} `}
                      alt={name}
                    />
                  </a>
                </div>
              </div>
              <div
                className={`${styles.row} ${styles.alignItemCenter} ${styles.pt3r}`}
              >
                <div className={`${styles.width50} `}>
                  <a href="http://fluttermarket.com/" target="_blank">
                    <img
                      src="/images/flutter-market.png"
                      className={`${styles.creationImage}  ${styles.center}  ${styles.imgShadow}`}
                      alt={name}
                    />
                  </a>
                </div>
                <div className={`${styles.width50}`}>
                  <h4 className={`${styles.textCenter} ${styles.marginUnset}`}>
                    <a
                      href="http://fluttermarket.com/"
                      target="_blank"
                      className={styles.removeAStyle}
                    >
                      Flutter Market
                    </a>
                  </h4>
                  <div>
                    <p className={styles.textCenter}>
                      Collection of responsive Flutter Templates & Starter Kits
                      for iOS & Android.
                    </p>
                  </div>
                  <div className={styles.textCenter}>
                    <a className={styles.tag}>Php</a>
                    <a className={styles.tag}>Laravel</a>
                    <a className={styles.tag}>Jquery</a>
                    <a className={styles.tag}>MySQL</a>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
        <div className={` ${styles.forthFold}`} id="gallery">
          <>
            <div className={`${styles.container} ${styles.padt2}`}>
              <h2 className={styles.textCenter}>Gallery</h2>
              <div className={`${styles.row} `}>
                <div className={styles.width25}>
                  <img
                    src="/images/ila1.jpg"
                    className={`${styles.galleryImage}  `}
                    alt={name}
                  />
                </div>
                <div className={styles.width25}>
                  <img
                    src="/images/ila2.jpg"
                    className={`${styles.galleryImage}  `}
                    alt={name}
                  />
                </div>
                <div className={styles.width25}>
                  <img
                    src="/images/ila3.jpg"
                    className={`${styles.galleryImage}  `}
                    alt={name}
                  />
                </div>
                <div className={styles.width25}>
                  <img
                    src="/images/ila4.jpg"
                    className={`${styles.galleryImage}  `}
                    alt={name}
                  />
                </div>
              </div>
            </div>
          </>
        </div>

        <div className={styles.fifthFold} id="contact">
          <>
            <div className={`${styles.container} ${styles.padt2}`}>
              <h2 className={`${styles.textCenter} `}>Contact</h2>
              <div className={`${styles.row}  ${styles.width100}`}>
                <div
                  className={`  ${styles.marginLeftAuto} ${styles.contactWidth}`}
                >
                  <p>
                    <FontAwesomeIcon icon={faTwitter} />
                    <a
                      className={styles.removeAStyle}
                      target="_blank"
                      href="https://twitter.com/ilasahu94"
                    >
                      <span className={styles.pl1}>Twitter</span>
                    </a>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faInstagram} />
                    <a
                      className={styles.removeAStyle}
                      href="https://www.instagram.com/ilasahu"
                      target="_blank"
                    >
                      <span className={styles.pl1}>Instagram</span>
                    </a>
                  </p>
                </div>
                <div className={`    ${styles.marginRightAuto}  `}>
                  <p>
                    <FontAwesomeIcon icon={faGithub} />
                    <a
                      className={styles.removeAStyle}
                      href="https://github.com/ilasahu"
                      target="_blank"
                    >
                      <span className={styles.pl1}>Github</span>
                    </a>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <a
                      className={styles.removeAStyle}
                      href="https://www.linkedin.com/in/ila-sahu-0575b9149/"
                      target="_blank"
                    >
                      <span className={styles.pl1}>LinkedIn</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </>
        </div>
      </section>
    </Layout>
  );
}
