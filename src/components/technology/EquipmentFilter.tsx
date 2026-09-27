"use client";

import { useMemo, useState } from "react";

import { equipment, equipmentFilters, type EquipmentFilterId } from "./technologyData";
import styles from "./EquipmentFilter.module.css";

export function EquipmentFilter() {
  const [filter, setFilter] = useState<EquipmentFilterId>("all");
  const visibleEquipment = useMemo(
    () => filter === "all" ? equipment : equipment.filter((item) => item.category === filter),
    [filter],
  );

  return <div className={styles.root}>
    <div className={styles.controls} aria-label="設備カテゴリで絞り込む">
      {equipmentFilters.map((item) => <button key={item.id} type="button" aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{item.label}</button>)}
    </div>
    <p className={styles.count} aria-live="polite">該当する設備を{visibleEquipment.length}件表示しています。</p>
    {visibleEquipment.length > 0 ? <><div className={styles.desktopTable}><table><caption className={styles.srOnly}>主要設備一覧</caption><thead><tr><th scope="col">カテゴリ</th><th scope="col">メーカー・型式</th><th scope="col">台数</th><th scope="col">能力・加工範囲</th><th scope="col">得意用途</th></tr></thead><tbody>{visibleEquipment.map((item) => <tr key={item.makerModel}><td>{item.categoryLabel}</td><td>{item.makerModel}</td><td>{item.count}</td><td>{item.capability}</td><td>{item.use}</td></tr>)}</tbody></table></div><dl className={styles.mobileList}>{visibleEquipment.map((item) => <div key={item.makerModel}><dt>{item.categoryLabel}／{item.makerModel}</dt><dd><span>台数</span>{item.count}</dd><dd><span>能力・加工範囲</span>{item.capability}</dd><dd><span>得意用途</span>{item.use}</dd></div>)}</dl></> : <div className={styles.empty}><p>条件に一致する設備はありません。絞り込み条件を変更してください。</p><button type="button" onClick={() => setFilter("all")}>絞り込みを解除する</button></div>}
  </div>;
}
