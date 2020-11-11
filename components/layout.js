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
          content="Personal blog of ila sahu"
        />
        <meta
          property="og:image"
          content="https://ilasahu.com/images/ila.png"
        />
        <meta name="keyword" content="personal blog, software, technology, backend, php, laravel, developer, bangalore, development, application, fullstack, engineer" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="https://twitter.com/ilasahu94" />
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
