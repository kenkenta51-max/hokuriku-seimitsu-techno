"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Logo } from "@/components/ui/Logo/Logo";

import { siteNavigation } from "../navigation";
import styles from "./SiteHeader.module.css";

const MOBILE_MENU_ID = "site-mobile-menu";
const FOCUSABLE_ELEMENTS =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  const closeMenu = (restoreFocus = true) => {
    setIsMenuOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  };

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => firstMenuLinkRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) {
        return;
      }

      const focusableElements = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS),
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 75rem)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header
      className={`${styles.header} ${pathname === "/" ? styles.homeHeader : ""}`}
    >
      <Container className={styles.inner} size="wide">
        <Logo className={styles.logo} size="compact" tone="light" />

        <nav className={styles.desktopNavigation} aria-label="グローバルナビゲーション">
          <ul className={styles.desktopNavigationList}>
            {siteNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  className={styles.desktopNavigationLink}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button className={styles.desktopCta} href="/contact" variant="primary">
          見積・技術相談
        </Button>

        <button
          ref={menuButtonRef}
          className={styles.menuButton}
          type="button"
          aria-controls={MOBILE_MENU_ID}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setIsMenuOpen(true)}
        >
          <span className={styles.menuButtonLabel}>MENU</span>
          <span className={styles.menuIcon} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </Container>

      {isMenuOpen ? (
        <div
          ref={menuRef}
          className={styles.mobileMenu}
          id={MOBILE_MENU_ID}
          role="dialog"
          aria-modal="true"
          aria-label="サイトメニュー"
        >
          <div className={styles.mobileMenuHeader}>
            <Logo tone="light" />
            <button
              className={styles.closeButton}
              type="button"
              aria-label="メニューを閉じる"
              onClick={() => closeMenu()}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>

          <nav className={styles.mobileNavigation} aria-label="モバイルナビゲーション">
            <ul className={styles.mobileNavigationList}>
              {siteNavigation.map((item, index) => (
                <li key={item.href}>
                  <Link
                    ref={index === 0 ? firstMenuLinkRef : undefined}
                    className={styles.mobileNavigationLink}
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={() => closeMenu(false)}
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button
            className={styles.mobileCta}
            href="/contact"
            variant="primary"
            onClick={() => closeMenu(false)}
          >
            見積・技術相談
          </Button>
        </div>
      ) : null}
    </header>
  );
}
