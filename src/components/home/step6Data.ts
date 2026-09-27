export type TechnologyItem = {
  number: string;
  title: string;
  body: string;
};

export type ProductCase = {
  number: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

export const technologyItems: readonly TechnologyItem[] = [
  {
    number: "01",
    title: "同時5軸マシニング",
    body: "複数面を一度の段取りで加工し、基準の持ち替えによる誤差を抑えます。複雑形状、傾斜穴、多面部品、工程集約に活用しています。",
  },
  {
    number: "02",
    title: "複合旋削",
    body: "旋削とミーリングを1チャックで行い、シャフトやフランジの同軸度を確保します。工程間の待ち時間と再段取りを減らします。",
  },
  {
    number: "03",
    title: "円筒・平面研削",
    body: "焼入れ後の仕上げ、軸受部、基準面など、切削だけでは難しい寸法・形状・粗さへ対応します。",
  },
  {
    number: "04",
    title: "三次元測定",
    body: "複雑形状、位置度、輪郭度などを恒温測定室で確認します。測定条件と判定基準を加工側へ戻し、工程改善につなげます。",
  },
] as const;

export const productCases: readonly ProductCase[] = [
  {
    number: "01",
    title: "真空チャンバー部品",
    body: "A6061-T6／420×320×85mm／平面度0.02mm。薄肉部の変形と表面処理後の寸法変化を見込み、荒加工後の安定化工程と専用治具を設計しました。",
    image: "/images/P09-product-vacuum-chamber.png",
    alt: "アルミ合金製の真空チャンバー部品",
  },
  {
    number: "02",
    title: "高精度駆動シャフト",
    body: "SCM440／φ28×420mm／同軸度0.008mm。旋削、熱処理、円筒研削、測定を一つの窓口へ集約しました。",
    image: "/images/P10-product-drive-shaft.png",
    alt: "研削仕上げされた高精度駆動シャフト",
  },
  {
    number: "03",
    title: "チタン製流路ブロック",
    body: "Ti-6Al-4V／120×70×35mm／交差穴位置精度±0.02mm。工具寿命と内部バリを工程内で管理しました。",
    image: "/images/P11-product-fluid-manifold.png",
    alt: "複数の流路穴を加工したチタン製流路ブロック",
  },
] as const;
