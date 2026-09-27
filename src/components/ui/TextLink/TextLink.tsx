import Link from "next/link";
import type { ReactNode } from "react";

import styles from "./TextLink.module.css";

type TextLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  tone?: "default" | "inverse";
};

export function TextLink({
  children,
  className,
  href,
  tone = "default",
}: TextLinkProps) {
  return (
    <Link
      className={[styles.link, styles[tone], className].filter(Boolean).join(" ")}
      href={href}
    >
      <span>{children}</span>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </Link>
  );
}
