import type { ReactNode } from "react";

import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  align?: "left" | "center";
  className?: string;
  description?: ReactNode;
  headingLevel?: "h1" | "h2" | "h3";
  label?: string;
  title: ReactNode;
  titleId?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  align = "left",
  className,
  description,
  headingLevel = "h2",
  label,
  title,
  titleId,
  tone = "light",
}: SectionHeadingProps) {
  const Heading = headingLevel;

  return (
    <div
      className={[styles.heading, styles[align], styles[tone], className]
        .filter(Boolean)
        .join(" ")}
    >
      {label ? <p className={styles.label}>{label}</p> : null}
      <Heading className={styles.title} id={titleId}>
        {title}
      </Heading>
      {description ? <div className={styles.description}>{description}</div> : null}
    </div>
  );
}
