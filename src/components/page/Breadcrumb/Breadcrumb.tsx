import Link from "next/link";

import styles from "./Breadcrumb.module.css";

type BreadcrumbProps = { current: string };

export function Breadcrumb({ current }: BreadcrumbProps) {
  return <nav aria-label="パンくず" className={styles.breadcrumb}><ol><li><Link href="/">ホーム</Link></li><li aria-current="page">{current}</li></ol></nav>;
}
