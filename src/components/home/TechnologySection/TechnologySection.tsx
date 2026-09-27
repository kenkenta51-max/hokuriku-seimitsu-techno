import Image from "next/image";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import { Reveal } from "../Reveal/Reveal";
import { technologyItems } from "../step6Data";
import styles from "./TechnologySection.module.css";

const introduction =
  "加工精度を安定させるのは、設備の性能だけではありません。工具、治具、加工条件、温度、測定、作業標準をそろえ、誰が担当しても同じ判断ができる状態をつくります。";

export function TechnologySection() {
  return (
    <section className={styles.section} aria-labelledby="technology-title">
      <Container>
        <div className={styles.layout}>
          <Reveal className={styles.headingReveal}>
            <SectionHeading
              className={styles.heading}
              label="TECHNOLOGY & FACILITIES"
              title={<span id="technology-title">設備を持つだけでなく、精度を再現する。</span>}
              description={<p>{introduction}</p>}
            />
          </Reveal>

          <Reveal className={styles.imageReveal}>
            <figure className={styles.figure}>
              <div className={styles.imageFrame}>
                <Image
                  className={styles.image}
                  src="/images/P08-technology-5axis-chamber.png"
                  alt="5軸加工機の加工室で精密部品を切削する工具と加工点"
                  fill
                  sizes="(max-width: 899px) calc(100vw - 40px), 58vw"
                />
              </div>
              <figcaption className={styles.caption}>
                <span aria-hidden="true">P08</span>
                <span>5軸加工機の加工室・切削点</span>
              </figcaption>
            </figure>
          </Reveal>

          <ol className={styles.technologyList}>
            {technologyItems.map((item) => (
              <li key={item.number} className={styles.technologyItem}>
                <p className={styles.number} aria-hidden="true">{item.number}</p>
                <div className={styles.itemCopy}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.cta}>
            <Button href="/technology" variant="secondary">技術・設備を詳しく見る</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
