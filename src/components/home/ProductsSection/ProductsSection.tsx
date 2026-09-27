import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import { Reveal } from "../Reveal/Reveal";
import { productCases } from "../step6Data";
import { ProductCarousel } from "./ProductCarousel";
import styles from "./ProductsSection.module.css";

const introduction =
  "製品の名前が異なっても、材質、形状、精度、工程が近ければ、過去の加工経験を生かせます。代表事例では、完成写真だけでなく、課題、工程設計、検査、改善結果まで紹介します。";

export function ProductsSection() {
  return (
    <section className={styles.section} aria-labelledby="products-title">
      <Container>
        <Reveal>
          <SectionHeading
            className={styles.heading}
            label="PRODUCTS & CASES"
            title={<span id="products-title">加工実績から、できることを探す。</span>}
            description={<p>{introduction}</p>}
          />
        </Reveal>

        <ProductCarousel cases={productCases} />

        <div className={styles.cta}>
          <Button href="/products" variant="secondary">製品・加工事例を見る</Button>
        </div>
      </Container>
    </section>
  );
}
