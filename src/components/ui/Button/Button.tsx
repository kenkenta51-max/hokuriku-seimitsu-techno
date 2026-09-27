import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "inverse";

type CommonProps = {
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
  variant?: ButtonVariant;
};

type LinkButtonProps = CommonProps & {
  disabled?: boolean;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  rel?: string;
  target?: string;
};

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: never;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    showArrow = true,
    variant = "primary",
  } = props;
  const buttonClassName = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");
  const content = (
    <>
      <span>{children}</span>
      {showArrow ? (
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    const { disabled, href, onClick, rel, target } = props;

    if (disabled) {
      return (
        <span className={buttonClassName} role="link" aria-disabled="true">
          {content}
        </span>
      );
    }

    return (
      <Link
        className={buttonClassName}
        href={href}
        onClick={onClick}
        rel={rel}
        target={target}
      >
        {content}
      </Link>
    );
  }

  const {
    disabled,
    type = "button",
    ...buttonProps
  } = props as NativeButtonProps;

  return (
    <button
      {...buttonProps}
      className={buttonClassName}
      disabled={disabled}
      type={type}
    >
      {content}
    </button>
  );
}
