import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/home/Reveal/Reveal";
import { EquipmentFilter } from "@/components/technology/EquipmentFilter";
import { ContextualCta } from "@/components/page/ContextualCta/ContextualCta";
import { PageHero } from "@/components/page/PageHero/PageHero";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "技術・設備｜5軸加工・複合旋削・精密研削｜北陸精密テクノ",
  description: "北陸精密テクノの加工技術と設備をご紹介します。5軸マシニング、複合旋盤、円筒・平面研削、三次元測定により、複雑形状・難削材・小中ロットへ対応します。",
  alternates: { canonical: "/technology" },
};

const summary = [["主要設備67台", "加工機・研削盤・主要測定機の合計"], ["技能検定保有者32名", "機械加工・機械検査等"], ["対応材質", "アルミ、ステンレス、工具鋼、銅、真鍮、チタン、インコネル、樹脂等"], ["寸法公差実績", "条件付きで±0.003mm"], ["恒温測定室", "20±1℃"]] as const;
const materials = [
  { title: "アルミニウム", body: "A5052、A6061、A7075等。高速加工に適する一方、薄肉部の変形、傷、打痕、表面処理後の寸法変化へ注意します。真空部品や装置部品では、シール面と洗浄・梱包条件も確認します。", image: "/images/technology-material-aluminum.webp", alt: "アルミ素材と薄肉ハウジング、真空シール面を持つ精密加工部品" },
  { title: "ステンレス", body: "SUS303、SUS304、SUS316等。加工硬化、発熱、バリを考慮し、工具と切削条件を選定します。耐食用途では、表面状態、洗浄、異物管理を確認します。", image: "/images/technology-material-stainless.webp", alt: "ステンレス製の精密マニホールドとフランジ、ねじ部品" },
  { title: "鉄・工具鋼", body: "S45C、S50C、SCM、SKD等。熱処理前後の変形、硬度、研削代を見込み、切削と研削の基準をつなぎます。", image: "/images/technology-material-tool-steel.webp", alt: "熱処理された工具鋼部品と研削仕上げされた基準面" },
  { title: "銅・真鍮", body: "純銅、C1100、真鍮等。材料の粘り、傷、バリ、工具への付着を考慮します。導電・熱伝導用途では、表面状態と接触面を確認します。", image: "/images/technology-material-copper-brass.webp", alt: "銅製の導電部品と真鍮製の精密継手" },
  { title: "チタン", body: "純チタン、Ti-6Al-4V等。熱が工具へ集中しやすいため、工具寿命、冷却、切粉排出を管理します。微細穴や流路では、内部バリと洗浄方法も検討します。", image: "/images/technology-material-titanium.webp", alt: "微細穴を加工したチタン製流路ブロックと軽量ブラケット" },
  { title: "インコネル等の耐熱合金", body: "加工硬化、発熱、工具摩耗が大きいため、工具、切込み、加工順を管理します。形状・寸法・ロットによって設備と工程を個別に選定します。", image: "/images/technology-material-heat-resistant-alloy.webp", alt: "インコネル製の耐熱部品と摩耗した切削工具" },
  { title: "樹脂", body: "POM、PEEK等。吸湿、熱変形、把持変形、バリを考慮します。材質証明や清浄度の条件がある場合は事前に確認します。", image: "/images/technology-material-resin.webp", alt: "白色POMと黒色PEEKから加工した精密樹脂部品" },
] as const;
const capabilities = [["同時5軸加工", "多面、傾斜、自由曲面、複雑ポケット", "最大φ730×500mm相当の設備あり", "真空部品、ブラケット、複雑形状部品"], ["立形・横形MC", "角物、多面、プレート、多数個取り", "最大800×400mm級の後工程連携", "ベース、治具、量産部品"], ["CNC・複合旋削", "シャフト、フランジ、スリーブ、偏心形状", "最大加工径φ370mm級", "駆動部品、回転部品"], ["円筒研削", "外径、軸受部、焼入れ後仕上げ", "φ300×1,000mm級", "高精度シャフト"], ["平面研削", "基準面、プレート、ベース", "800×400mm級", "治具ベース、基準部品"], ["ワイヤ放電", "高硬度材、微細輪郭、抜き形状", "600×400×310mm級", "治具、工具、精密輪郭"]] as const;
const difficult = [
  { title: "薄肉変形", body: "把持力、加工順、取り代、反転回数を見直し、変形を抑えます。荒加工後に安定化時間や応力除去工程を設ける場合があります。", image: "/images/technology-process-thinwall.webp", alt: "薄肉部品を低い把持力で固定し、変形を確認しながら加工する様子" },
  { title: "びびり", body: "工具突出し、刃数、回転数、送り、加工方向、治具剛性を確認します。加工音と表面状態を記録し、条件標準へ反映します。", image: "/images/technology-process-chatter.webp", alt: "工具突出しと治具剛性を確認し、加工面のびびりを評価する様子" },
  { title: "工具摩耗", body: "材質と切削長に応じて工具寿命を設定し、寸法傾向と交換時期を管理します。難削材では、工具を使い切るのではなく、品質変動が起きる前に交換します。", image: "/images/technology-process-tool-wear.webp", alt: "摩耗した切削工具と交換前後の工具を比較する加工担当者" },
  { title: "熱変位", body: "暖機、機上測定、補正、室温、加工順を管理します。長時間加工では、途中測定と補正タイミングを工程に組み込みます。", image: "/images/technology-process-thermal-displacement.webp", alt: "加工機の暖機と機上測定で熱変位を確認する様子" },
  { title: "深穴・交差穴", body: "切粉排出、工具振れ、穴曲がり、内部バリを考慮します。必要に応じて内視鏡等による確認方法を設定します。", image: "/images/technology-process-deep-cross-hole.webp", alt: "深穴と交差穴を加工した部品の内部を内視鏡で確認する様子" },
] as const;
const measurements = [
  { term: "三次元測定機", description: "位置度、平面度、輪郭度、複雑形状を測定します。測定プログラムを標準化し、量産時の測定差を抑えます。", image: "/images/technology-measurement-cmm.webp", alt: "三次元測定機で複雑形状部品の位置と輪郭を測定する様子" },
  { term: "画像測定機", description: "微細形状、エッジ、穴位置等を非接触で測定します。小型部品や変形しやすい部品へ活用します。", image: "/images/technology-measurement-optical.webp", alt: "画像測定機で小型精密部品の穴位置とエッジを測定する様子" },
  { term: "真円度測定機", description: "真円度、円筒度、同軸度、振れを評価します。シャフトや回転部品の機能確認に使用します。", image: "/images/technology-measurement-roundness.webp", alt: "真円度測定機で高精度シャフトの真円度と振れを測定する様子" },
  { term: "表面粗さ計", description: "シール面、摺動面、軸受部等の表面粗さを測定します。測定方向とカットオフ値を検査基準で定めます。", image: "/images/technology-measurement-roughness.webp", alt: "表面粗さ計でシール面の仕上がりを測定する様子" },
  { term: "輪郭形状測定機", description: "段差、角度、R、溝等の輪郭を測定します。接触式測定が適切な形状へ使用します。", image: "/images/technology-measurement-contour.webp", alt: "輪郭形状測定機で段差とR形状を測定する様子" },
] as const;
const stability = ["恒温測定室を20±1℃で管理し、測定前の温度なじみ時間を設定します。", "機上測定を用い、加工途中の基準と寸法傾向を確認します。", "工具寿命を材質・工程ごとに管理し、品質変動前の交換を徹底します。", "設備の日常点検と定期保全を行い、異常の兆候を記録します。", "測定機器を校正計画に基づいて管理し、期限切れの使用を防止します。", "段取り後の初品を製造と品質の双方で確認します。", "加工条件と判断理由を作業標準へ反映し、属人化を減らします。"] as const;
const faq = [["公差±0.005mmへ対応できますか。", "材質、形状、寸法、加工箇所、測定方法によって異なります。図面と使用条件を確認し、加工方法と測定方法を含めて回答します。"], ["インコネルの加工は可能ですか。", "対応実績があります。ただし、材種、形状、寸法、数量、要求精度により設備と納期が変わるため、個別に確認します。"], ["3Dデータだけでも見積できますか。", "形状確認は可能ですが、公差、表面粗さ、材質、熱処理、表面処理、検査条件が必要です。未確定事項がある場合は確認項目を整理します。"], ["既存部品からのリバース検討は可能ですか。", "現物測定と図面化の目的、必要精度、知的財産・権利関係を確認のうえ、対応範囲を協議します。"], ["設備一覧にない加工も相談できますか。", "はい。認定協力会社との連携を含めて検討します。品質責任と検査方法を明確にできない工程は、無理にお引き受けしません。"]] as const;

