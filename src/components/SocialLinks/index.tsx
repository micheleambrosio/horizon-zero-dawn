import Image from "next/image";

import styles from "./socialLinks.module.css";

export default function SocialLinks() {
  return (
    <ul className={styles.links}>
      <li>
        <a href="https://instagram.com" target="_blank">
          <Image
            src="icons/instagram.svg"
            alt="Instagram"
            width={24}
            height={24}
          />
        </a>
      </li>
      <li>
        <a href="https://facebook.com" target="_blank">
          <Image
            src="icons/facebook.svg"
            alt="Facebook"
            width={24}
            height={24}
          />
        </a>
      </li>
      <li>
        <a href="https://twitter.com" target="_blank">
          <Image src="icons/twitter.svg" alt="Twitter" width={24} height={24} />
        </a>
      </li>
      <li>
        <a href="https://youtube.com" target="_blank">
          <Image src="icons/youtube.svg" alt="Youtube" width={24} height={24} />
        </a>
      </li>
    </ul>
  );
}

