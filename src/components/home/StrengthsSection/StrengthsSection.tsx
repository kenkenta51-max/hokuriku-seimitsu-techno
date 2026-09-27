import Image from "next/image";

import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { TextLink } from "@/components/ui/TextLink/TextLink";

import { Reveal } from "../Reveal/Reveal";
import type { NumberedSectionItem } from "../sectionData";
import { strengths } from "../sectionData";
import styles from "./StrengthsSection.module.css";

const introduction =
  "お客様が求めているのは、加工機の種類ではなく、必要な部品が、必要な品質と納期で安定して届くこと。私たちは技術、工程、品質、記録を一つにつなぎ、発注後の不確実さを減らします。";

function StrengthItem({ item }: { item: NumberedSectionItem }) {
  return (
    <article className={styles.item}>
      <p className={styles.number} aria-hidden="true">{item.number}</p>
      <div className={styles.itemCopy}>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    </article>
  );
}

export function StrengthsSection() {
  return (
    <section id="strengths" className={styles.section} aria-labelledby="strengths-title">
      <Container>
        <Reveal className={styles.headingReveal}>
          <SectionHeading
            className={styles.heading}
            label="OUR STRENGTHS"
            title={<span id="strengths-title">図面の先まで考える、4つの対応力。</span>}
            description={<p>{introduction}</p>}
          />
        </Reveal>

        <div className={styles.rows}>
          <div className={styles.row}>
            <Reveal className={`${styles.imageReveal} ${styles.imageTop}`}>
              <div className={styles.imageFrame}>
                <Image
                  className={styles.image}
                  src="/images/P05-strengths-complex-parts.png"
                  alt="加工台に並ぶ複雑形状の精密金属部品"
                  fill
                  sizes="(max-width: 899px) calc(100vw - 40px), 58vw"
                />
              </div>
            </Reveal>

            <div className={`${styles.itemGroup} ${styles.itemGroupTop}`}>
              {strengths.slice(0, 2).map((strength) => (
                <Reveal key={strength.number}>
                  <StrengthItem item={strength} />
                </Reveal>
              ))}
            </div>
          </div>

          <div className={`${styles.row} ${styles.rowBottom}`}>
            <Reveal className={`${styles.imageReveal} ${styles.imageBottom}`}>
              <div className={styles.imageFrame}>
                <Image
                  className={styles.image}
                  src="/images/P06-strengths-engineers-process.png"
                  alt="工場で工程表と精密部品を確認する2人の技術者"
                  fill
                  sizes="(max-width: 899px) calc(100vw - 40px), 58vw"
                />
              </div>
            </Reveal>

            <div className={`${styles.itemGroup} ${styles.itemGroupBottom}`}>
              {strengths.slice(2).map((strength) => (
                <Reveal key={strength.number}>
                  <StrengthItem item={strength} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <nav className={styles.links} aria-label="4つの強みの関連ページ">
          <TextLink href="/business">私たちの事業を見る</TextLink>
          <TextLink href="/quality">品質管理を見る</TextLink>
        </nav>
      </Container>
    </section>
  );
}
