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
      </section>
    </Layout>
  );
}
