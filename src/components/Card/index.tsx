import { StaticImageData } from "next/image";

import styles from "./card.module.css";

interface IProps {
  backgroundImage: StaticImageData;
}

export default function Card({ backgroundImage }: IProps) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    ></div>
  );
}
