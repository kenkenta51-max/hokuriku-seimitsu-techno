import Image from "next/image";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import { Reveal } from "../Reveal/Reveal";
import { processSteps } from "../step5Data";
import styles from "./CapabilitiesSection.module.css";
import { ProcessFlowReveal } from "./ProcessFlowReveal";

const introduction =
  "単工程の依頼はもちろん、複数工程をまとめた一括対応も可能です。図面、材質、精度、数量、納期を確認し、品質とコストのバランスを考えた工程を提案します。";

export function CapabilitiesSection() {
  return (
    <section className={styles.section} aria-labelledby="capabilities-title">
      <Container>
        <Reveal>
          <SectionHeading
            className={styles.heading}
            label="CAPABILITIES"
            title={<span id="capabilities-title">加工から検査まで、工程をつなぐ。</span>}
            description={<p>{introduction}</p>}
            tone="dark"
          />
        </Reveal>

        <Reveal className={styles.imageReveal}>
          <div className={styles.imageFrame}>
            <Image
              className={styles.image}
              src="/images/P07-capability-factory-panorama.png"
              alt="精密加工設備が並ぶ北陸精密テクノの工場内"
              fill
              sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 1439px) calc(100vw - 11.1vw), 1280px"
            />
          </div>
        </Reveal>

        <ProcessFlowReveal className={styles.flow}>
          <span className={styles.flowLine} aria-hidden="true" />
          <ol className={styles.processList}>
            {processSteps.map((step, index) => (
              <li key={step.number} className={styles.processItem}>
                <Reveal delay={index * 60}>
                  <p className={styles.processNumber} aria-hidden="true">{step.number}</p>
                  <h3>{step.title}</h3>
                  <p className={styles.processBody}>{step.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </ProcessFlowReveal>

        <div className={styles.cta}>
          <Button href="/business" variant="inverse">事業内容を詳しく見る</Button>
        </div>
      </Container>
    </section>
  );
}
