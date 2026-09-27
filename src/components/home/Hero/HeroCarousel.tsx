"use client";

import Image from "next/image";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import type { HeroSlide, HeroStat } from "./heroData";
import styles from "./Hero.module.css";

const AUTOPLAY_INTERVAL_MS = 6_000;
const SWIPE_THRESHOLD_PX = 48;

type HeroCarouselProps = {
  slides: readonly HeroSlide[];
  stats: readonly HeroStat[];
};

export function HeroCarousel({ slides, stats }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [isInView, setIsInView] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);

  const selectSlide = useCallback(
    (nextIndex: number) => {
      setIsPaused(true);
      setCurrentIndex((nextIndex + slides.length) % slides.length);
    },
    [slides.length],
  );

  const showPrevious = useCallback(() => {
    setCurrentIndex((index) => (index - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const showNext = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setIsReady(true);
      setPrefersReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) {
        setCurrentIndex(0);
      }
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const updateVisibility = () => {
      setIsDocumentVisible(document.visibilityState === "visible");
    };

    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (!carouselRef.current || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(carouselRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (
      !isReady ||
      isPaused ||
      prefersReducedMotion ||
      !isDocumentVisible ||
      !isInView
    ) {
      return;
    }

    const timer = window.setTimeout(showNext, AUTOPLAY_INTERVAL_MS);
    return () => window.clearTimeout(timer);
  }, [currentIndex, isReady, isDocumentVisible, isInView, isPaused, prefersReducedMotion, showNext]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch" && window.innerWidth > 900) {
      return;
    }
    event.currentTarget.setPointerCapture(event.pointerId);
    pointerStartRef.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const start = pointerStartRef.current;
    pointerStartRef.current = null;
    if (!start) {
      return;
    }

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    setIsPaused(true);
    if (deltaX < 0) {
      showNext();
    } else {
      showPrevious();
    }
  };

  return (
    <div
      ref={carouselRef}
      className={styles.carousel}
      role="region"
      aria-label="北陸精密テクノの技術と品質を紹介するファーストビュー"
      aria-roledescription="カルーセル"
      data-running={isReady && !isPaused && !prefersReducedMotion && isDocumentVisible && isInView}
    >
      <div
        className={styles.media}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => { pointerStartRef.current = null; }}
      >
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          const imageStyle = {
            "--hero-position-desktop": slide.objectPosition.desktop,
            "--hero-position-mobile": slide.objectPosition.mobile,
          } as CSSProperties;

          return (
            <div
              key={slide.id}
              className={`${styles.slide} ${isActive ? styles.activeSlide : ""}`}
              aria-hidden={!isActive}
            >
              <Image
                className={styles.image}
                src={slide.src}
                alt={isActive ? slide.alt : ""}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                preload={index === 0}
                sizes="100vw"
                style={imageStyle}
              />
            </div>
          );
        })}
      </div>

      <dl className={styles.stats} aria-label="主要実績">
        {stats.map((stat) => (
          <div className={styles.stat} key={stat.label}>
            <dt className={styles.statLabel}>{stat.label}</dt>
            <dd className={styles.statValue}>
              <span className={styles.statNumber}>{stat.value}</span>
              <span className={styles.statUnit}>{stat.unit}</span>
              <span className={styles.statDefinition}>{stat.definition}</span>
            </dd>
          </div>
        ))}
      </dl>

      <div
        className={styles.controls}
        aria-label="スライダー操作"
        hidden={!isReady}
        onFocusCapture={(event) => {
          if (event.target instanceof HTMLButtonElement && !event.target.hasAttribute("data-playback-control")) {
            setIsPaused(true);
          }
        }}
      >
        <button className={styles.controlButton} type="button" onClick={() => { setIsPaused(true); showPrevious(); }} aria-label="前の画像">
          <span aria-hidden="true">←</span>
        </button>

        <div className={styles.indicators} aria-label="スライドを選択">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ""}`}
              type="button"
              aria-current={index === currentIndex ? "true" : undefined}
              aria-label={`${index + 1}枚目を表示`}
              onClick={() => selectSlide(index)}
            >
              <span aria-hidden="true" />
            </button>
          ))}
        </div>

        <span className={styles.position} aria-label={`${currentIndex + 1} / ${slides.length}`}>
          {currentIndex + 1} / {slides.length}
        </span>

        <button
          className={styles.controlButton}
          type="button"
          aria-label={prefersReducedMotion ? "自動再生停止中（動きを抑える設定）" : isPaused ? "スライドを再開" : "スライドを一時停止"}
          disabled={prefersReducedMotion}
          data-playback-control
          onClick={() => setIsPaused((paused) => !paused)}
        >
          <span aria-hidden="true">{isPaused || prefersReducedMotion ? "▶" : "Ⅱ"}</span>
        </button>

        <button className={styles.controlButton} type="button" onClick={() => { setIsPaused(true); showNext(); }} aria-label="次の画像">
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
