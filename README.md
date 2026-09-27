# 北陸精密テクノ — Corporate Website Portfolio

架空の精密加工会社「北陸精密テクノ株式会社」のコーポレートサイトです。
Next.js App Router / React / TypeScript / CSS Modulesで構築しています。

## デモについて

- 会社、人物、住所、設備、認証、実績値、製品事例は架空設定を含みます。
- 人物・工場・製品の画像にはAI生成イメージを使用しています。
- お問い合わせはデモです。入力内容と添付ファイルは外部送信・保存されません。
- CMS、メール送信、ストレージ、GA4は未接続です。
- `/news` と `/privacy` は未実装で、該当リンクは404になります。

## 実装ページ

`/` · `/about` · `/business` · `/technology` · `/products` · `/quality` · `/company` · `/recruit` · `/contact`

## ローカル起動

```sh
npm ci
npm run dev
```

## 検証・本番起動

```sh
npm run typecheck
npm run lint
npm run build
npm run start
```

## 公開

VercelでGitリポジトリをインポートし、Framework PresetをNext.js、Root Directoryをリポジトリ直下に設定します。
デモ表示に秘密の環境変数は必要ありません。`.env.example` は接続予定の変数名のみです。
送信機能やファイル保存は、保存期間・通知先・送信基盤等が確定するまで有効にしません。

公開リポジトリには最新版のソース・表示素材・設定のみを含み、過去ZIP、内部資料、作業ログ、ビルドキャッシュは含めません。
