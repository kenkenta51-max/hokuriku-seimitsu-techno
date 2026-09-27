"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

import styles from "./ContactForm.module.css";

type ContactFormProps = { initialType?: string };
type FieldName = "inquiryType" | "company" | "name" | "email" | "tel" | "message" | "attachment" | "privacy";
type FieldErrors = Partial<Record<FieldName, string>>;

const inquiryTypes = ["見積依頼", "加工・技術相談", "試作・量産の相談", "工程集約・ユニット組立の相談", "採用について", "その他"] as const;
const productFields = ["産業機械", "半導体製造装置", "医療・分析機器", "エネルギー関連装置", "FA・ロボット", "その他"] as const;

export function ContactForm({ initialType = "" }: ContactFormProps) {
  const [count, setCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: FieldErrors = {};
    const value = (name: FieldName) => String(data.get(name) ?? "").trim();

    if (!value("inquiryType")) nextErrors.inquiryType = "お問い合わせ種別を選択してください。";
    if (!value("company")) nextErrors.company = "会社名を入力してください。";
    if (!value("name")) nextErrors.name = "お名前を入力してください。";
    const email = value("email");
    if (!email) nextErrors.email = "メールアドレスを入力してください。";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "メールアドレスの形式を確認してください。";
    const tel = value("tel");
    if (tel && !/^[0-9-]+$/.test(tel)) nextErrors.tel = "電話番号は数字とハイフンで入力してください。";
    const message = value("message");
    if (!message) nextErrors.message = "お問い合わせ内容を入力してください。";
    else if (message.length > 2000) nextErrors.message = "お問い合わせ内容は2,000文字以内で入力してください。";
    const attachment = data.get("attachment");
    if (attachment instanceof File && attachment.size > 0) {
      if (!/\.(pdf|dxf|step|zip)$/i.test(attachment.name)) nextErrors.attachment = "PDF、DXF、STEP、ZIP形式のファイルを選択してください。";
      else if (attachment.size > 20 * 1024 * 1024) nextErrors.attachment = "添付ファイルの合計容量を20MB以下にしてください。";
    }
    if (!data.get("privacy")) nextErrors.privacy = "個人情報の取り扱いへの同意が必要です。";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      const firstInvalidField = form.elements.namedItem(Object.keys(nextErrors)[0]);
      if (firstInvalidField instanceof HTMLElement) firstInvalidField.focus();
      return;
    }
    setSubmitted(true);
  }

  return <form className={styles.form} onSubmit={handleSubmit} aria-describedby="contact-mock-notice" noValidate>
    <p className={styles.mockNotice} id="contact-mock-notice">現在は送信基盤・ファイル保存先が未接続のモックです。入力内容と添付ファイルは外部へ送信・保存されません。</p>
    <div className={styles.grid}>
      <label className={`${styles.field} ${styles.full}`}><span className={styles.label}>お問い合わせ種別<span className={styles.badge}>必須</span></span><select className={styles.select} name="inquiryType" defaultValue={initialType} required aria-invalid={Boolean(errors.inquiryType)} aria-describedby={errors.inquiryType ? "inquiryType-error" : undefined}><option value="">選択してください</option>{inquiryTypes.map((option) => <option key={option} value={option}>{option}</option>)}</select>{errors.inquiryType ? <span className={styles.error} id="inquiryType-error">{errors.inquiryType}</span> : null}</label>
      <label className={styles.field}><span className={styles.label}>会社名<span className={styles.badge}>必須</span></span><input className={styles.input} name="company" autoComplete="organization" placeholder="例：株式会社〇〇製作所" required aria-invalid={Boolean(errors.company)} aria-describedby={errors.company ? "company-error" : undefined} />{errors.company ? <span className={styles.error} id="company-error">{errors.company}</span> : null}</label>
      <label className={styles.field}><span className={styles.label}>部署名<span className={`${styles.badge} ${styles.optional}`}>任意</span></span><input className={styles.input} name="department" autoComplete="organization-title" placeholder="例：開発部 生産技術課" /></label>
      <label className={styles.field}><span className={styles.label}>お名前<span className={styles.badge}>必須</span></span><input className={styles.input} name="name" autoComplete="name" placeholder="例：山田 太郎" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name ? <span className={styles.error} id="name-error">{errors.name}</span> : null}</label>
      <label className={styles.field}><span className={styles.label}>メールアドレス<span className={styles.badge}>必須</span></span><input className={styles.input} name="email" type="email" autoComplete="email" placeholder="例：taro.yamada@example.co.jp" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email ? <span className={styles.error} id="email-error">{errors.email}</span> : null}</label>
      <label className={styles.field}><span className={styles.label}>電話番号<span className={`${styles.badge} ${styles.optional}`}>任意</span></span><input className={styles.input} name="tel" type="tel" autoComplete="tel" inputMode="tel" pattern="[0-9-]+" placeholder="例：0766-00-0000" aria-invalid={Boolean(errors.tel)} aria-describedby={errors.tel ? "tel-help tel-error" : "tel-help"} /><span className={styles.help} id="tel-help">お急ぎの場合や、電話での回答をご希望の場合に入力してください。</span>{errors.tel ? <span className={styles.error} id="tel-error">{errors.tel}</span> : null}</label>
      <label className={styles.field}><span className={styles.label}>製品分野<span className={`${styles.badge} ${styles.optional}`}>任意</span></span><select className={styles.select} name="productField" defaultValue=""><option value="">選択してください</option>{productFields.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
      <label className={styles.field}><span className={styles.label}>材質<span className={`${styles.badge} ${styles.optional}`}>任意</span></span><input className={styles.input} name="material" placeholder="例：SUS316L、A7075、チタン、未定" /></label>
      <label className={styles.field}><span className={styles.label}>数量・ロット<span className={`${styles.badge} ${styles.optional}`}>任意</span></span><input className={styles.input} name="quantity" placeholder="例：試作3個、量産 月500個" /></label>
      <label className={styles.field}><span className={styles.label}>希望納期<span className={`${styles.badge} ${styles.optional}`}>任意</span></span><input className={styles.input} name="dueDate" placeholder="例：2026年10月末、要相談" /></label>
      <label className={`${styles.field} ${styles.full}`}><span className={styles.label}>お問い合わせ内容<span className={styles.badge}>必須</span></span><textarea className={styles.textarea} name="message" maxLength={2000} placeholder="用途、形状、要求精度、数量、希望納期、現在の課題など、分かる範囲でご記入ください。" onChange={(event) => setCount(event.currentTarget.value.length)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-count message-error" : "message-count"} required /><span className={styles.counter} id="message-count">{count.toLocaleString("ja-JP")} / 2,000文字</span>{errors.message ? <span className={styles.error} id="message-error">{errors.message}</span> : null}</label>
      <label className={`${styles.field} ${styles.full}`}><span className={styles.label}>添付ファイル<span className={`${styles.badge} ${styles.optional}`}>任意</span></span><input className={styles.file} name="attachment" type="file" accept=".pdf,.dxf,.step,.zip,application/pdf,application/zip" aria-invalid={Boolean(errors.attachment)} aria-describedby={errors.attachment ? "attachment-help attachment-error" : "attachment-help"} /><span className={styles.help} id="attachment-help">対応形式：PDF、DXF、STEP、ZIP／合計20MBまで。パスワード付きファイルを送る場合は、パスワードを別の方法でお知らせください。</span>{errors.attachment ? <span className={styles.error} id="attachment-error">{errors.attachment}</span> : null}</label>
      <label className={`${styles.consent} ${styles.full}`}><input name="privacy" type="checkbox" required aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? "privacy-error" : undefined} /><span><Link href="/privacy">プライバシーポリシー</Link>を確認し、個人情報の取り扱いに同意します。<span className={styles.badge}>必須</span>{errors.privacy ? <span className={styles.error} id="privacy-error">{errors.privacy}</span> : null}</span></label>
    </div>
    <button className={styles.submit} type="submit">入力内容を確認する</button>
    {submitted ? <p className={styles.status} role="status">送信機能は現在モックです。入力内容や添付ファイルは送信・保存されていません。</p> : null}
  </form>;
}
