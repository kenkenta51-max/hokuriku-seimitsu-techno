import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/home/Reveal/Reveal";
import { ContextualCta } from "@/components/page/ContextualCta/ContextualCta";
import { PageHero } from "@/components/page/PageHero/PageHero";
import { ProductCaseFilter } from "@/components/products/ProductCaseFilter";
import {
  productCases,
  productFilterCounts,
  productFilters,
} from "@/components/products/productCases";
import { Container } from "@/components/ui/Container/Container";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "製品・加工事例｜複雑形状・シャフト・真空部品｜北陸精密テクノ",
  description:
    "複雑形状部品、高精度シャフト、真空装置部品、治具・ベース、FAユニット部品の匿名加工事例をご紹介。材質、精度、ロット、工程、課題、提案、結果まで掲載しています。",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <main id="main-content" className={styles.main} tabIndex={-1}>
      <PageHero
        current="製品・加工事例"
        label="PRODUCTS & CASES"
        title="加工実績から、できることを探す。"
        lead="加工可否を判断するには、完成写真だけでなく、材質、サイズ、精度、ロット、工程を見ることが大切です。ここでは、代表的な5つの匿名事例を、相談背景、課題、提案、加工・検査、結果の順で紹介します。掲載例と同じ形状でなくても、条件が近い案件から検討できます。"
        imageSrc="/images/products-hero-cases-v2.png"
        alt="真空部品、精密シャフト、流路ブロックの加工事例"
        variant="products"
      />

      <section className={styles.cases} aria-label="加工事例">
        <Container>
          <ProductCaseFilter
            counts={productFilterCounts}
            filters={productFilters}
          >
            {productCases.map((productCase, index) => {
              const hasImage = Boolean(productCase.imageSrc && productCase.alt);
              const imageOnRight = index % 2 === 1;

              return (
                <article
                  className={[
                    styles.caseArticle,
                    hasImage ? styles.withImage : styles.textOnly,
                    imageOnRight ? styles.imageRight : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  data-categories={productCase.categories.join(" ")}
                  id={`case-${productCase.id}`}
                  key={productCase.id}
                  aria-labelledby={`case-${productCase.id}-title`}
                >
                  {!hasImage ? (
                    <span className={styles.watermark} aria-hidden="true">
                      {productCase.number}
                    </span>
                  ) : null}

                  <div className={styles.caseTop}>
                    <Reveal className={styles.caseIntro}>
                      <div className={styles.caseMeta}>
                        <span className={styles.caseNumber}>
                          {productCase.number}
                        </span>
                        <p>{productCase.categoryLabels.join("／")}</p>
                      </div>
                      <h2 id={`case-${productCase.id}-title`}>
                        {productCase.title}
                      </h2>
                      <p className={styles.summary}>{productCase.summary}</p>
                    </Reveal>

                    {hasImage ? (
                      <Reveal className={styles.caseFigure}>
                        <figure>
                          <div className={styles.imageFrame}>
                            <Image
                              className={styles.image}
                              src={productCase.imageSrc!}
                              alt={productCase.alt!}
                              fill
                              sizes="(max-width: 899px) calc(100vw - 40px), 50vw"
                            />
                          </div>
                        </figure>
                      </Reveal>
                    ) : null}

                    <div className={styles.specification}>
                      <h3>仕様</h3>
                      <dl>
                        {productCase.specs.map((spec) => (
                          <div key={spec.label}>
                            <dt>{spec.label}</dt>
                            <dd>{spec.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>

                  <div className={styles.phases}>
                    {productCase.phases.map((phase) => (
                      <section key={phase.title}>
                        <h3>{phase.title}</h3>
                        <p>{phase.body}</p>
                      </section>
                    ))}
                  </div>
                </article>
              );
            })}
          </ProductCaseFilter>
        </Container>
      </section>

      <section className={styles.confidential} aria-labelledby="confidential-title">
        <Container>
          <div className={styles.confidentialGrid}>
            <p className={styles.confidentialLabel}>CONFIDENTIAL WORK</p>
            <div>
              <h2 id="confidential-title">
                公開できない案件にも、蓄積した加工経験があります。
              </h2>
              <div className={styles.confidentialCopy}>
                <p>
                  精密部品の多くは、守秘義務により顧客名、用途、図面、写真を公開できません。そのため、本ページだけですべての対応実績をお伝えすることはできません。
                </p>
                <p>
                  図面をご共有いただければ、材質、形状、精度、工程が近い加工経験の有無を確認し、開示可能な範囲で加工方法や注意点をご説明します。NDA締結前に共有できる情報の範囲もご相談いただけます。
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ContextualCta
        tone="light"
        title="同じ形状でなくても、近い条件から検討できます。"
        body="材質、寸法、公差、数量、特殊工程をご共有ください。過去の加工経験と設備能力から、対応方法を検討します。"
        actions={[
          {
            label: "類似品を相談する",
            href: "/contact?type=technical",
            variant: "primary",
          },
          {
            label: "技術・設備を見る",
            href: "/technology",
            variant: "secondary",
          },
        ]}
      />
    </main>
  );
}
