export type ProcessStep = {
  number: string;
  title: string;
  body: string;
};

export type Fact = {
  label: string;
  prefix?: string;
  value: string;
  unit: string;
  description: string;
};

export const processSteps: readonly ProcessStep[] = [
  {
    number: "01",
    title: "図面・仕様確認",
    body: "材質、寸法、公差、表面粗さ、表面処理、検査方法、提出書類を確認します。仕様が固まっていない場合は、用途と優先条件から整理します。",
  },
  {
    number: "02",
    title: "加工・治具設計",
    body: "加工機、基準面、把持方法、工具、加工順、測定タイミングを設計します。量産案件では、段取り時間と工具寿命も含めて検討します。",
  },
  {
    number: "03",
    title: "切削・旋削",
    body: "5軸・立形・横形マシニング、CNC旋盤、複合旋盤を使い、複雑形状、多面形状、シャフト、フランジなどを加工します。",
  },
  {
    number: "04",
    title: "研削・特殊工程",
    body: "平面・円筒研削による仕上げのほか、熱処理、アルマイト、無電解ニッケル、硬質クロムなどを協力会社と連携して手配します。",
  },
  {
    number: "05",
    title: "組立・検査",
    body: "圧入、締結、簡易配管、動作確認、三次元測定、真円度・粗さ測定、必要書類の照合まで行います。",
  },
  {
    number: "06",
    title: "梱包・納品",
    body: "傷、打痕、異物、錆を防ぐ梱包を選定し、製品識別と書類を確認して出荷します。北陸3県は条件に応じて自社便・定期便を活用します。",
  },
] as const;

export const facts: readonly Fact[] = [
  {
    label: "創業",
    value: "1986",
    unit: "年",
    description: "富山県高岡市で創業。2026年に40周年を迎えました。",
  },
  {
    label: "取引社数",
    value: "240",
    unit: "社以上",
    description: "2025年度までの累計取引実績です。",
  },
  {
    label: "主要設備",
    value: "67",
    unit: "台",
    description: "加工機、研削盤、主要測定機の合計です。",
  },
  {
    label: "年間加工点数",
    prefix: "約",
    value: "86",
    unit: "万点",
    description: "2025年度の出荷実績です。",
  },
  {
    label: "納期遵守率",
    value: "99.3",
    unit: "％",
    description: "2025年度、顧客と合意した納期を基準に算出しています。",
  },
  {
    label: "社内不良率",
    value: "12",
    unit: "ppm",
    description: "2025年度、社内最終検査で判定した不適合数を基準に算出しています。",
  },
  {
    label: "技能検定保有者",
    value: "32",
    unit: "名",
    description: "機械加工・機械検査等の技能検定保有者数です。",
  },
] as const;
