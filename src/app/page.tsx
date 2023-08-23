import styles from "./page.module.css";

import FeaturedContent from "@Components/FeaturedContent";
import MachinesCards from "@Components/MachinesCards";

export default function Home() {
  return (
    <>
      {/* <ParticlesContainer /> */}
      <main className={styles.container}>
        <FeaturedContent />
        <MachinesCards />
      </main>
    </>
  );
}
