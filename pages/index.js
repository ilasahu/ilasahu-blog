import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";
const name = "Ila Sahu";
const space = " &nbsp";
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <div className={styles.firstFold}>
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
        <div className={`${styles.margint7}  ${styles.secondFold}`}>
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
        <div className={` ${styles.thirdFold}`}>
          <>
            <div className={`${styles.container} ${styles.padt2}`}>
              <h2 className={styles.textCenter}>My Creations</h2>
              <div
                className={`${styles.row} ${styles.alignItemCenter} ${styles.pt2} `}
              >
                <div className={`${styles.width50} `}>
                  <img
                    src="/images/builderx.png"
                    className={`${styles.creationImage}  ${styles.center} `}
                    alt={name}
                  />
                </div>
                <div className={`${styles.width50}`}>
                  <p className={styles.textCenter}>BuilderX</p>
                </div>
              </div>

              <div
                className={`${styles.row} ${styles.alignItemCenter} ${styles.pt3r}`}
              >
                <div className={`${styles.width50}`}>
                  <p className={styles.textCenter}>Nativebase Market</p>
                </div>
                <div className={`${styles.width50} `}>
                  <img
                    src="/images/nativebase-market.png"
                    className={`${styles.creationImage}  ${styles.center} `}
                    alt={name}
                  />
                </div>
              </div>
              <div
                className={`${styles.row} ${styles.alignItemCenter} ${styles.pt3r}`}
              >
                <div className={`${styles.width50} `}>
                  <img
                    src="/images/flutter-market.png"
                    className={`${styles.creationImage}  ${styles.center} `}
                    alt={name}
                  />
                </div>
                <div className={`${styles.width50}`}>
                  <p className={styles.textCenter}>Flutter Market</p>
                </div>
              </div>
            </div>
          </>
        </div>
        <div className={` ${styles.forthFold}`}>
          <>
            <div className={`${styles.container}`}>
              <h2 className={styles.textCenter}>Gallery</h2>
              <div className={`${styles.row} ${styles.pt4}`}>
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

        <div className={styles.fifthFold}>
          <>
            <div className={`${styles.container} `}>
              <h2 className={`${styles.textCenter} ${styles.pt3}`}>Contact</h2>
              <div className={`${styles.row}  ${styles.width100}`}>
                <div className={`  ${styles.marginLeftAuto} ${styles.width50}`}>
                  <p>Twitter</p>
                  <p>Instagram</p>
                </div>
                <div className={`    ${styles.marginRightAuto}  `}>
                  <p>Github</p>
                  <p>LinkedIn</p>
                </div>
              </div>
            </div>
          </>
        </div>
      </section>
    </Layout>
  );
}
