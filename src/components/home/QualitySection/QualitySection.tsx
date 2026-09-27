import Image from "next/image";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import { ProcessFlowReveal } from "../CapabilitiesSection/ProcessFlowReveal";
import { Reveal } from "../Reveal/Reveal";
import { qualityFlowSteps, qualityTrustItems } from "../step7Data";
import styles from "./QualitySection.module.css";

const qualityParagraphs = [
  "品質は、最終検査だけで守るものではありません。図面レビューで要求を明確にし、材料受入、初品、工程内、最終、出荷の各段階で確認します。異常の兆候を工程内で捉え、工具、条件、測定方法へ戻すことで、不適合の流出だけでなく発生そのものを減らします。",
  "恒温測定室は20±1℃で管理し、三次元測定機、真円度測定機、表面粗さ計等を用途に応じて使い分けます。材料ロットから加工、外注工程、検査、出荷までを製造番号で関連付け、必要な記録を追跡できる状態で保管します。",
] as const;

export function QualitySection() {
  return (
    <section className={styles.section} aria-labelledby="quality-title">
      <Container>
        <div className={styles.layout}>
          <Reveal className={styles.copy}>
            <SectionHeading
              label="QUALITY ASSURANCE"
              title="検査で見つける前に、工程で品質をつくる。"
              titleId="quality-title"
              align="left"
              tone="light"
            />
            <div className={styles.paragraphs}>
              {qualityParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className={styles.imageReveal} delay={80}>
            <figure className={styles.imageFrame}>
              <Image
                src="/images/P12-quality-cmm-room.png"
                alt="恒温測定室で三次元測定機を操作する検査担当者"
                fill
                sizes="(max-width: 899px) 100vw, 58vw"
                className={styles.image}
              />
              <figcaption className={styles.imageCaption}>
                <span aria-hidden="true">P12</span>
                恒温測定室・三次元測定
              </figcaption>
            </figure>
          </Reveal>

          <ul className={styles.trustList} aria-label="品質に関する信頼情報">
            {qualityTrustItems.map((item, index) => (
              <li key={item}>
                <Reveal delay={index * 60}>{item}</Reveal>
              </li>
            ))}
          </ul>

          <ProcessFlowReveal className={styles.flow}>
            <span className={styles.flowLine} aria-hidden="true" />
            <ol className={styles.flowList} aria-label="品質をつくる7段階">
              {qualityFlowSteps.map((step, index) => (
                <li key={step.number}>
                  <Reveal className={styles.flowItem} delay={index * 70}>
                    <span className={styles.flowNumber} aria-hidden="true">
                      {step.number}
                    </span>
                    <span className={styles.flowName}>{step.name}</span>
                  </Reveal>
                </li>
              ))}
            </ol>
          </ProcessFlowReveal>

          <div className={styles.cta}>
            <Button href="/quality" variant="secondary">
              品質管理を見る
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
