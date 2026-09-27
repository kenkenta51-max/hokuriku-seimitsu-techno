import type { Metadata } from "next";

import { CapabilitiesSection } from "@/components/home/CapabilitiesSection/CapabilitiesSection";
import { ChallengesSection } from "@/components/home/ChallengesSection/ChallengesSection";
import { ConsultationProcessSection } from "@/components/home/ConsultationProcessSection/ConsultationProcessSection";
import { FactsSection } from "@/components/home/FactsSection/FactsSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection/FinalCtaSection";
import { Hero } from "@/components/home/Hero/Hero";
import { NewsRecruitSection } from "@/components/home/NewsRecruitSection/NewsRecruitSection";
import { ProductsSection } from "@/components/home/ProductsSection/ProductsSection";
import { QualitySection } from "@/components/home/QualitySection/QualitySection";
import { StrengthsSection } from "@/components/home/StrengthsSection/StrengthsSection";
import { TechnologySection } from "@/components/home/TechnologySection/TechnologySection";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "北陸精密テクノ株式会社｜精密部品加工・5軸加工・試作から量産まで",
  description:
    "富山県高岡市の精密部品メーカー、北陸精密テクノ株式会社。5軸加工、複合旋削、研削、表面処理手配、組立、検査まで一貫対応。難削材・複雑形状・試作1個から量産まで、図面段階からご相談いただけます。",
};

export default function Home() {
  return (
    <main id="main-content" className={styles.main} tabIndex={-1}>
      <Hero />
      <ChallengesSection />
      <StrengthsSection />
      <CapabilitiesSection />
      <FactsSection />
      <TechnologySection />
      <ProductsSection />
      <QualitySection />
      <ConsultationProcessSection />
      <NewsRecruitSection />
      <FinalCtaSection />
    </main>
  );
}
