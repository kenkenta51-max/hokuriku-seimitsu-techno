import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/home/Reveal/Reveal";
import { ContextualCta } from "@/components/page/ContextualCta/ContextualCta";
import { PageHero } from "@/components/page/PageHero/PageHero";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import styles from "../detail-page.module.css";
import qualityStyles from "./quality.module.css";

export const metadata: Metadata = {
  title: "品質保証・検査体制｜北陸精密テクノ株式会社",
  description: "北陸精密テクノの品質保証体制をご紹介します。工程設計、初品確認、工程内検査、最終検査、出荷判定、トレーサビリティまで一貫して管理し、安定した精密部品供給を支えます。",
  alternates: { canonical: "/quality" },
};

const principles = ["図面・仕様・変更点を、製造前に明確にする", "不良を後工程へ流さない工程を設計する", "測定方法と判定基準を統一する", "材料、工程、検査記録を追跡可能にする", "発生した問題を、標準と教育へ確実に反映する"] as const;
const qualityFlow = [
  ["受注・仕様確認", "図面番号、改訂、材質、数量、公差、表面処理、証明書、梱包条件を確認します。不明点は着手前に照会し、解釈の違いを残しません。"],
  ["工程設計・リスク評価", "重要特性、加工基準、変形、工具摩耗、外注工程、測定タイミングを整理します。量産品は管理項目と頻度を工程表・検査基準書へ反映します。"],
  ["材料・購入品の受入確認", "材質、寸法、数量、ミルシートや購入仕様を照合します。指定がある材料は、識別を維持したまま工程へ払い出します。"],
  ["初品確認", "段取り後の初品で、寸法、外観、加工基準、プログラム、工具補正を確認します。承認後に連続加工へ移行し、条件変更時は再確認します。"],
  ["工程内検査", "温度、工具寿命、加工数、測定値の推移を確認し、異常の兆候を早期に捉えます。次工程で修正できない特性は、その工程内で判定します。"],
  ["最終検査・出荷判定", "図面と検査基準に基づき、寸法、幾何公差、粗さ、外観、数量、識別を確認します。必要に応じて検査成績書を作成し、品質保証部門が出荷可否を判定します。"],
  ["梱包・記録保管", "防錆、接触防止、向き、員数、ラベルを確認し、製品に適した方法で梱包します。製造番号と材料・工程・検査記録をひも付け、照会時に追跡できる状態で保管します。"],
] as const;
const equipment = [["CNC三次元測定機", "位置度、平面度、輪郭、複合形状", "X900×Y1,200×Z700mm"], ["画像測定機", "微細穴、輪郭、非接触測定", "X300×Y200×Z200mm"], ["真円度測定機", "真円度、円筒度、同軸度", "最大径φ300mm"], ["表面粗さ・輪郭形状測定機", "粗さ、段差、R形状", "触針式"], ["測定顕微鏡", "微細形状、バリ、外観", "最大倍率100倍"], ["ハイトゲージ・定盤", "高さ、平行、基準測定", "0〜600mm"]] as const;
const reports = ["寸法検査成績書", "三次元測定レポート", "材料証明書・ミルシート", "熱処理・硬度証明書", "表面処理証明書", "RoHS等の含有化学物質調査票", "校正証明書の写し"] as const;
const traceability = [["受注", "顧客品番、図面番号、改訂、数量、納期"], ["材料", "材質、材料ロット、証明書、入荷日"], ["製造", "工程、設備、作業日、加工条件、作業者"], ["外注", "委託先、処理条件、証明書、受入結果"], ["検査", "測定機、測定日、測定値、判定者"], ["出荷", "出荷日、数量、梱包、納品先"]] as const;
const results = [["納期遵守率", "99.3%"], ["社内不良率", "12ppm"], ["技能検定等の有資格者", "32名"], ["測定機器の校正実施率", "100%"]] as const;
const improvements = [["工具摩耗の傾向管理", "難削材部品の測定値を加工数ごとに記録し、工具交換時期を固定数から傾向判定へ変更。寸法補正のばらつきを抑え、再加工を削減しました。"], ["測定基準の共通化", "作業者ごとに異なっていたクランプ方法と測定位置を図示し、検査基準書へ統合。工程内測定と最終検査の差を抑えました。"], ["梱包仕様の見直し", "輸送中に接触しやすい製品へ専用トレーを導入。外観不良の再発防止と、顧客側での取り出し作業の短縮につなげました。"]] as const;

type QualityVisualProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
};

function QualityVisual({ src, alt, className, sizes = "(max-width: 899px) calc(100vw - 40px), 50vw" }: QualityVisualProps) {
  return (
    <Reveal>
      <div className={[qualityStyles.visual, className].filter(Boolean).join(" ")}>
        <Image className={qualityStyles.visualImage} src={src} alt={alt} fill sizes={sizes} />
      </div>
    </Reveal>
  );
}

const qualityFlowIcons = [
  <><path d="M7 3.5h10v3H7z" /><path d="M5 5.5H4v15h16v-15h-1M8 11l2 2 5-5M8 17h8" /></>,
  <><path d="M4 18h4l2-3 4 2 2-4h4" /><circle cx="6" cy="7" r="2" /><circle cx="18" cy="7" r="2" /><path d="M8 7h8M12 7v5" /></>,
  <><path d="M4 8.5 12 4l8 4.5v9L12 22l-8-4.5z" /><path d="m4 8.5 8 4.5 8-4.5M12 13v9M8 6.2l8 4.5" /></>,
  <><circle cx="10" cy="10" r="5" /><path d="m13.5 13.5 5 5M8 10l1.4 1.4L12 8.8M18 4v5M15.5 6.5h5" /></>,
  <><path d="M4 19V9M8 19V5M12 19v-7M16 19V8M20 19V4" /><path d="m4 7 4-3 4 5 4-4 4-2" /></>,
  <><path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
  <><path d="M4 8.5 12 4l8 4.5v9L12 22l-8-4.5z" /><path d="m4 8.5 8 4.5 8-4.5M12 13v9" /><path d="M15.5 3.5h5v5M20.5 3.5 16 8" /></>,
] as const;

function QualityFlowIcon({ index }: { index: number }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
      {qualityFlowIcons[index]}
    </svg>
  );
}

