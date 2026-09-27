import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/home/Reveal/Reveal";
import { PageHero } from "@/components/page/PageHero/PageHero";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import styles from "../detail-page.module.css";

export const metadata: Metadata = {
  title: "見積・技術相談｜北陸精密テクノ株式会社",
  description: "精密部品加工、試作、量産、工程集約、ユニット組立のお見積・技術相談はこちら。図面が未完成の段階でもご相談いただけます。",
  alternates: { canonical: "/contact" },
};

const types = [["見積依頼", "図面、材質、数量、希望納期をもとに、工程と費用を検討します。図面データを添付いただくと、より具体的な回答が可能です。"], ["技術相談", "加工可否、公差、材質変更、コストダウン、量産化、検査方法など、仕様確定前の課題をご相談ください。"], ["採用・その他", "採用、工場見学、取材、協業、会社に関するお問い合わせはこちらを選択してください。"]] as const;
const checklist = ["製品の用途と、特に重要な機能", "図面または概略形状", "材質、表面処理、熱処理", "試作・量産の数量と継続頻度", "希望納期", "必要な検査成績書・証明書", "現在困っていること"] as const;
const response = [["受付メール", "送信後すぐに自動送信"], ["一次回答", "原則24営業時間以内"], ["図面見積", "通常2営業日以内に可否または見積予定をご連絡"], ["詳細検討", "工程検証や協力会社確認が必要な場合は個別にご案内"]] as const;

function resolveInquiryType(value?: string | string[]) {
  const type = Array.isArray(value) ? value[0] : value;
  if (type === "technical" || type === "quality") return "加工・技術相談";
  if (type === "recruit") return "採用について";
  if (type === "general") return "その他";
  return "";
}

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ type?: string | string[] }> }) {
  const params = await searchParams;

  return <main id="main-content" className={styles.main} tabIndex={-1}>
    <PageHero current="お問い合わせ" label="CONTACT" title="図面1枚から、工程全体の相談まで。" lead="「この形状は加工できるか」「複数工程をまとめたい」「量産前に試作したい」。検討段階のご相談も歓迎します。分かる範囲をご入力ください。担当者が内容を確認し、原則24営業時間以内に一次回答します。" imageSrc="/images/contact-technical-consultation.png" alt="精密部品と3Dデータを見ながら加工方法を相談する技術担当者と顧客" variant="contact" />

    <section className={styles.section} aria-labelledby="contact-types-title"><Container><Reveal><SectionHeading label="PURPOSE" title="相談種別の案内" titleId="contact-types-title" /></Reveal><ol className={styles.contactTypes}>{types.map(([title, body], index) => <li key={title}><span className={styles.number}>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></li>)}</ol></Container></section>

    <section className={[styles.section, styles.offwhite].join(" ")} aria-labelledby="preparation-title"><Container><Reveal><SectionHeading label="BEFORE CONTACT" title="ご相談前に分かるとよい情報" titleId="preparation-title" description={<p>すべてが決まっていなくても問題ありません。未確定事項は「未定」とご記入ください。</p>} /></Reveal><ul className={styles.checklist}>{checklist.map((item) => <li key={item}>{item}</li>)}</ul></Container></section>

    <section className={[styles.section, styles.soft].join(" ")} aria-labelledby="contact-form-title"><Container><Reveal><SectionHeading label="FORM" title="お問い合わせフォーム" titleId="contact-form-title" /></Reveal><ContactForm initialType={resolveInquiryType(params.type)} /></Container></section>

    <section className={styles.section} aria-labelledby="response-title"><Container><Reveal><SectionHeading label="RESPONSE" title="返信と見積の目安" titleId="response-title" /></Reveal><dl className={styles.response}>{response.map(([stage, estimate]) => <div key={stage}><dt>{stage}</dt><dd>{estimate}</dd></div>)}</dl><p className={styles.footnote}>土日祝、当社休業日に受け付けた内容は、翌営業日から確認します。お急ぎの場合は電話番号0766-00-2486へご連絡ください。</p></Container></section>

    <section className={[styles.section, styles.dark].join(" ")} aria-labelledby="information-security-title"><Container><div className={styles.twoColumn}><Reveal><SectionHeading label="INFORMATION SECURITY" title="図面・技術情報を適切に取り扱います。" titleId="information-security-title" tone="dark" /></Reveal><p>お預かりした図面や仕様情報は、見積・技術検討の目的に限って使用し、アクセスできる担当者を限定します。NDA締結をご希望の場合は、フォームにその旨をご記入ください。締結前に共有可能な情報範囲から相談を開始できます。</p></div></Container></section>

    <section className={[styles.section, styles.offwhite].join(" ")} aria-label="お問い合わせに関する補足"><Container><p className={styles.footnote}>営業目的の一斉送信、当社事業と関係のない勧誘には回答しない場合があります。内容により、回答に時間を要する場合や回答を差し控える場合があります。</p></Container></section>
  </main>;
}
