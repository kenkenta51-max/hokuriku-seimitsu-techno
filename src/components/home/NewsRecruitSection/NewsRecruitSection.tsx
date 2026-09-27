import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { TextLink } from "@/components/ui/TextLink/TextLink";

import { Reveal } from "../Reveal/Reveal";
import { newsItems } from "../step8Data";
import styles from "./NewsRecruitSection.module.css";

export function NewsRecruitSection() {
  return (
    <section className={styles.section} aria-label="お知らせと採用情報">
      <Container className={styles.grid}>
        <div className={styles.news} aria-labelledby="news-title">
          <SectionHeading label="NEWS" title="お知らせ" titleId="news-title" />

          <div className={styles.newsBody}>
            {newsItems.length > 0 ? (
              <ul className={styles.newsList}>
                {newsItems.map((item) => (
                  <li key={item.href}>
                    <Link className={styles.newsItem} href={item.href}>
                      <time dateTime={item.date}>{item.date}</time>
                      <span>{item.category}</span>
                      <span>{item.title}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.emptyState}>現在、新しいお知らせはありません。</p>
            )}
          </div>

          <TextLink href="/news">お知らせをすべて見る</TextLink>
        </div>

        <article className={styles.recruit} aria-labelledby="recruit-title">
          <div className={styles.recruitCopy}>
            <SectionHeading
              className={styles.recruitHeading}
              label="RECRUIT"
              title={
                <>
                  100分の1ミリと向き合う仕事を、
                  <span className={styles.noBreak}>北陸で。</span>
                </>
              }
              titleId="recruit-title"
              tone="dark"
            />
            <p className={styles.recruitText}>
              ものづくりは、一人の技術だけでは完成しません。加工、工程設計、品質保証、生産管理、営業技術が情報をつなぎ、小さな違和感を見逃さないことで、安定した品質が生まれます。未経験から基礎を学ぶ人も、経験を生かして工程全体を改善する人も、それぞれの強みを伸ばせる環境を整えています。
            </p>
          </div>

          <Reveal className={styles.recruitMedia}>
            <Image
              className={styles.recruitImage}
              src="/images/P13-recruit-mentoring.png"
              alt="工場内で若手技術者と熟練技術者が精密部品について相談する様子"
              fill
              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1439px) 50vw, 640px"
            />
            <span className={styles.recruitOverlay} aria-hidden="true" />
          </Reveal>

          <Button className={styles.recruitCta} href="/recruit" variant="inverse">
            仕事と人を知る
          </Button>
        </article>
      </Container>
    </section>
  );
}
