import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const name = "Ila Sahu";
export const siteTitle = "Ila Sahu - Personal blog";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={`${styles.header} ${styles.row} `}>
        <>
          <div className={`${styles.row}`}>
            <div className={`  ${styles.pl3}  `}>
              <img
                src="/images/avatar.png"
                className={styles.headerAvatarImage}
                alt={name}
              />
            </div>
            <div className={` ${styles.pl1}`}>
              <p className={styles.headerName}>{name}</p>
            </div>
          </div>
          <nav
            className={`${styles.row} ${styles.marginLeftAuto} ${styles.webNav}`}
          >
            <a href="#" className={styles.removeAStyle}>
              <div className={` ${styles.px2}`}>
                <p className={styles.headerMenu}>Home</p>
              </div>
            </a>
            <a href="#about" className={styles.removeAStyle}>
              <div className={` ${styles.px2}`}>
                <p className={styles.headerMenu}>About</p>
              </div>
            </a>
            <a href="#work" className={styles.removeAStyle}>
              <div className={` ${styles.px2}`}>
                <p className={styles.headerMenu}>Work</p>
              </div>
            </a>
            <a href="#gallery" className={styles.removeAStyle}>
              <div className={` ${styles.px2}`}>
                <p className={styles.headerMenu}>Gallery</p>
              </div>
            </a>
            <a href="#contact" className={styles.removeAStyle}>
              <div className={` ${styles.px2}`}>
                <p className={styles.headerMenu}>Contact</p>
              </div>
            </a>
          </nav>

          <div className={` ${styles.mobileNav} ${styles.marginLeftAuto}`}>
            <div className={` ${styles.px2}`}>
              <p className={styles.headerMenu}>
                <a
                  href="#"
                  onClick={openMobileNav}
                  className={`${styles.colorBlack}`}
                >
                  <FontAwesomeIcon icon={faBars} />
                </a>
              </p>
            </div>

            <nav id="mobileNav" style={{ display: "none" }}>
              <div className={` ${styles.px2}`}>
                <p className={styles.headerMenu}>Home</p>
              </div>
              <div className={` ${styles.px2}`}>
                <p className={styles.headerMenu}>About</p>
              </div>
              <div className={` ${styles.px2}`}>
                <p className={styles.headerMenu}>Work</p>
              </div>
              <div className={` ${styles.px2}`}>
                <p className={styles.headerMenu}>Gallery</p>
              </div>
              <div className={` ${styles.px2}`}>
                <p className={styles.headerMenu}>Contact</p>
              </div>
            </nav>
          </div>
        </>
      </header>

      <main>{children}</main>
    </div>
  );
}

function openMobileNav() {
  var nav = document.getElementById("mobileNav").style.display;
  if (nav == "none") {
    document.getElementById("mobileNav").style.display = "block";
  } else {
    document.getElementById("mobileNav").style.display = "none";
  }
}
