export type NewsItem = {
  category: string;
  date: string;
  href: string;
  title: string;
};

// microCMS接続前は架空の記事を掲載しない。接続時は取得データをこの型へ変換する。
export const newsItems: readonly NewsItem[] = [];