export default function TechnologyPage() {
  return <main id="main-content" className={styles.main} tabIndex={-1}>
    <PageHero current="技術・設備" label="TECHNOLOGY & FACILITIES" title="設備を持つだけでなく、精度を再現する技術。" lead="高性能な設備も、条件が変われば同じ精度を出せるとは限りません。材質、形状、基準、工具、治具、温度、測定を一体で考え、加工結果を次のロットでも再現できる状態へ整える。北陸精密テクノは、設備の能力と現場の判断を標準へ落とし込みます。" imageSrc="/images/P08-technology-5axis-chamber.png" alt="5軸加工機の加工室で精密部品を切削する工具と加工点" variant="technology" />
    <section className={styles.summary} aria-label="技術サマリー"><Container><dl>{summary.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}</dl><p>設備能力や公差実績は、材質、形状、寸法、測定条件により異なります。対応可否は図面確認後に回答します。</p></Container></section>
    <section className={styles.section} aria-labelledby="materials-title"><Container><Reveal><SectionHeading label="MATERIALS" title="材質の特性から、加工方法を考える。" titleId="materials-title" /></Reveal><ol className={styles.materials}>{materials.map((material, index) => <li key={material.title}><figure className={styles.itemImage}><Image src={material.image} alt={material.alt} fill sizes="(max-width: 899px) 100vw, 50vw" loading="eager" unoptimized /></figure><div className={styles.itemCopy}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{material.title}</h3><p>{material.body}</p></div></div></li>)}</ol></Container></section>
    <section className={[styles.section, styles.offwhite].join(" ")} aria-labelledby="capabilities-title"><Container><Reveal><SectionHeading label="CAPABILITIES" title="形状、サイズ、精度に合わせた設備構成。" titleId="capabilities-title" /></Reveal><div className={styles.capabilityTable}><table><caption>加工能力</caption><thead><tr><th scope="col">加工法</th><th scope="col">対応内容</th><th scope="col">能力・目安</th><th scope="col">主な用途</th></tr></thead><tbody>{capabilities.map(([method, coverage, capability, use]) => <tr key={method}><th scope="row">{method}</th><td>{coverage}</td><td>{capability}</td><td>{use}</td></tr>)}</tbody></table></div><dl className={styles.capabilityMobile}>{capabilities.map(([method, coverage, capability, use]) => <div key={method}><dt>{method}</dt><dd><span>対応内容</span>{coverage}</dd><dd><span>能力・目安</span>{capability}</dd><dd><span>主な用途</span>{use}</dd></div>)}</dl><p className={styles.precision}><strong>精度表示例</strong>SUS製シャフトφ20×150mm、円筒研削工程、20±1℃環境での測定における寸法公差実績±0.003mm。</p></Container></section>
    <section className={styles.section} aria-labelledby="difficult-title"><Container><Reveal><SectionHeading label="PROCESS ENGINEERING" title="加工できるかではなく、安定して繰り返せるか。" titleId="difficult-title" /></Reveal><ol className={styles.difficult}>{difficult.map((item, index) => <li key={item.title}><figure className={styles.itemImage}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 599px) 100vw, (max-width: 1199px) 50vw, 20vw" loading="eager" unoptimized /></figure><div className={styles.processCopy}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></div></li>)}</ol></Container></section>
    <section className={[styles.section, styles.equipmentSection].join(" ")} aria-labelledby="equipment-title"><Container><Reveal><SectionHeading label="EQUIPMENT" title="工程を選べる設備と、使い切る技術。" titleId="equipment-title" /></Reveal><EquipmentFilter /></Container></section>
    <section className={styles.section} aria-labelledby="measurement-title"><Container><Reveal><SectionHeading label="MEASUREMENT" title="加工精度を、測定結果で確かめる。" titleId="measurement-title" /></Reveal><dl className={styles.measurements}>{measurements.map((item) => <div key={item.term}><figure className={styles.itemImage}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 599px) 100vw, (max-width: 1199px) 50vw, 20vw" loading="eager" unoptimized /></figure><div className={styles.measurementCopy}><dt>{item.term}</dt><dd>{item.description}</dd></div></div>)}</dl></Container></section>
    <section className={[styles.section, styles.offwhite].join(" ")} aria-labelledby="stability-title"><Container><Reveal><SectionHeading label="QUALITY FOUNDATION" title="設備・環境・人・標準をそろえる。" titleId="stability-title" /></Reveal><ol className={styles.stability}>{stability.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></Container></section>
    <section className={styles.section} aria-labelledby="skills-title"><Container><div className={styles.skillsGrid}><div><Reveal><SectionHeading label="SKILLS" title="技術を個人で終わらせず、組織の力へ。" titleId="skills-title" /></Reveal><div className={styles.skillCopy}><p>機械加工技能士、機械検査技能士など32名の技能検定保有者が在籍しています。熟練者と若手がペアで段取りと初品を確認し、難加工案件は製造、生産技術、品質保証による加工レビューを実施します。</p><p>レビューでは、設備選定、基準、把持、工具、工程間測定、異常時の判断を確認します。加工後には結果を振り返り、次回ロットの標準へ反映します。</p></div></div><Reveal><figure className={[styles.itemImage, styles.skillsImage].join(" ")}><Image src="/images/technology-skills-review.webp" alt="熟練技術者と若手技術者が加工部品と工程をレビューする様子" fill sizes="(max-width: 899px) 100vw, 58vw" loading="eager" unoptimized /></figure></Reveal></div></Container></section>
    <section className={[styles.section, styles.faqSection].join(" ")} aria-labelledby="faq-title"><Container><div className={styles.faqGrid}><Reveal><SectionHeading label="FAQ" title="技術相談FAQ" titleId="faq-title" /></Reveal><div className={styles.faqList}>{faq.map(([question, answer]) => <details key={question}><summary>Q. {question}</summary><p>A. {answer}</p></details>)}</div></div></Container></section>
    <ContextualCta title="材質・形状・公差・数量から、加工方法を検討します。" body="設備名が分からなくても構いません。図面と使用条件を確認し、加工、治具、特殊工程、測定の進め方を整理します。" actions={[{ label: "図面を送って相談する", href: "/contact?type=technical", variant: "primary" }, { label: "加工事例を見る", href: "/products", variant: "inverse" }]} />
  </main>;
}
