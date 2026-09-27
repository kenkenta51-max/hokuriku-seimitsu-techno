import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main id="main-content" className={styles.main} tabIndex={-1}>
      <Container className={styles.inner}>
        <SectionHeading
          headingLevel="h1"
          label="404 NOT FOUND"
          title="お探しのページが見つかりません。"
          description="URLをご確認いただくか、トップページへお戻りください。"
        />
        <Button href="/" variant="secondary">
          トップページへ戻る
        </Button>
      </Container>
    </main>
  );
}
