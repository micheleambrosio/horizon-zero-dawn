import Image from "next/image";

import SocialLinks from "../SocialLinks";

import styles from "./navbar.module.css";

import { horizonFont } from "@/fonts";

export default function Navbar() {
  return (
    <div className={styles.menu}>
      <nav className={styles.navbar}>
        <Image
          src="images/logo.svg"
          alt="Horizon Zero Dawn"
          width={96}
          height={51}
        />
        <ul className={`${horizonFont.className} ${styles.links}`}>
          <li className={styles.active}>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Order Now</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
      </nav>
      <div className={styles.social}>
        <SocialLinks />
      </div>
    </div>
  );
}

