import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/home/Reveal/Reveal";
import { ContextualCta } from "@/components/page/ContextualCta/ContextualCta";
import { PageHero } from "@/components/page/PageHero/PageHero";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import styles from "../detail-page.module.css";

export const metadata: Metadata = {
  title: "採用情報｜北陸精密テクノ株式会社",
  description: "北陸精密テクノの採用情報です。精密加工、生産技術、品質保証、営業技術などの仕事、社員インタビュー、教育制度、働く環境、募集要項をご紹介します。",
  alternates: { canonical: "/recruit" },
};

const jobs = [
  ["CNC機械オペレーター", "マシニングセンタ、複合旋盤、研削盤を使い、金属部品を加工します。図面確認、材料・工具の準備、段取り、加工、工程内測定、記録まで担当します。経験を重ねると、プログラム作成や改善にも携わります。"],
  ["生産技術・工程設計", "図面と要求を読み、最適な加工順序、設備、工具、治具、測定方法を設計します。試作で条件を確立し、安定して量産できる工程へ整える仕事です。"],
  ["品質保証・精密検査", "三次元測定機などを使って製品を検査し、出荷可否を判断します。検査基準の作成、不具合解析、是正活動、顧客対応を通じ、会社の品質を支えます。"],
  ["営業技術", "お客様の図面や課題を受け取り、社内各部門と実現方法を検討します。価格と納期を伝えるだけでなく、工程変更やユニット化による課題解決を提案します。"],
  ["生産管理・調達", "材料、設備、人、協力会社の状況を見ながら、生産計画と納期を整えます。多くの工程を滞りなくつなぎ、お客様との約束を守る役割です。"],
] as const;
const interviews = [
  { name: "山崎 海斗｜製造部｜新卒入社5年目・27歳", title: "昨日より良い加工を、自分で考えられるようになった。", image: "/images/recruit-interview-cnc-operator.png", alt: "マシニングセンタの前で精密部品を持つ若手加工技術者", paragraphs: ["工業高校で機械を学び、地元でものづくりを続けたいと思って入社しました。最初は図面記号も工具の種類も覚えることが多く、先輩の段取りを見ながら一つずつ身につけました。", "今は5軸加工機で、半導体製造装置向けのアルミ部品を担当しています。薄い部分が多い製品では、クランプの力や加工順で仕上がりが変わります。試した条件を記録し、狙いどおりの精度が安定したときは手応えがあります。", "現場では、年齢に関係なく改善案を聞いてもらえます。次は加工プログラムを一から組み、後輩へ理由まで説明できる技術者になることが目標です。"] },
  { name: "松本 彩香｜生産技術部｜中途入社3年目・32歳", title: "経験を生かしながら、工程全体を設計する仕事へ。", image: "/images/recruit-interview-production-engineer.png", alt: "タブレットと精密部品を確認する生産技術担当者", paragraphs: ["前職では量産ラインのオペレーターをしていました。もっと図面に近いところで工程づくりに関わりたいと思い、北陸精密テクノへ転職しました。", "現在は新規案件の工程設計と治具設計を担当しています。複雑形状の試作では、製造と品質保証のメンバーを交えてレビューし、加工と測定が成立する方法を考えます。自分の設計した治具で段取り時間が短くなり、量産へ移行できたときに達成感があります。", "入社後は社内設備の特性を学ぶ研修があり、分野の違う先輩にも相談しやすい環境でした。子育てと仕事を両立しながら、今後は自動化にも挑戦したいと考えています。"] },
  { name: "高橋 健司｜品質保証部｜入社16年目・41歳", title: "測定値の向こうにある、製品の機能まで考える。", image: "/images/recruit-interview-quality-assurance.png", alt: "三次元測定機の前に立つ品質保証担当者", paragraphs: ["品質保証の仕事は、合否を判定するだけではありません。なぜその公差が必要なのか、どの基準で組み付くのかを理解して、適切な測定方法を選ぶ必要があります。", "以前、測定値は規格内でも、組立時に違和感が出る案件がありました。お客様と製造を交えて基準の取り方を見直し、工程内の測定方法まで変更しました。その経験から、数字だけでなく現物と用途を見る大切さを学びました。", "若手には、測定機の操作だけでなく、図面の意図を考える習慣を伝えています。品質を守りながら、つくりやすさにも貢献できる部門でありたいと思っています。"] },
] as const;
const training = [["入社時", "安全、品質、図面、測定、情報セキュリティの基礎"], ["配属後", "OJT担当者による作業指導、技能チェック、月次面談"], ["1〜3年目", "設備別教育、加工プログラム、測定、改善活動"], ["中堅", "工程設計、後輩指導、品質管理、リーダー研修"], ["専門・管理", "高度技能、プロジェクト推進、マネジメント研修"]] as const;
const support = ["技能検定・資格試験の受験費用補助", "外部講習・メーカー研修への参加", "社内技能認定と技能マップ", "改善提案の表彰", "キャリア面談"] as const;
const stats = [["平均年齢", "38.4歳"], ["平均勤続年数", "13.6年"], ["月平均残業時間", "16.2時間"], ["年次有給休暇の平均取得日数", "12.8日"], ["育児休業からの復職率", "100%"], ["技能検定等の有資格者", "32名"]] as const;
const benefits = ["年間休日120日、週休2日制", "各種社会保険完備", "通勤手当、家族手当、資格手当", "退職金制度", "作業服・安全用品貸与", "社員食堂・休憩スペース", "育児・介護休業、短時間勤務制度", "定期健康診断、ストレスチェック", "改善提案・永年勤続表彰"] as const;
const graduate = [["募集職種", "CNC機械オペレーター、生産技術、品質保証"], ["対象", "高校、高専、専門学校、大学、大学院を卒業見込みの方"], ["勤務地", "本社・第一工場、第二工場"], ["勤務時間", "8:15〜17:00（休憩60分）"], ["給与", "当社規定により決定"], ["昇給・賞与", "昇給年1回、賞与年2回"], ["休日", "年間120日、会社カレンダーによる"], ["選考", "会社説明・工場見学→応募→面接・適性確認→内定"]] as const;
const career = [["募集職種", "機械加工、生産技術、品質保証、営業技術"], ["応募資格", "高卒以上。製造業経験者を歓迎。未経験可の職種あり"], ["勤務地", "本社・第一工場、第二工場"], ["雇用形態", "正社員"], ["勤務時間", "8:15〜17:00（休憩60分）"], ["給与", "経験・能力を考慮し、当社規定により決定"], ["試用期間", "3か月（待遇変更なし）"], ["選考", "応募→書類確認→面接・工場見学→条件提示→内定"]] as const;
const faq = [["製造業の経験がなくても応募できますか。", "職種により未経験の方も応募できます。入社後は安全、図面、測定の基礎から学び、OJT担当者が段階的に指導します。"], ["応募前に工場を見学できますか。", "可能です。実際の職場、設備、働く社員の様子をご案内します。採用フォームから希望日時をお知らせください。"], ["必要な資格はありますか。", "入社時に必須資格を設けていない職種もあります。業務上必要な資格は、入社後の取得を会社が支援します。"], ["配属はどのように決まりますか。", "ご本人の希望、適性、学んできた内容、各部門の状況を踏まえ、面談のうえで決定します。"], ["選考結果はどのくらいで届きますか。", "各選考後、原則5営業日以内にご連絡します。日数がかかる場合は事前にお知らせします。"]] as const;

