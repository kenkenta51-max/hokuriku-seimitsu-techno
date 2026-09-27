import Link from "next/link";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Logo } from "@/components/ui/Logo/Logo";

import { siteNavigation } from "../navigation";
import styles from "./SiteFooter.module.css";

const footerNavigationGroups = [
  {
    label: "事業・技術",
    links: siteNavigation.slice(1, 5),
  },
  {
    label: "企業情報",
    links: [siteNavigation[0], ...siteNavigation.slice(5)],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.brandArea}>
          <Logo tone="light" />
          <p className={styles.tagline}>精度を、信頼へ。</p>
          <p className={styles.description}>
            複雑形状・難削材・小中ロットの精密部品を、試作から量産、検査まで一貫して支える加工会社です。
          </p>
        </div>

        <div className={styles.navigationArea}>
          {footerNavigationGroups.map((group) => (
            <nav key={group.label} aria-label={`フッター：${group.label}`}>
              <p className={styles.navigationLabel}>{group.label}</p>
              <ul className={styles.navigationList}>
                {group.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className={styles.contactArea}>
            <p className={styles.navigationLabel}>お問い合わせ</p>
            <p>図面が未確定の段階でもご相談いただけます。</p>
            <Button href="/contact" variant="primary">
              見積・技術相談
            </Button>
          </div>
        </div>

        <div className={styles.bottomArea}>
          <p className={styles.portfolioNote}>
            本サイトはWeb制作実績を紹介するために制作した架空企業のサイトです。
          </p>
          <Link className={styles.privacyLink} href="/privacy">
            プライバシーポリシー
          </Link>
          <p className={styles.copyright}>
            © Hokuriku Precision Technology Co., Ltd. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
