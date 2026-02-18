# ディレクトリ・ファイル作成ルール

Google Search Centralの[URL構造ベストプラクティス](https://developers.google.com/search/docs/crawling-indexing/url-structure)に準拠し、SEO最適化とメンテナンス性を両立する。

## ルールの優先順位

本ドキュメントのルールは次の順で適用する。下位ルールが上位ルールを上書きする。

1. 共通ルール: すべてのファイルとディレクトリに適用
2. ディレクトリとファイルの個別ルール: 用途や配置に応じて適用
3. 例外: 言語やフレームワークの慣習と仕様を最優先

## 1. 共通ルール

プロジェクト内のすべてのファイルとディレクトリに適用する。

- 小文字のみ: `About.html` ではなく `about.html` 
- ASCII文字限定: `a-z`、`0-9`と許可記号`-`、`.`のみ使用する。日本語、全角英数字、スペースは使用しない
- 重複禁止: `Home.tsx` と `home.tsx`のようなケース違いの同名を作らない
- 予約語とバージョン表記の禁止:
  - Windows予約語`con`, `prn`, `aux`, `nul`等を使用しない
  - 指定がない限り、名前に日付、`v1`、`copy`、`old`等を含めない。Gitで管理する

## 1.1 適用スコープ

- 公開面: `dist/`, `public/`。生成されるURLパスに対応するディレクトリとHTML。小文字kebab-case固定。大文字と`_`は使用しない
- 実装面: `src/` 配下。言語とフレームワークの慣習に従った命名を許可する

## 2. ディレクトリ作成ルール

共通ルールに従う。Google検索のクロール効率への影響を考慮する。
:::tip
Googleは単語区切りにハイフン `-`を[推奨](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=ja#use-hyphens-to-separate-words)している。
:::

## 3. ファイル作成ルール

共通ルールに従う。開発言語やツールの慣習に基づくケースは例外として許可する。

### 3.1 一般ファイル
- **複合拡張子**: テスト、型定義、ビルド成果物などはエコシステムの慣習に従う<br>
  例: `component.test.tsx`, `styles.module.css`, `bundle.min.js`

### 3.2 言語仕様とツールによる例外

#### 部分ファイルとパーシャル
- `src`配下などで部分ファイルを管理する場合、 `_`から始まるファイル名を許可する。コンパイラへの書き出し抑制を目的とする。<br>
  例: `_variables.scss`, `_template.pug`

#### サードパーティ製ライブラリ
- 外部から導入し、ファイル名変更が困難なものは元の命名を維持する。<br>
  例: `jquery-3.7.1.min.js`

#### フレームワーク特有の命名
- フレームワークの慣習に従い、キャメルケースとパスカルケースを許可する。<br>
  例: `UserCard.tsx`, `[id].tsx`, `(group)/page.tsx`

### 3.3 特殊なファイル

#### 設定ファイル

`.eslintrc`, `.prettierrc` など、慣習として決まっているドット開始ファイルはそのまま使用する。

#### 画像ファイル

画像の命名パターンと状態管理は[画像制作ルール](./images.md) を参照する。


## 参考資料

- [URL Structure Best Practices - Google Search Central](https://developers.google.com/search/docs/crawling-indexing/url-structure)
- [Filenames and file types - Google developer documentation style guide](https://developers.google.com/style/filenames)