export default function RecruitPage() {
  return <main id="main-content" className={styles.main} tabIndex={-1}>
    <PageHero current="採用情報" label="RECRUIT" title="100分の1ミリと向き合う仕事を、北陸で。" lead="図面の線を、産業を動かす部品へ変える。そこには、機械だけでは完結しない判断と工夫があります。考え、試し、確かめ、仲間へつなぐ。ものづくりを深く学びたい人に、長く技術を磨ける場所を用意しています。" imageSrc="/images/P13-recruit-mentoring.png" alt="工場内で若手技術者と熟練技術者が精密部品について相談する様子" variant="recruit" />

    <section className={styles.section} aria-labelledby="message-title"><Container><div className={styles.twoColumn}><Reveal><SectionHeading label="MESSAGE" title="技術は、一人で抱えるものではない。" titleId="message-title" /></Reveal><div className={styles.copy}><p>精密加工というと、黙々と機械に向き合う仕事を想像するかもしれません。しかし実際には、営業が聞き取った要求を、生産技術が工程へ変え、製造が形にし、品質保証が確かめる、チームの仕事です。</p><p>最初から専門知識がそろっている必要はありません。分からないことをそのままにせず、事実を見て、周囲へ相談し、次の工夫を考えられること。それが技術者として成長する第一歩です。</p><p>北陸精密テクノは、経験の有無にかかわらず、学ぶ姿勢を持つ人を歓迎します。</p></div></div></Container></section>

    <section className={[styles.section, styles.offwhite].join(" ")} aria-labelledby="jobs-title"><Container><Reveal><SectionHeading label="JOBS" title="仕事を知る" titleId="jobs-title" /></Reveal><ol className={styles.jobs}>{jobs.map(([title, body], index) => <li key={title}><span className={styles.number}>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></li>)}</ol></Container></section>

    <section className={styles.section} aria-labelledby="interviews-title"><Container><Reveal><SectionHeading label="INTERVIEWS" title="社員インタビュー" titleId="interviews-title" /></Reveal><div className={styles.interviews}>{interviews.map((item) => <article className={styles.interview} key={item.name}><div className={`${styles.imageFrame} ${styles.portrait}`}><Image className={styles.image} src={item.image} alt={item.alt} fill sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 899px) 50vw, 33vw" /></div><div className={styles.interviewBody}><h3>{item.name}</h3><h4>{item.title}</h4>{item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></article>)}</div></Container></section>

    <section className={[styles.section, styles.soft].join(" ")} aria-labelledby="project-title"><Container><Reveal><SectionHeading label="PROJECT STORY" title="短納期の試作を、4部門でつないだ5日間。" titleId="project-title" /></Reveal><div className={styles.project}><div className={styles.projectCopy}><p>装置開発の日程が迫るなか、難削材の試作部品を5営業日で届けてほしいという相談が入りました。営業技術が使用目的と優先寸法を確認し、生産技術が既存治具を転用した工程を設計。製造は空き時間を組み替え、品質保証は加工中に測定プログラムを準備しました。</p><p>初品で生じたわずかな変形は、その場で4部門が原因を検討し、仕上げ代とクランプ位置を修正。翌日には条件を確立し、予定どおりに納品できました。速さを生んだのは、誰か一人の無理ではなく、情報を早く共有し、それぞれが次の工程を先回りしたことでした。</p></div><Reveal><div className={styles.imageFrame}><Image className={styles.image} src="/images/recruit-project-team.png" alt="精密部品を囲み加工工程を検討する4部門の担当者" fill sizes="(max-width: 899px) calc(100vw - 40px), 55vw" /></div></Reveal></div></Container></section>

    <section className={styles.section} aria-labelledby="training-title"><Container><Reveal><SectionHeading label="TRAINING" title="基礎から専門技能まで、段階を追って身につける。" titleId="training-title" /></Reveal><div className={styles.training}><div><dl className={styles.trainingSteps}>{training.map(([stage, content]) => <div key={stage}><dt>{stage}</dt><dd>{content}</dd></div>)}</dl><h3>支援制度</h3><ul className={styles.support}>{support.map((item) => <li key={item}>{item}</li>)}</ul></div><Reveal><div className={styles.imageFrame}><Image className={styles.image} src="/images/recruit-training-oJT.png" alt="測定器を使った精密部品の測定方法を学ぶ若手技術者" fill sizes="(max-width: 899px) calc(100vw - 40px), 40vw" /></div></Reveal></div></Container></section>

    <section className={[styles.section, styles.dark].join(" ")} aria-labelledby="recruit-stats-title"><Container><Reveal><SectionHeading label="FACTS & FIGURES" title="数字で見る北陸精密テクノ" titleId="recruit-stats-title" tone="dark" /></Reveal><dl className={styles.stats}>{stats.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl><p className={styles.footnote}>数値は本サイト用の架空実績です。実公開時は対象年度、対象者、算出方法を明記してください。</p></Container></section>

    <section className={styles.section} aria-labelledby="benefits-title"><Container><Reveal><SectionHeading label="WORK ENVIRONMENT" title="働く環境・制度" titleId="benefits-title" /></Reveal><ul className={styles.benefits}>{benefits.map((item) => <li key={item}>{item}</li>)}</ul><p className={styles.footnote}>休日数、手当、福利厚生は就業規則・賃金規程と照合してください。</p></Container></section>

    <section className={[styles.section, styles.offwhite].join(" ")} aria-labelledby="requirements-title"><Container><Reveal><SectionHeading label="REQUIREMENTS" title="募集要項" titleId="requirements-title" /></Reveal><div className={styles.requirements}><article><h3>新卒採用</h3><dl>{graduate.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl></article><article><h3>キャリア採用</h3><dl>{career.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl></article></div><p className={styles.footnote}>正式な求人票と完全一致させ、固定残業代の有無、時間外・休日労働、受動喫煙対策、契約期間等の法定明示事項を追記してください。</p></Container></section>

    <section className={styles.section} aria-labelledby="recruit-faq-title"><Container><Reveal><SectionHeading label="FAQ" title="採用FAQ" titleId="recruit-faq-title" /></Reveal><div className={styles.faq}>{faq.map(([question, answer]) => <details key={question}><summary>Q. {question}</summary><p>A. {answer}</p></details>)}</div></Container></section>

    <ContextualCta title="まずは、仕事と職場を見に来てください。" body="応募前の工場見学、仕事内容に関するご質問も受け付けています。経験の有無にかかわらず、ものづくりを学びたい方をお待ちしています。" actions={[{ label: "採用について問い合わせる", href: "/contact?type=recruit", variant: "primary" }, { label: "会社情報を見る", href: "/company", variant: "inverse" }]} />
  </main>;
}
