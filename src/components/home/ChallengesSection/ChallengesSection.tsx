import Image from "next/image";

import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { TextLink } from "@/components/ui/TextLink/TextLink";

import { Reveal } from "../Reveal/Reveal";
import { challenges } from "../sectionData";
import styles from "./ChallengesSection.module.css";

const introduction =
  "部品加工は、設備があるだけでは完結しません。材質や形状に合わせた工程設計、後工程との調整、測定方法、量産時の再現性まで考える必要があります。北陸精密テクノは、加工単体ではなく、図面受領から納品までの工程全体を見て課題を整理します。";

export function ChallengesSection() {
  return (
    <section className={styles.section} aria-labelledby="challenges-title">
      <Container className={styles.layout}>
        <div className={styles.intro}>
          <Reveal>
            <SectionHeading
              className={styles.heading}
              label="CHALLENGES"
              title={<span id="challenges-title">加工先選びで、こんな課題はありませんか。</span>}
              description={<p>{introduction}</p>}
            />
          </Reveal>

          <Reveal className={styles.imageReveal}>
            <div className={styles.imageFrame}>
              <Image
                className={styles.image}
                src="/images/P04-challenge-manual-measurement.png"
                alt="技術者がマイクロメーターで複雑形状の金属部品を測定する手元"
                fill
                sizes="(max-width: 899px) calc(100vw - 40px), 31vw"
              />
            </div>
          </Reveal>
        </div>

        <div className={styles.content}>
          <div className={styles.list}>
            {challenges.map((challenge, index) => (
              <Reveal key={challenge.number} delay={index * 80}>
                <article className={styles.item}>
                  <p className={styles.number} aria-hidden="true">{challenge.number}</p>
                  <div className={styles.itemCopy}>
                    <h3>{challenge.title}</h3>
                    <p>{challenge.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <TextLink className={styles.link} href="#strengths">
            北陸精密テクノが解決できる理由
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
