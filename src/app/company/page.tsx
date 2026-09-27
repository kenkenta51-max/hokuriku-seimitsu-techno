import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/home/Reveal/Reveal";
import { ContextualCta } from "@/components/page/ContextualCta/ContextualCta";
import { PageHero } from "@/components/page/PageHero/PageHero";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import styles from "../detail-page.module.css";
import companyStyles from "./company.module.css";

export const metadata: Metadata = {
  title: "会社情報｜北陸精密テクノ株式会社",
  description: "北陸精密テクノ株式会社の会社概要、事業拠点、沿革、組織、アクセスをご案内します。富山県高岡市を拠点に、精密部品加工とユニット組立で産業を支えています。",
  alternates: { canonical: "/company" },
};

const profile = [["会社名", "北陸精密テクノ株式会社"], ["英文社名", "Hokuriku Precision Technology Co., Ltd."], ["代表者", "代表取締役社長　田村 直樹"], ["設立", "1986年4月18日"], ["資本金", "8,000万円"], ["従業員数", "128名"], ["所在地", "〒933-0000 富山県高岡市テクノパーク1-8-6"], ["電話番号", "0766-00-2486"], ["事業内容", "精密切削加工、研削加工、特殊工程手配、精密ユニット組立、検査・品質保証"], ["主要分野", "産業機械、半導体製造装置、医療・分析機器、エネルギー関連装置、FA・ロボット"], ["取引金融機関", "北陸銀行、富山第一銀行"], ["認証", "ISO 9001、ISO 14001"], ["敷地面積", "12,800㎡"], ["延床面積", "6,400㎡"]] as const;
const bases = [
  { name: "本社・第一工場", address: "〒933-0000 富山県高岡市テクノパーク1-8-6", functions: "本社機能、営業、調達、生産管理、マシニング、複合加工、精密測定、品質保証", description: "開発相談から生産管理、加工、最終検査までを担う中核拠点です。5軸加工機と三次元測定機を近接配置し、加工と検証の往復を速めています。", image: "/images/company-headquarters-machining-interior.png", alt: "5軸加工設備と測定エリアを配置した本社・第一工場の内観イメージ" },
  { name: "第二工場", address: "〒933-0000 富山県高岡市テクノパーク1-10-2", functions: "CNC旋盤、研削、量産セル、洗浄、梱包", description: "中小径の旋削品と継続量産品を中心に生産する拠点です。工程内測定と工具管理を標準化し、月産品の安定供給を支えています。", image: "/images/company-second-factory-turning-cell.png", alt: "CNC旋盤とバーフィーダーが並ぶ第二工場の量産セルのイメージ" },
  { name: "アセンブリ・物流棟", address: "本社敷地内", functions: "部品受入、精密組立、動作確認、キッティング、出荷", description: "自社加工品、協力会社工程、購入品を集約し、ユニットとして納品するための拠点です。部品表と製造番号に基づき、構成部品を追跡します。", image: "/images/company-assembly-logistics.png", alt: "精密部品の組立と梱包を行う組立・物流棟の作業エリア" },
] as const;
const history = [["1986", "富山県高岡市で田村精機として創業。産業機械部品の旋削加工を開始"], ["1992", "法人化し、北陸精密テクノ株式会社へ社名変更"], ["1998", "マシニングセンタを導入し、角物部品へ事業領域を拡大"], ["2003", "ISO 9001認証取得"], ["2008", "本社・第一工場をテクノパークへ移転"], ["2012", "精密測定室を新設。三次元測定機を導入"], ["2015", "ISO 14001認証取得"], ["2018", "第二工場を開設し、量産セルを増設"], ["2021", "5軸加工と複合旋盤の設備を拡充"], ["2024", "アセンブリ・物流棟を稼働。ユニット納品体制を強化"], ["2026", "創業40周年。次世代技能育成プログラムを開始"]] as const;
const organization = [
  { department: "営業技術", role: "要求整理、見積、仕様照会、提案", image: "/images/company-organization-sales-engineering.png", alt: "図面と精密加工部品を確認しながら仕様を検討する営業技術と製造の担当者" },
  { department: "生産技術", role: "工程設計、治具、プログラム、量産移行", image: "/images/company-organization-production-engineering.png", alt: "治具と加工シミュレーションを確認し工程を設計する生産技術者" },
  { department: "製造", role: "切削、研削、工程内検査、改善", image: "/images/company-organization-manufacturing.png", alt: "5軸加工機の加工状況を安全窓越しに確認する製造担当者" },
  { department: "品質保証", role: "検査基準、最終検査、出荷判定、是正", image: "/images/company-organization-quality-assurance.png", alt: "三次元測定機へ精密部品を設置して検査する品質保証担当者" },
  { department: "調達", role: "材料、購入品、協力会社工程の管理", image: "/images/company-organization-procurement.png", alt: "受入材料と証明書を照合する調達担当者と受入検査担当者" },
  { department: "生産管理", role: "進捗、負荷、納期、出荷の統制", image: "/images/company-organization-production-control.png", alt: "工場の稼働状況を見ながら生産計画を確認する生産管理担当者" },
] as const;