export default function QualityPage() {
  return <main id="main-content" className={styles.main} tabIndex={-1}>
    <PageHero current="品質管理" label="QUALITY ASSURANCE" title="検査で見つける前に、工程で品質をつくる。" lead="精密部品の品質は、最終検査だけではつくれません。図面を読み解き、変動要因を工程へ織り込み、加工中の状態を確かめ、記録を次の生産へ戻す。北陸精密テクノは、受注から出荷までのすべてを品質保証の対象と考えています。" imageSrc="/images/P12-quality-cmm-room.png" alt="恒温測定室で三次元測定機を操作する検査担当者" variant="quality" />

    <section className={styles.section} aria-labelledby="quality-policy-title"><Container><div className={styles.twoColumn}><Reveal><SectionHeading label="QUALITY POLICY" title="要求を正しく理解し、再現できる工程へ落とし込む。" titleId="quality-policy-title" /></Reveal><div className={qualityStyles.copyWithVisual}><div className={styles.copy}><p>寸法が合っているだけでは、部品として十分とは限りません。用途、組付け基準、相手部品、使用環境、必要証明まで確認し、お客様が求める機能を満たす状態を品質と定義します。</p><p>私たちは、次の5つを品質活動の基本としています。</p></div><QualityVisual src="/images/quality-policy-review.png" alt="製造前に図面と品質要求を確認する技術担当者と品質担当者" className={qualityStyles.policyVisual} /></div></div><ol className={styles.numberList}>{principles.map((item, index) => <li key={item}><span className={styles.number}>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></Container></section>

    <section className={[styles.section, styles.offwhite].join(" ")} aria-labelledby="quality-flow-title"><Container><Reveal><SectionHeading label="QUALITY FLOW" title="7段階の品質管理" titleId="quality-flow-title" /></Reveal><QualityVisual src="/images/quality-flow-connected-process.png" alt="加工、工程内検査、測定、梱包まで品質情報をつなぐ製造現場" className={qualityStyles.flowVisual} sizes="(max-width: 899px) calc(100vw - 40px), 1280px" /><ol className={qualityStyles.qualityFlow}>{qualityFlow.map(([title, body], index) => <li className={qualityStyles.flowStep} key={title}><span className={qualityStyles.flowMarker}><QualityFlowIcon index={index} /></span><div className={qualityStyles.flowContent}><span className={qualityStyles.flowNumber}>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></div></li>)}</ol></Container></section>

    <section className={styles.section} aria-labelledby="measurement-environment-title"><Container><div className={qualityStyles.measurementIntro}><Reveal><SectionHeading label="MEASUREMENT" title="測れることまで含めて、加工可否を判断します。" titleId="measurement-environment-title" description={<p>加工できても、要求精度を適切に測定できなければ品質は保証できません。温度管理された精密測定室に三次元測定機、真円度測定機、形状・粗さ測定機などを配置し、形状と公差に応じて測定方法を選定します。</p>} /></Reveal><QualityVisual src="/images/quality-measurement-optical.png" alt="光学測定機で精密部品の微細流路を測定する検査担当者" className={qualityStyles.measurementVisual} /></div><div className={styles.dataTable}><table><caption>測定環境・主要検査設備</caption><thead><tr><th scope="col">設備</th><th scope="col">主な用途</th><th scope="col">測定範囲・仕様</th></tr></thead><tbody>{equipment.map(([name, use, spec]) => <tr key={name}><th scope="row">{name}</th><td>{use}</td><td>{spec}</td></tr>)}</tbody></table></div><dl className={styles.mobileData}>{equipment.map(([name, use, spec]) => <div key={name}><dt>{name}</dt><dd><span>主な用途</span>{use}</dd><dd><span>測定範囲・仕様</span>{spec}</dd></div>)}</dl><p className={styles.footnote}>掲載仕様は本サイト用の架空設定です。実公開時は設備台帳と照合してください。</p></Container></section>

    <section className={[styles.section, styles.soft].join(" ")} aria-labelledby="reports-title"><Container><div className={styles.twoColumn}><Reveal><SectionHeading label="INSPECTION REPORTS" title="必要な記録を、必要な形式で。" titleId="reports-title" description={<p>検査成績書は、指定寸法、重要特性、全寸法など、ご要望に応じて作成します。材料証明書、熱処理証明書、表面処理証明書の取得・提出にも対応します。</p>} /></Reveal><Reveal><div className={styles.imageFrame}><Image className={styles.image} src="/images/quality-inspection-record-review.png" alt="恒温測定室で検査成績書と測定結果を照合する品質担当者" fill sizes="(max-width: 899px) calc(100vw - 40px), 50vw" /></div></Reveal></div><div className={styles.records}><ul>{reports.map((item) => <li key={item}>{item}</li>)}</ul><div className={styles.copy}><p>提出形式、測定点数、保管期間に指定がある場合は、見積時にお知らせください。</p></div></div></Container></section>

    <section className={styles.section} aria-labelledby="traceability-title"><Container><div className={styles.twoColumn}><Reveal><div className={styles.imageFrame}><Image className={styles.image} src="/images/quality-traceability-check.png" alt="製造番号ラベルと工程票を照合する品質担当者" fill sizes="(max-width: 899px) calc(100vw - 40px), 42vw" /></div></Reveal><Reveal><SectionHeading label="TRACEABILITY" title="材料から出荷まで、製造番号でつなぐ。" titleId="traceability-title" description={<p>対象製品には製造番号を付与し、受注情報、図面改訂、材料ロット、工程、設備、作業記録、外注先、検査結果、出荷先をひも付けます。万一の照会時にも、対象範囲を速やかに特定できる体制を整えています。</p>} /></Reveal></div><div className={styles.dataTable}><table><caption>製造番号へ関連付ける主な記録</caption><thead><tr><th scope="col">追跡項目</th><th scope="col">主な記録</th></tr></thead><tbody>{traceability.map(([item, record]) => <tr key={item}><th scope="row">{item}</th><td>{record}</td></tr>)}</tbody></table></div><dl className={styles.mobileData}>{traceability.map(([item, record]) => <div key={item}><dt>{item}</dt><dd>{record}</dd></div>)}</dl></Container></section>

    <section className={[styles.section, styles.offwhite].join(" ")} aria-labelledby="nonconformance-title"><Container><div className={styles.twoColumn}><Reveal><SectionHeading label="NONCONFORMANCE" title="止める、分ける、確かめる。再発を防ぐところまで。" titleId="nonconformance-title" /></Reveal><div className={styles.copy}><p>異常または不適合を確認した場合は、対象工程を停止し、識別・隔離します。流出範囲と影響を確認したうえで、必要に応じてお客様へ速やかに報告します。</p><p>原因分析では、発生原因と流出原因を分けて検討します。対策後は工程、治具、プログラム、検査、教育、標準書へ反映し、有効性を確認します。ご指定の様式がある場合は、8Dレポート等での報告にも対応します。</p></div></div></Container></section>

    <section className={[styles.section, styles.dark].join(" ")} aria-labelledby="results-title"><Container><Reveal><SectionHeading label="QUALITY PERFORMANCE" title="数字を、次の改善の出発点にする。" titleId="results-title" tone="dark" /></Reveal><dl className={styles.stats}>{results.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl><p className={styles.footnote}>数値は本サイト用の架空実績です。実公開時は対象期間と算出基準を併記してください。</p></Container></section>

    <section className={styles.section} aria-labelledby="management-title"><Container><div className={styles.twoColumn}><Reveal><SectionHeading label="MANAGEMENT SYSTEM" title="仕組みを運用し、継続的に改善する。" titleId="management-title" /></Reveal><div className={qualityStyles.copyWithVisual}><div className={styles.copy}><p>品質マネジメントシステムISO 9001、環境マネジメントシステムISO 14001に基づき、目標設定、内部監査、マネジメントレビュー、是正・改善活動を継続しています。</p><p><strong>ISO 9001 品質マネジメントシステム</strong><br /><strong>ISO 14001 環境マネジメントシステム</strong></p><p>認証番号、認証範囲、認証機関、初回認証日、有効期限を登録証と照合して追記してください。</p></div><QualityVisual src="/images/quality-management-review.png" alt="品質実績と監査記録を確認するマネジメントレビュー" className={qualityStyles.managementVisual} /></div></div></Container></section>

    <section className={[styles.section, styles.offwhite].join(" ")} aria-labelledby="improvements-title"><Container><Reveal><SectionHeading label="IMPROVEMENTS" title="改善事例" titleId="improvements-title" /></Reveal><div className={qualityStyles.improvementBody}><QualityVisual src="/images/quality-improvements-data.png" alt="加工品と測定データを確認し改善内容を検討する技術者" className={qualityStyles.improvementVisual} /><div className={qualityStyles.improvementList}>{improvements.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></Container></section>

    <ContextualCta tone="light" title="検査方法や提出書類も、見積段階からご相談ください。" body="重要特性、測定方法、必要証明、トレーサビリティの範囲を確認し、加工と品質保証を一つの工程としてご提案します。" actions={[{ label: "品質条件を相談する", href: "/contact?type=technical", variant: "primary" }, { label: "技術・設備を見る", href: "/technology", variant: "secondary" }]} />
  </main>;
}
