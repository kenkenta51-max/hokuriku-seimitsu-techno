import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";

import { HeroCarousel } from "./HeroCarousel";
import { heroSlides, heroStats } from "./heroData";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.gradient} aria-hidden="true" />

      <Container className={styles.contentContainer}>
        <div className={styles.copy}>
          <p className={styles.englishLabel}>PRECISION IN EVERY DETAIL</p>
          <h1 className={styles.title} id="hero-title">
            <span>精度で、</span>
            <span>産業の未来を支える。</span>
          </h1>
          <p className={styles.lead}>
            複雑形状、難削材、小中ロットの精密部品に、試作から量産まで対応。切削、研削、表面処理・熱処理の手配、組立、検査を一つの窓口でつなぎ、図面の先にある品質と納期まで支えます。
          </p>
          <div className={styles.actions}>
            <Button className={styles.primaryCta} href="/contact?type=technical" variant="primary">
              図面で相談する
            </Button>
            <Button className={styles.secondaryCta} href="/technology" variant="inverse">
              技術・設備を見る
            </Button>
          </div>
        </div>

        <div className={styles.scrollGuide} aria-hidden="true">
          <span>SCROLL</span>
          <span className={styles.scrollLine} />
        </div>
      </Container>

      <HeroCarousel slides={heroSlides} stats={heroStats} />
    </section>
  );
}
