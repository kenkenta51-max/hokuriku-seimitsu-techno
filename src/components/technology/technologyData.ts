export type EquipmentCategory = "machining" | "turning" | "grinding" | "edm" | "measurement";

export type Equipment = {
  capability: string;
  category: EquipmentCategory;
  categoryLabel: string;
  count: string;
  makerModel: string;
  use: string;
};

export const equipment: readonly Equipment[] = [
  { category: "machining", categoryLabel: "5軸マシニング", makerModel: "DMG MORI DMU 50", count: "3", capability: "X650×Y520×Z475mm", use: "複雑形状、多面加工、インペラ、ブラケット" },
  { category: "machining", categoryLabel: "5軸マシニング", makerModel: "MAZAK VARIAXIS i-600", count: "2", capability: "φ730×500mm相当", use: "中型複雑部品、工程集約" },
  { category: "machining", categoryLabel: "横形マシニング", makerModel: "OKUMA MA-500HII", count: "4", capability: "500mmパレット", use: "多面量産、治具多数個取り" },
  { category: "machining", categoryLabel: "立形マシニング", makerModel: "Brother SPEEDIO S700X2", count: "8", capability: "X700×Y400×Z300mm", use: "小中型部品、高速加工" },
  { category: "turning", categoryLabel: "複合旋盤", makerModel: "DMG MORI NTX 1000", count: "3", capability: "最大加工径φ370mm", use: "シャフト、フランジ、同軸複合形状" },
  { category: "turning", categoryLabel: "CNC旋盤", makerModel: "OKUMA LB3000 EX", count: "7", capability: "最大加工径φ340mm", use: "中小ロット旋削部品" },
  { category: "grinding", categoryLabel: "円筒研削", makerModel: "JTEKT GE4Pi", count: "3", capability: "φ300×1,000mm", use: "高精度シャフト、焼入れ後仕上げ" },
  { category: "grinding", categoryLabel: "平面研削", makerModel: "OKAMOTO PSG-84DX", count: "4", capability: "800×400mm", use: "ベース、プレート、平面度仕上げ" },
  { category: "edm", categoryLabel: "ワイヤ放電", makerModel: "Mitsubishi Electric MV2400S", count: "2", capability: "600×400×310mm", use: "高硬度材、微細輪郭、治具部品" },
  { category: "measurement", categoryLabel: "三次元測定", makerModel: "ZEISS CONTURA", count: "2", capability: "700×1,000×600mm", use: "複雑形状、幾何公差測定" },
];

export const equipmentFilters = [
  { id: "all", label: "すべて" },
  { id: "machining", label: "5軸・マシニング" },
  { id: "turning", label: "旋削" },
  { id: "grinding", label: "研削" },
  { id: "edm", label: "放電加工" },
  { id: "measurement", label: "測定" },
] as const;

export type EquipmentFilterId = (typeof equipmentFilters)[number]["id"];
