import Image from "next/image";

import styles from "./featuredContent.module.css";

import { horizonFont } from "@/fonts";

export default function FeaturedContent() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/images/horizon-zero-dawn-title.svg"
          alt="Aloy"
          width={530}
          height={190}
          priority
        />
        <p>
          Em uma era na qual máquinas vagam livremente e a humanidade deixou de
          ser a espécie dominante, uma jovem caçadora chamada Aloy inicia uma
          jornada na qual desvendará o seu destino.
        </p>
        <div className={styles.buttons}>
          <button className={horizonFont.className}>
            <span>Order Now</span>
          </button>
          <button className={horizonFont.className}>
            <span>Watch Teaser</span>
          </button>
        </div>
        <div className={styles.platforms}>
          <Image
            src="/icons/pc.svg"
            alt="Game avaiable for PC"
            width={32}
            height={32}
          />
          <Image
            src="/icons/ps4.svg"
            alt="Game avaiable for PC"
            width={82}
            height={33}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/images/aloy.png" alt="Aloy" fill priority />
      </div>
    </section>
  );
}

