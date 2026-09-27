import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import { Reveal } from "../Reveal/Reveal";
import { facts } from "../step5Data";
import styles from "./FactsSection.module.css";

export function FactsSection() {
  return (
    <section className={styles.section} aria-labelledby="facts-title">
      <Container>
        <Reveal>
          <SectionHeading
            className={styles.heading}
            label="FACTS & FIGURES"
            title={<span id="facts-title">積み重ねてきた実績を、数字で。</span>}
            tone="dark"
          />
        </Reveal>

        <dl className={styles.facts}>
          {facts.map((fact, index) => (
            <Reveal key={fact.label} className={styles.factReveal} delay={index * 60}>
              <div className={styles.fact}>
                <dt>{fact.label}</dt>
                <dd className={styles.value}>
                  {fact.prefix ? <span className={styles.prefix}>{fact.prefix}</span> : null}
                  <span className={styles.number}>{fact.value}</span>
                  <span className={styles.unit}>{fact.unit}</span>
                </dd>
                <dd className={styles.description}>{fact.description}</dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <p className={styles.note}>すべて本ポートフォリオ用の架空設定です。</p>
      </Container>
    </section>
  );
}
