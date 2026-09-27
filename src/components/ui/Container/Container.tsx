import type { ReactNode } from "react";

import styles from "./Container.module.css";

type ContainerProps = {
  as?: "div" | "section" | "nav";
  children: ReactNode;
  className?: string;
  size?: "main" | "wide" | "text";
};

export function Container({
  as: Component = "div",
  children,
  className,
  size = "main",
}: ContainerProps) {
  return (
    <Component className={[styles.container, styles[size], className].filter(Boolean).join(" ")}>
      {children}
    </Component>
  );
}
