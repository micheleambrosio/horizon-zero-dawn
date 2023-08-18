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
      <video
        className={styles.video}
        src="/videos/horizon-zero-dawn-teaser.mp4#t=19"
        autoPlay
        muted
      ></video>
    </div>
  );
}

