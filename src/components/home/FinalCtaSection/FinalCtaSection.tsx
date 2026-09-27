import Image from "next/image";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";

import { Reveal } from "../Reveal/Reveal";
import styles from "./FinalCtaSection.module.css";

export function FinalCtaSection() {
  return (
    <section className={styles.section} aria-labelledby="final-cta-title">
      <Image
        className={styles.backgroundImage}
        src="/images/P14-final-cta-factory.png"
        alt=""
        fill
        sizes="100vw"
      />
      <span className={styles.overlay} aria-hidden="true" />

      <Container className={styles.container}>
        <Reveal className={styles.content}>
          <h2 className={styles.title} id="final-cta-title">
            図面段階でも、仕様が固まっていなくてもご相談ください。
          </h2>
          <p className={styles.description}>
            材質、形状、公差、数量、希望納期を確認し、加工方法と測定方法を技術担当が検討します。「対応できるかだけ知りたい」「試作後の量産方法を相談したい」「複数工程をまとめたい」といった段階でも構いません。
          </p>
          <div className={styles.notes}>
            <p>営業日24時間以内に一次返信。図面見積は原則2営業日以内に回答します。</p>
            <p>PDF・DXF・STEP・ZIP／合計20MBまで</p>
          </div>
          <div className={styles.actions}>
            <Button href="/contact?type=technical" variant="primary">
              見積・技術相談をする
            </Button>
            <Button href="/contact?type=general" variant="inverse">
              一般のお問い合わせ
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

