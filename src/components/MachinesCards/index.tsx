import bgCard01 from "@Public/images/card-01-background.png";
import bgCard02 from "@Public/images/card-02-background.png";
import bgCard03 from "@Public/images/card-03-background.png";

import Card from "@Components/Card";

export default function MachinesCards() {
  return (
    <section>
      <Card backgroundImage={bgCard01} />
      <Card backgroundImage={bgCard02} />
      <Card backgroundImage={bgCard03} />
    </section>
  );
}
