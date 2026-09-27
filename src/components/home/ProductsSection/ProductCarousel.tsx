"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

import type { ProductCase } from "../step6Data";
import styles from "./ProductsSection.module.css";

type ProductCarouselProps = {
  cases: readonly ProductCase[];
};

const subscribeToEnhancement = () => () => {};

export function ProductCarousel({ cases }: ProductCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const frameRef = useRef<number | null>(null);
  const [current, setCurrent] = useState(0);
  const enhanced = useSyncExternalStore(
    subscribeToEnhancement,
    () => true,
    () => false,
  );

  const goTo = useCallback((nextIndex: number) => {
    const boundedIndex = (nextIndex + cases.length) % cases.length;
    const track = trackRef.current;
    const slide = track?.children.item(boundedIndex) as HTMLElement | null;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setCurrent(boundedIndex);
    if (track && slide) {
      track.scrollTo({
        left: slide.offsetLeft,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }
  }, [cases.length]);

  const updateCurrentFromScroll = () => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      const track = trackRef.current;
      if (!track) return;

      const slides = Array.from(track.children) as HTMLElement[];
      const nearest = slides.reduce((best, slide, index) => (
        Math.abs(slide.offsetLeft - track.scrollLeft)
          < Math.abs(slides[best].offsetLeft - track.scrollLeft)
          ? index
          : best
      ), 0);
      setCurrent(nearest);
    });
  };

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-roledescription="カルーセル"
      aria-label="製品・加工事例カルーセル"
      data-enhanced={enhanced ? "true" : undefined}
    >
      <ul
        ref={trackRef}
        id="product-case-track"
        className={styles.track}
        aria-label="製品事例。横方向にスクロールできます。"
        onScroll={updateCurrentFromScroll}
        tabIndex={0}
      >
        {cases.map((productCase, index) => (
          <li
            key={productCase.number}
            className={styles.slide}
            aria-hidden={enhanced && index !== current ? "true" : undefined}
          >
            <article
              className={styles.case}
              role="group"
              aria-roledescription="スライド"
              aria-label={`事例${productCase.number}／${cases.length}`}
            >
              <div className={styles.caseImageFrame}>
                <Image
                  className={styles.caseImage}
                  src={productCase.image}
                  alt={productCase.alt}
                  fill
                  sizes="(max-width: 599px) 78vw, (max-width: 1199px) 58vw, 45vw"
                />
              </div>
              <div className={styles.caseCopy}>
                <p className={styles.caseNumber}>CASE {productCase.number}</p>
                <h3>{productCase.title}</h3>
                <p>{productCase.body}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className={styles.controls}>
        <div className={styles.arrowControls}>
          <button
            className={styles.controlButton}
            type="button"
            aria-label="前の製品事例を表示"
            aria-controls="product-case-track"
            onClick={() => goTo(current - 1)}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            className={styles.controlButton}
            type="button"
            aria-label="次の製品事例を表示"
            aria-controls="product-case-track"
            onClick={() => goTo(current + 1)}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <p className={styles.position} aria-label={`現在の事例 ${current + 1}、全${cases.length}件`}>
          <span>{String(current + 1).padStart(2, "0")}</span>
          <span aria-hidden="true"> / </span>
          <span>{String(cases.length).padStart(2, "0")}</span>
        </p>

        <div className={styles.indicators} aria-label="表示する製品事例を選択">
          {cases.map((productCase, index) => (
            <button
              key={productCase.number}
              className={styles.indicator}
              type="button"
              aria-label={`事例${productCase.number}を表示`}
              aria-current={index === current ? "true" : undefined}
              onClick={() => goTo(index)}
            >
              <span aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>

      <noscript>
        <style>{`.${styles.controls}{display:none!important}`}</style>
      </noscript>
    </div>
  );
}
