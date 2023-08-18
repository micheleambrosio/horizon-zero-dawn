import styles from "./teaserVideo.module.css";

interface IProps {
  show?: boolean;
}

export default function TeaserVideo({ show }: IProps) {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <iframe
        className={styles.video}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9axpikOIHEo?controls=0&amp;start=19&autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

