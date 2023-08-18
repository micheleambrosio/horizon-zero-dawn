"use client";
import { useEffect, useState } from "react";

import styles from "./teaserVideo.module.css";

export default function TeaserVideo() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        src="/videos/horizon-zero-dawn-teaser.mp4#t=19"
        autoPlay
        muted
      ></video>
    </div>
  );
}

