export type ProductCategory =
  | "complex"
  | "shaft"
  | "vacuum"
  | "fixture"
  | "fa";

export type ProductFilterValue = "all" | ProductCategory;

export type ProductCase = {
  alt?: string;
  categories: readonly ProductCategory[];
  categoryLabels: readonly string[];
  id: string;
  imageSrc?: string;
  number: string;
  phases: ReadonlyArray<{
    body: string;
    title: "相談背景" | "課題" | "提案" | "加工・検査" | "結果";
  }>;
  specs: ReadonlyArray<{ label: string; value: string }>;
  summary: string;
  title: string;
};

export const productFilters: ReadonlyArray<{
  label: string;
  value: ProductFilterValue;
}> = [
  { value: "all", label: "すべて" },
  { value: "complex", label: "複雑形状部品" },
  { value: "shaft", label: "高精度シャフト" },
  { value: "vacuum", label: "真空装置部品" },
  { value: "fixture", label: "治具・ベース" },
  { value: "fa", label: "FAユニット部品" },
];

export const productCases: readonly ProductCase[] = [
  {
    id: "vacuum-chamber",
    number: "01",
    categories: ["complex"],
    categoryLabels: ["複雑形状部品"],
    title: "半導体製造装置向け真空チャンバー部品",
    summary:
      "薄肉部の変形と表面処理後の寸法変化を、安定化工程と専用治具で管理したアルミ製真空部品。",
    imageSrc: "/images/P09-product-vacuum-chamber.png",
    alt: "アルミ合金製の真空チャンバー部品",
    specs: [
      { label: "材質", value: "A6061-T6" },
      { label: "サイズ", value: "420×320×85mm" },
      { label: "要求", value: "平面度0.02mm、シール面Ra0.8、傷・打痕管理" },
      { label: "ロット", value: "試作2個、量産月20個" },
      {
        label: "工程",
        value:
          "材料調達→5軸加工→応力除去→仕上げ加工→無電解Ni手配→三次元測定→洗浄・梱包",
      },
    ],
    phases: [
      {
        title: "相談背景",
        body: "半導体製造装置に組み込む真空部品について、試作後の量産を見据えた加工先を探しているとのご相談でした。シール面の平面度と粗さに加え、薄肉部の変形、表面処理後の寸法、傷・打痕の管理が求められていました。",
      },
      {
        title: "課題",
        body: "素材を大きく除去する形状のため、加工応力による反りが生じやすく、無電解ニッケル処理後にも寸法が変化する可能性がありました。また、シール面の外観を最終工程まで維持する必要がありました。",
      },
      {
        title: "提案",
        body: "荒加工と仕上げ加工を分け、荒加工後に安定化時間を設けました。基準面を維持したまま複数面を加工できる専用治具を設計し、処理後の膜厚と寸法変化を見込んで仕上げ代を設定しました。",
      },
      {
        title: "加工・検査",
        body: "同時5軸加工で段取り回数を抑え、重要面は工程内で測定。表面処理後に三次元測定とシール面粗さを確認し、洗浄後は接触を避ける専用梱包を使用しました。",
      },
      {
        title: "結果",
        body: "初回試作から要求精度を満たし、量産時は測定プログラムの共通化により測定工数を約25％削減しました。",
      },
    ],
  },
  {
    id: "precision-shaft",
    number: "02",
    categories: ["shaft"],
    categoryLabels: ["高精度シャフト"],
    title: "FA装置向け高精度駆動シャフト",
    summary:
      "旋削、熱処理、円筒研削、測定を一つの窓口へ集約し、同軸度と納期を安定させた駆動シャフト。",
    imageSrc: "/images/P10-product-precision-shaft.png",
    alt: "研削仕上げされた高精度駆動シャフト",
    specs: [
      { label: "材質", value: "SCM440、調質" },
      { label: "サイズ", value: "φ28×420mm" },
      { label: "要求", value: "同軸度0.008mm、軸受部公差h5、表面粗さRa0.4" },
      { label: "ロット", value: "月150本" },
      {
        label: "工程",
        value: "旋削→熱処理→センタ修正→円筒研削→真円度・粗さ測定",
      },
    ],
    phases: [
      {
        title: "相談背景",
        body: "FA装置の駆動部に使用するシャフトについて、熱処理と研削を含めた一括対応のご相談でした。従来は3社へ分けて発注しており、工程間輸送と納期調整が負担になっていました。",
      },
      {
        title: "課題",
        body: "熱処理後の曲がりにより研削代が安定せず、センタ状態によって同軸度と振れが変動していました。工程ごとに測定結果の形式も異なり、原因追跡に時間がかかっていました。",
      },
      {
        title: "提案",
        body: "熱処理協力会社と処理条件・搬送方法を固定し、変形量の実績から研削代を標準化しました。熱処理後にセンタを修正し、ロットごとの真円度・粗さ測定計画を設定しました。",
      },
      {
        title: "加工・検査",
        body: "旋削時に研削基準を残し、熱処理後の振れを確認してから円筒研削を実施。最終検査では外径、同軸度、真円度、粗さを関連付けて記録しました。",
      },
      {
        title: "結果",
        body: "従来3社への発注を1窓口へ集約し、平均リードタイムを18日から12日へ短縮しました。",
      },
    ],
  },
  {
    id: "titanium-flow-block",
    number: "03",
    categories: ["vacuum"],
    categoryLabels: ["真空装置部品"],
    title: "分析装置向けチタン製流路ブロック",
    summary:
      "工具寿命と加工順を管理し、微細流路の寸法変動と交差穴内部のバリを抑えたチタン部品。",
    imageSrc: "/images/product-case-titanium-flow-block-v2.png",
    alt: "複数の流路穴を加工したチタン製流路ブロック",
    specs: [
      { label: "材質", value: "Ti-6Al-4V" },
      { label: "サイズ", value: "120×70×35mm" },
      { label: "要求", value: "微細流路、交差穴位置精度±0.02mm、バリ・異物管理" },
      { label: "ロット", value: "試作5個、月産40個" },
      { label: "工程", value: "5軸加工→専用洗浄→画像測定→流路確認" },
    ],
    phases: [
      {
        title: "相談背景",
        body: "分析装置に使用する流路部品について、チタン加工と内部バリの管理を一括で行いたいとのご相談でした。試作評価後は月産40個を予定していました。",
      },
      {
        title: "課題",
        body: "チタンは工具摩耗が進みやすく、微細流路と交差穴の位置がロット内で変動する可能性がありました。交差部の内部バリは通常の目視では確認しにくい状態でした。",
      },
      {
        title: "提案",
        body: "加工距離に基づく工具寿命管理を設定し、重要穴を工具交換直後に加工する順序へ変更しました。内部バリについては洗浄条件と内視鏡確認を検査基準へ追加しました。",
      },
      {
        title: "加工・検査",
        body: "5軸加工で基準の持ち替えを減らし、穴位置を画像測定機で確認。専用洗浄後に流路と交差部を確認し、検査記録をロットへ関連付けました。",
      },
      {
        title: "結果",
        body: "追加の手仕上げ工程を削減し、量産開始後6か月の納期遵守率100％を維持しました。",
      },
    ],
  },
  {
    id: "fixture-base",
    number: "04",
    categories: ["fixture"],
    categoryLabels: ["治具・ベース"],
    title: "産業機械向け位置決め治具ベース",
    summary:
      "共通基準穴と工程間測定により、大型部品の基準ずれと組立現場の調整時間を減らした治具ベース。",
    imageSrc: "/images/product-case-fixture-base.png",
    alt: "平面研削と位置決め穴加工を施した大型治具ベース",
    specs: [
      { label: "材質", value: "S50C" },
      { label: "サイズ", value: "780×380×70mm" },
      { label: "要求", value: "基準面平面度0.015mm、穴位置度φ0.03mm" },
      { label: "ロット", value: "単品〜5個" },
      {
        label: "工程",
        value: "製缶素材手配→焼鈍→マシニング→平面研削→三次元測定",
      },
    ],
    phases: [
      {
        title: "相談背景",
        body: "産業機械の組立に使用する位置決め治具について、製缶素材の手配から最終測定までまとめたいとのご相談でした。従来は工程ごとに基準の考え方が異なり、組立時の調整が発生していました。",
      },
      {
        title: "課題",
        body: "大型部品のため、製缶、焼鈍、切削、研削の各工程で基準がずれる可能性がありました。運搬中の変形と打痕も管理する必要がありました。",
      },
      {
        title: "提案",
        body: "全工程で使用する共通基準穴を設定し、工程間測定を追加しました。運搬治具と保護方法を含め、一つの工程表で管理しました。",
      },
      {
        title: "加工・検査",
        body: "荒加工後と焼鈍後の変形を確認し、平面研削で基準面を仕上げました。三次元測定では、基準穴から各位置決め穴の位置度を測定しました。",
      },
      {
        title: "結果",
        body: "納入後の組立現場におけるシム調整時間を、1台あたり約90分削減しました。",
      },
    ],
  },
  {
    id: "conveyor-unit",
    number: "05",
    categories: ["fa"],
    categoryLabels: ["FAユニット部品"],
    title: "包装装置向け搬送ユニット",
    summary:
      "18部品の加工・調達・表面処理・組立を一元管理し、発注と仕分けの負担を減らした搬送ユニット。",
    imageSrc: "/images/product-case-conveyor-unit.png",
    alt: "アルミブラケットとシャフト、樹脂ガイドを組み付けた搬送ユニット",
    specs: [
      {
        label: "構成",
        value: "アルミブラケット、SUSシャフト、樹脂ガイド、購入品を含む18部品",
      },
      { label: "サイズ", value: "ユニット外形520×260×180mm" },
      {
        label: "要求",
        value: "組立後の平行度0.05mm、動作抵抗、部品トレーサビリティ",
      },
      { label: "ロット", value: "月30台" },
      {
        label: "工程",
        value: "部品加工・調達→表面処理→受入検査→組立→動作確認→専用梱包",
      },
    ],
    phases: [
      {
        title: "相談背景",
        body: "包装装置の搬送ユニットについて、顧客側の調達先が7社に分かれ、欠品確認、仕様変更、受入、仕分けが負担になっていました。",
      },
      {
        title: "課題",
        body: "18部品の図面改訂と納期をそろえ、購入品の代替承認を管理する必要がありました。組立後の平行度と動作抵抗も保証条件に含まれていました。",
      },
      {
        title: "提案",
        body: "部品表を一元管理し、改訂履歴、支給・購入区分、代替品承認、必要証明を整理しました。部品単体と組立後の検査項目を分け、専用梱包でキッティング納品する工程を設計しました。",
      },
      {
        title: "加工・検査",
        body: "各部品の受入検査後、基準面と締付順を管理して組立。平行度、摺動、動作抵抗、識別を確認し、製造番号ごとに構成部品を追跡できる状態にしました。",
      },
      {
        title: "結果",
        body: "顧客の発注点数を18件から1件へ集約し、組立前の受入・仕分け作業を削減しました。",
      },
    ],
  },
] as const;

export const productFilterCounts = productFilters.reduce(
  (counts, filter) => {
    counts[filter.value] =
      filter.value === "all"
        ? productCases.length
        : productCases.filter((productCase) =>
            productCase.categories.includes(filter.value as ProductCategory),
          ).length;
    return counts;
  },
  {} as Record<ProductFilterValue, number>,
);
