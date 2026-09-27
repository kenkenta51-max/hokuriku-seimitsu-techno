import type { CSSProperties } from "react";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import { ProcessFlowReveal } from "../CapabilitiesSection/ProcessFlowReveal";
import { Reveal } from "../Reveal/Reveal";
import { consultationSteps } from "../step7Data";
import styles from "./ConsultationProcessSection.module.css";

type StepStyle = CSSProperties & {
  "--step-index": number;
};

export function ConsultationProcessSection() {
  return (
    <section className={styles.section} aria-labelledby="consultation-process-title">
      <Container>
        <Reveal className={styles.heading}>
          <SectionHeading
            label="PROCESS"
            title="図面受領から量産まで、判断を共有します。"
            titleId="consultation-process-title"
            align="left"
            tone="light"
          />
        </Reveal>

        <ProcessFlowReveal className={styles.flow}>
          <span className={styles.mobileFlowLine} aria-hidden="true" />
          <ol className={styles.flowList}>
            {consultationSteps.map((step, index) => (
              <li
                key={step.number}
                style={{ "--step-index": index } as StepStyle}
              >
                <Reveal className={styles.flowItem} delay={index * 60}>
                  <span className={styles.number} aria-hidden="true">
                    {step.number}
                  </span>
                  <h3 className={styles.name}>{step.name}</h3>
                  <p className={styles.description}>{step.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </ProcessFlowReveal>

        <div className={styles.cta}>
          <Button href="/contact?type=technical" variant="primary">
            図面を送って相談する
          </Button>
        </div>
      </Container>
    </section>
  );
}
