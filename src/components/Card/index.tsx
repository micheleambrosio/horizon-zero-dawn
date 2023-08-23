import Image, { StaticImageData } from "next/image";

import styles from "./card.module.css";

interface IProps {
  bgImageFile: StaticImageData;
  image: {
    file: StaticImageData;
    alt: string;
  };
}

export default function Card({ bgImageFile, image }: IProps) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${bgImageFile.src})`,
      }}
    >
      <Image className={styles.image} src={image.file} alt={image.alt} />
    </div>
  );
}
