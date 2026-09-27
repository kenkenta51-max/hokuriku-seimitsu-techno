"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import type { ProductFilterValue } from "./productCases";
import styles from "./ProductCaseFilter.module.css";

type ProductCaseFilterProps = {
  children: ReactNode;
  counts: Record<ProductFilterValue, number>;
  filters: ReadonlyArray<{ label: string; value: ProductFilterValue }>;
};

export function ProductCaseFilter({
  children,
  counts,
  filters,
}: ProductCaseFilterProps) {
  const [activeFilter, setActiveFilter] =
    useState<ProductFilterValue>("all");
  const count = counts[activeFilter] ?? 0;

  return (
    <>
      <div className={styles.filterPanel} aria-label="加工事例をカテゴリで絞り込む">
        <div className={styles.filters} role="group" aria-label="加工事例カテゴリ">
          {filters.map((filter) => (
            <button
              className={styles.filterButton}
              key={filter.value}
              type="button"
              aria-pressed={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <p className={styles.count} aria-live="polite">
          {count}件の加工事例を表示しています。
        </p>
        {count === 0 ? (
          <div className={styles.emptyState}>
            <p>
              該当する加工事例はありません。条件を変更するか、図面を添えてお問い合わせください。
            </p>
            <button type="button" onClick={() => setActiveFilter("all")}>
              絞り込みを解除する
            </button>
          </div>
        ) : null}
      </div>
      <div className={styles.caseList} data-filter={activeFilter}>
        {children}
      </div>
    </>
  );
}
