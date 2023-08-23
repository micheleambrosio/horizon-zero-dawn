import bgCard01 from "@Public/images/card-01-background.png";
import bgCard02 from "@Public/images/card-02-background.png";
import bgCard03 from "@Public/images/card-03-background.png";
import machineImage01 from "@Public/images/card-machine-01.png";
import machineImage02 from "@Public/images/card-machine-02.png";
import machineImage03 from "@Public/images/card-machine-03.png";

import styles from "./machineCards.module.css";

import Card from "@Components/Card";

export default function MachinesCards() {
  return (
    <section className={styles.container}>
      <Card
        bgImageFile={bgCard01}
        image={{ file: machineImage01, alt: "Longleg" }}
      />
      <Card
        bgImageFile={bgCard02}
        image={{ file: machineImage02, alt: "Corrupter" }}
      />
      <Card
        bgImageFile={bgCard03}
        image={{ file: machineImage03, alt: "Stormbird" }}
      />
    </section>
  );
}
