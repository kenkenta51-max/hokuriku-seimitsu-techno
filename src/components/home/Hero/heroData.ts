export type HeroSlide = {
  alt: string;
  id: string;
  objectPosition: {
    desktop: string;
    mobile: string;
  };
  src: string;
};

export type HeroStat = {
  definition: string;
  label: string;
  unit: string;
  value: string;
};

export const heroSlides: readonly HeroSlide[] = [
  // The user-selected metal component visual is always the initial slide.
  {
    id: "selected-gear",
    src: "/images/hero-selected-gear.png",
    alt: "氷の破片と水しぶきに囲まれた精密金属部品のコンセプトビジュアル",
    objectPosition: { desktop: "center", mobile: "right center" },
  },
  {
    id: "human-craft",
    src: "/images/hero-selected-craft.png",
    alt: "加工機の前で測定器を使い精密部品を確認する技術者のイメージ",
    objectPosition: { desktop: "center", mobile: "right center" },
  },
  {
    id: "human-team",
    src: "/images/hero-selected-team.png",
    alt: "工場でタブレットと工程資料を見ながら検討する2人の技術者のイメージ",
    objectPosition: { desktop: "center", mobile: "right center" },
  },
] as const;

export const heroStats: readonly HeroStat[] = [
  {
    label: "創業",
    value: "1986",
    unit: "年",
    definition: "富山県高岡市で創業。積み重ねた経験を次の品質へ",
  },
  {
    label: "主要設備",
    value: "67",
    unit: "台",
    definition: "加工機・研削盤・主要測定機の合計",
  },
  {
    label: "納期遵守率",
    value: "99.3",
    unit: "％",
    definition: "2025年度、顧客合意納期基準",
  },
  {
    label: "社内不良率",
    value: "12",
    unit: "ppm",
    definition: "2025年度、社内最終検査基準",
  },
] as const;
