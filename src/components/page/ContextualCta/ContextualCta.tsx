import { Reveal } from "@/components/home/Reveal/Reveal";
import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";

import styles from "./ContextualCta.module.css";

type ContextualCtaProps = {
  actions: ReadonlyArray<{
    href: string;
    label: string;
    variant: "primary" | "secondary" | "inverse";
  }>;
  body?: string;
  title: string;
  tone?: "dark" | "light";
};

export function ContextualCta({ actions, body, title, tone = "dark" }: ContextualCtaProps) {
  return <section className={[styles.section, styles[tone]].join(" ")} aria-labelledby="contextual-cta-title"><Container><Reveal className={styles.content}><h2 id="contextual-cta-title">{title}</h2>{body ? <p>{body}</p> : null}<div className={styles.actions}>{actions.map((action) => <Button key={action.href} href={action.href} variant={action.variant}>{action.label}</Button>)}</div></Reveal></Container></section>;
}
