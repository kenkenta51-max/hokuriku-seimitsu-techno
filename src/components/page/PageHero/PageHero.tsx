import Image from "next/image";
import type { ReactNode } from "react";

import { Reveal } from "@/components/home/Reveal/Reveal";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import { Breadcrumb } from "../Breadcrumb/Breadcrumb";
import styles from "./PageHero.module.css";

type PageHeroProps = { alt: string; current: string; imageSrc: string; label: string; lead: ReactNode; title: string; variant?: "about" | "business" | "technology" | "products" | "quality" | "company" | "recruit" | "contact" };

export function PageHero({ alt, current, imageSrc, label, lead, title, variant = "about" }: PageHeroProps) {
  return <section className={[styles.hero, styles[variant]].join(" ")} aria-labelledby="page-title"><Container><Breadcrumb current={current} /><div className={styles.layout}><Reveal className={styles.copy}><SectionHeading headingLevel="h1" label={label} title={title} titleId="page-title" description={<p>{lead}</p>} /></Reveal><Reveal className={styles.figureReveal}><figure className={styles.figure}><div className={styles.imageFrame}><Image className={styles.image} src={imageSrc} alt={alt} fill priority sizes="(max-width: 899px) calc(100vw - 40px), 54vw" /></div></figure></Reveal></div></Container></section>;
}
