import Link from "next/link";

import styles from "./Logo.module.css";

type LogoProps = {
  className?: string;
  href?: string;
  size?: "default" | "compact";
  tone?: "light" | "dark";
};

// 正式ロゴ決定後に、この仮シンボルだけを正式データへ差し替える。
const PROVISIONAL_LOGO_LABEL = "北陸精密テクノ株式会社";

function LogoContent({ size = "default", tone }: Pick<LogoProps, "size" | "tone">) {
  return (
    <span
      className={[styles.logo, styles[tone ?? "dark"], styles[size]].join(" ")}
    >
      <svg
        className={styles.mark}
        viewBox="0 0 40 40"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M4 4h14v6H10v8H4V4Zm18 0h14v14h-6v-8h-8V4ZM4 22h6v8h8v6H4V22Zm26 0h6v14H22v-6h8v-8Z" />
        <path d="M15 15h10v10H15z" />
      </svg>
      <span className={styles.wordmark}>{PROVISIONAL_LOGO_LABEL}</span>
    </span>
  );
}

export function Logo({
  className,
  href = "/",
  size = "default",
  tone = "dark",
}: LogoProps) {
  return (
    <Link
      className={[styles.link, className].filter(Boolean).join(" ")}
      href={href}
      aria-label={`${PROVISIONAL_LOGO_LABEL} トップページへ`}
    >
      <LogoContent size={size} tone={tone} />
    </Link>
  );
}
