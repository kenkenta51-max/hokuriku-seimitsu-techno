export type QualityFlowStep = {
  number: string;
  name: string;
};

export type ConsultationStep = QualityFlowStep & {
  description: string;
};

export const qualityTrustItems = [
  "ISO 9001／品質マネジメントシステム（架空設定）",
  "ISO 14001／環境マネジメントシステム（架空設定）",
  "社内不良率12ppm／2025年度",
  "校正実施率100％／2025年度計画対象機器",
] as const;

export const qualityFlowSteps: readonly QualityFlowStep[] = [
  { number: "01", name: "図面レビュー" },
  { number: "02", name: "材料受入" },
  { number: "03", name: "初品" },
  { number: "04", name: "工程内" },
  { number: "05", name: "最終" },
  { number: "06", name: "出荷" },
  { number: "07", name: "記録" },
];

export const consultationSteps: readonly ConsultationStep[] = [
  {
    number: "01",
    name: "図面・仕様受領",
    description:
      "PDF、DXF、STEP等のデータと、材質、数量、希望納期、検査条件を確認します。未確定事項がある場合は、用途と優先順位を伺います。",
  },
  {
    number: "02",
    name: "技術検討",
    description:
      "加工方法、設備、治具、測定、表面処理・熱処理、リスクを製造・品質部門と確認します。",
  },
  {
    number: "03",
    name: "見積回答",
    description:
      "原則2営業日以内に回答します。複雑案件や協力工程を含む場合は、受付時に回答予定日をご連絡します。",
  },
  {
    number: "04",
    name: "試作",
    description:
      "初品を製作し、寸法、外観、機能、組立性を確認します。必要に応じて加工条件と図面の見直し案を共有します。",
  },
  {
    number: "05",
    name: "評価・条件合意",
    description:
      "お客様の評価結果を受け、量産時の公差、検査頻度、提出書類、梱包、納期を確定します。",
  },
  {
    number: "06",
    name: "量産準備",
    description:
      "治具、工具、加工条件、測定プログラム、作業標準を整え、初回量産の確認項目を設定します。",
  },
  {
    number: "07",
    name: "量産・継続改善",
    description:
      "品質と納期の実績を確認し、工具寿命、段取り、測定、物流を継続的に見直します。",
  },
];
