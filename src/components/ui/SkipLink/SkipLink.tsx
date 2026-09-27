import styles from "./SkipLink.module.css";

export function SkipLink() {
  return (
    <a className={styles.skipLink} href="#main-content">
      本文へ移動
    </a>
  );
}