export default function CompanyPage() {
  return <main id="main-content" className={styles.main} tabIndex={-1}>
    <PageHero current="会社情報" label="COMPANY" title="北陸から、ものづくりの次を支える。" lead="1986年の創業以来、私たちは加工技術と誠実な対話を積み重ねてきました。地域に根を張りながら、お客様の開発、生産、品質を支える技術パートナーを目指しています。" imageSrc="/images/company-headquarters-exterior.png" alt="北陸の山並みを背景にした北陸精密テクノの本社工場外観" variant="company" />

    <section className={[styles.section, companyStyles.anchor].join(" ")} id="profile" aria-labelledby="profile-title"><Container><Reveal><SectionHeading label="COMPANY PROFILE" title="会社概要" titleId="profile-title" /></Reveal><div className={styles.dataTable}><table><caption>北陸精密テクノ株式会社の基本情報</caption><tbody>{profile.map(([term, value]) => <tr key={term}><th scope="row">{term}</th><td>{value}</td></tr>)}</tbody></table></div><dl className={styles.mobileData}>{profile.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl><p className={styles.footnote}>本ページの会社情報は架空設定です。実公開時は登記、会社案内、認証登録証と照合してください。</p></Container></section>

    <section className={[styles.section, styles.offwhite, companyStyles.anchor].join(" ")} id="bases" aria-labelledby="bases-title"><Container><Reveal><SectionHeading label="OUR BASES" title="事業拠点" titleId="bases-title" /></Reveal><div className={styles.locations}>{bases.map((base) => <article className={styles.location} key={base.name}><div className={styles.imageFrame}><Image className={styles.image} src={base.image} alt={base.alt} fill sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 899px) 50vw, 33vw" /></div><div className={styles.locationBody}><h3>{base.name}</h3><dl><div><dt>所在地</dt><dd>{base.address}</dd></div><div><dt>機能</dt><dd>{base.functions}</dd></div></dl><p>{base.description}</p></div></article>)}</div></Container></section>

    <section className={[styles.section, companyStyles.anchor].join(" ")} id="history" aria-labelledby="history-title"><Container><Reveal><SectionHeading label="HISTORY" title="沿革" titleId="history-title" /></Reveal><Reveal><div className={companyStyles.historyImage}><Image src="/images/company-history-1986.png" alt="1986年頃の町工場で旋盤加工と精密部品の確認を行う技術者" fill sizes="(max-width: 899px) calc(100vw - 40px), 1280px" /></div></Reveal><ol className={[styles.timeline, companyStyles.historyTimeline].join(" ")}>{history.map(([year, event]) => <li key={year}><time dateTime={year}>{year}</time><p>{event}</p></li>)}</ol></Container></section>

    <section className={[styles.section, styles.soft, companyStyles.anchor].join(" ")} id="organization" aria-labelledby="organization-title"><Container><div className={styles.twoColumn}><Reveal><SectionHeading label="ORGANIZATION" title="部門を越えて、ひとつの要求に向き合う。" titleId="organization-title" /></Reveal><p className={styles.sectionLead}>営業技術、生産技術、製造、品質保証、調達、生産管理が、案件ごとに必要な情報を共有します。難易度の高い案件は受注前から横断レビューを行い、納期・品質・コストの成立性を確認します。</p></div><dl className={companyStyles.organizationGrid}>{organization.map(({ department, role, image, alt }, index) => <div className={companyStyles.organizationItem} key={department}><div className={companyStyles.organizationImage}><Image src={image} alt={alt} fill sizes="(max-width: 699px) calc(100vw - 40px), (max-width: 1023px) 50vw, 58vw" /></div><div className={companyStyles.organizationBody}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><dt>{department}</dt><dd>{role}</dd></div></div>)}</dl></Container></section>

    <section className={[styles.section, companyStyles.anchor].join(" ")} id="community" aria-labelledby="community-title"><Container><div className={styles.twoColumn}><Reveal><div className={styles.imageFrame}><Image className={styles.image} src="/images/company-community-environment.png" alt="工場前で地域の高校生に精密加工部品を説明する技術者" fill sizes="(max-width: 899px) calc(100vw - 40px), 42vw" /></div></Reveal><Reveal><SectionHeading label="ROOTED IN HOKURIKU" title="地域で育て、地域と続ける。" titleId="community-title" description={<p>地元高校・高等専門学校の工場見学、インターンシップ、技能実習の受け入れを通じ、ものづくりの仕事を次世代へ伝えます。省エネルギー設備への更新、切削油の長寿命化、金属切粉の分別回収にも取り組み、製造と環境負荷低減の両立を進めています。</p>} /></Reveal></div></Container></section>

    <section className={[styles.section, styles.offwhite, companyStyles.anchor].join(" ")} id="access" aria-labelledby="access-title"><Container><div className={styles.twoColumn}><div><Reveal><SectionHeading label="ACCESS" title="アクセス" titleId="access-title" /></Reveal><div className={styles.copy}><p><strong>〒933-0000 富山県高岡市テクノパーク1-8-6</strong></p><ul><li>北陸新幹線 新高岡駅から車で約20分</li><li>能越自動車道 高岡ICから車で約10分</li><li>来客用駐車場あり</li></ul><p>工場見学・お打ち合わせは事前予約制です。正門受付で会社名とお名前をお伝えください。安全確保と機密保持のため、撮影可能範囲は担当者がご案内します。</p></div></div><div className={styles.map} role="img" aria-label="富山県高岡市テクノパーク内にある北陸精密テクノ本社・第一工場の周辺地図。"><span className={styles.mapPin}>本社・第一工場</span></div></div></Container></section>

    <ContextualCta title="加工のご相談も、工場見学も。まずはお問い合わせください。" actions={[{ label: "見積・技術相談をする", href: "/contact?type=technical", variant: "primary" }, { label: "採用情報を見る", href: "/recruit", variant: "inverse" }]} />
  </main>;
}
