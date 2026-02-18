# HTML制作ルール

テンプレートエンジン（ejs、pug）を使用して制作を行うことを推奨します。

:::tip
文字コード・改行コードについては [共通ルール](./common.md) を参照
:::

## 1. 前提

### 1.1 品質ゲート

[Markuplint](https://markuplint.dev/ja/) で以下を担保する。

- 文法エラーの検出
- アクセシビリティ違反の検出（alt属性、フォーム要素のラベルなど）
- SEOベストプラクティスの検証（titleタグ、meta descriptionなど）

### 1.2 フォーマット

インデント・スペース・改行は自動整形に任せる。

`.prettierrc` で管理する（[テンプレート](https://github.com/wan55-engineers/wan55-coding-guideline/blob/main/templates/.prettierrc.mjs)を参考に設定）。

## 2. DOCTYPE

HTML5で制作を行う。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <!-- 文字コードはhead先頭付近に配置 -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <title>ページタイトル</title>
  <meta name="description" content="ページの説明文（120文字程度）">
  <!-- OGP、faviconはプロジェクト要件に応じて設定 -->
</head>
<body>
  <!-- コンテンツ -->
</body>
</html>
```

## 4. マークアップ

### 4.1 HTML Standard準拠

WHATWG HTML Standardの仕様に準拠したマークアップを行う。

### 4.2 セマンティックHTML

HTML要素は、その本来の目的に従って使用する。見出しには見出し要素、段落には`p`要素、リンクには`a`要素を使用するなど、要素の意味に基づいたマークアップを行う。

これはアクセシビリティ、コードの再利用性、効率性の観点から重要です。

**✅ Good**

```html
<!-- 適切なセマンティック要素の使用 -->
<article>
  <h1>記事タイトル</h1>
  <p>本文の段落</p>
  <a href="/recommendations/">おすすめ記事一覧</a>
</article>
```

**❌ Bad**

```html
<!-- 非セマンティック要素の乱用 -->
<div class="title">記事タイトル</div>
<div class="text">本文の段落</div>
<div onclick="goToRecommendations();">おすすめ記事一覧</div>
```

### 4.3 アクセシビリティ

アクセシビリティに配慮し、タブ、エンター、スペースキーで全てのコンテンツにアクセスできるようにする。

#### 具体的な要件

- 見出し階層の順序: `<h1>`は原則1つ、見出しレベルを飛ばさない（h2 → h4は禁止）
- ランドマークの適切な使用: `<main>`は原則1つ、重複を避ける
- アイコンのみのボタン: `aria-label`で代替テキストを提供
- 画像の`alt`属性: 
  - 意味のある画像: 内容を説明する`alt`を記述
  - 装飾画像: `alt=""`（空文字列）を指定

**✅ Good**

```html
<!-- 適切なセマンティック要素の使用 -->
<nav>
  <ul>
    <li><a href="/">ホーム</a></li>
    <li><a href="/about">会社概要</a></li>
  </ul>
</nav>

<main>
  <article>
    <h1>記事タイトル</h1>
    <h2>セクション見出し</h2>
    <p>本文...</p>
  </article>
</main>

<!-- アイコンボタンにaria-label -->
<button type="button" aria-label="メニューを開く">
  <svg><!-- icon --></svg>
</button>

<!-- 意味のある画像 -->
<img src="/images/logo.png" alt="会社ロゴ" width="200" height="50">

<!-- 装飾画像 -->
<img src="/images/decoration.png" alt="" width="100" height="100">
```

**❌ Bad**

```html
<!-- 非セマンティック要素の乱用 -->
<div class="navigation">
  <div class="menu-item">
    <a href="/">ホーム</a>
  </div>
</div>

<!-- 見出しレベルを飛ばす -->
<h1>ページタイトル</h1>
<h3>セクション見出し</h3><!-- h2を飛ばしている -->

<!-- キーボード操作できない -->
<div onclick="handleClick()">送信</div>

<!-- アイコンボタンに代替テキストなし -->
<button type="button">
  <svg><!-- icon --></svg>
</button>

<!-- alt属性なし -->
<img src="/images/logo.png">
```

## 5. 画像

### 5.1 遅延読み込み（Lazy Loading）

画像には`loading="lazy"`属性を付けて遅延読み込みを有効にする。これによりサイトの初期読み込み時間が改善される。

**画像には必ず`width`と`height`属性を指定する**（レイアウトシフト対策）。
**`alt`属性は原則必須**。装飾画像は`alt=""`（空文字列）を指定。

**✅ Good**

```html
<!-- コンテンツ画像 -->
<img src="/images/photo.jpg" alt="写真の説明" width="600" height="400" loading="lazy">

<!-- 装飾画像 -->
<img src="/images/decoration.png" alt="" width="100" height="100" loading="lazy">
```

**❌ Bad**

```html
<!-- widthとheightがない -->
<img src="/images/photo.jpg" alt="写真の説明" loading="lazy">

<!-- loading属性がない -->
<img src="/images/photo.jpg" alt="写真の説明" width="600" height="400">

<!-- 装飾画像にダミーのalt -->
<img src="/images/decoration.png" alt="装飾" width="100" height="100" loading="lazy">
```

:::tip 遅延読み込みの例外
- **ファーストビュー**: `loading="lazy"`を付けない（表示速度が遅くなる）
- **LCP候補画像**（ヒーロー画像など）: `loading="lazy"`を付けない
- `iframe`要素にも`loading="lazy"`が使用可能
:::

### 5.2 レスポンシブ画像（Picture要素）

画面幅に応じて画像を出し分ける場合は`<picture>`要素を使用する。CSS（`display: none`など）で画像を出し分けると、不要な画像も読み込まれるためパフォーマンスが悪化する。

**CLS（Cumulative Layout Shift）対策は`<img>`側の`width`/`height`で担保する。**

**✅ Good**

```html
<picture>
  <source media="(min-width:768px)" srcset="/images/large.jpg">
  <img src="/images/small.jpg" alt="レスポンシブ画像" width="400" height="200" loading="lazy">
</picture>
```

**❌ Bad**

```html
<!-- CSSで出し分けると両方の画像が読み込まれる -->
<img src="/images/large.jpg" alt="PC用画像" class="pc-only">
<img src="/images/small.jpg" alt="SP用画像" class="sp-only">
```

## 6. インタラクティブ要素

### 6.1 ボタン要素

クリック時に特定の処理を実行する要素は、`<button>`または`<a>`を使用する。`<div>`や`<p>`など本来クリックできない要素を使用すると、キーボード操作ができない、フォーカスが当たらないなどの問題が発生する。

**`<button>`を使用する場合は、`type="button"`を指定してデフォルトの送信処理を防ぐ。**

**✅ Good**

```html
<!-- ボタン要素を使用 -->
<button type="button" id="js-modal-open">モーダルを開く</button>

<!-- リンクとして機能する場合はa要素 -->
<a href="#section1" class="js-smooth-scroll">セクション1へ</a>
```

**❌ Bad**

```html
<!-- 非セマンティック要素にクリック処理 -->
<div onclick="openModal()">モーダルを開く</div>
<p class="js-trigger">ボタン</p>

<!-- type属性がない -->
<button id="js-modal-open">モーダルを開く</button>
```

:::tip ボタンとリンクの使い分け
- **`<button>`**: ページ内での処理（モーダル表示、フォーム送信など）、無効化が必要なUI
- **`<a>`**: ページ遷移や同ページ内の別セクションへの移動
:::

## 7. パスの記述ルール

サイト内リンク、画像等のパスの記述は、**相対パス**または**ルート相対パス**のいずれかを使用。

### 相対パス

```html
<a href="./company/index.html">会社概要</a>
<img src="../images/photo.jpg" alt="写真">
```

### ルート相対パス

```html
<a href="/company/index.html">会社概要</a>
<img src="/images/photo.jpg" alt="写真">
```

:::tip 推奨
ルート相対パスを使用すると、ディレクトリ構造の変更に強く、管理しやすい。
:::

## 8. コメントルール

ソース内容やコードブロックの範囲を把握しやすくするため、コメントを適宜挿入する。

### コメントの粒度

- **大ブロック**（header、main、footerなど）には start/end コメントを付ける
- **繰り返しパーツ**（リスト項目など）には不要（差分が膨らむため）
- テンプレートエンジン使用時は、部分テンプレート単位でコメントを検討

```html
<!-- start header -->
<header class="l-header">
  <div class="l-header__inner">
    <h1>サイトタイトル</h1>
  </div>
</header>
<!-- end header -->

<!-- start main content -->
<main class="l-main">
  <section class="c-section">
    <h2>見出し</h2>
    <p>本文...</p>
  </section>
</main>
<!-- end main content -->
```

## 9. その他の記述ルール

### 9.1 基本ルール

- **要素名、属性名は全て小文字で記述する**
- **終了タグは省略しない**
- **文字参照が必要な文字**: 特殊な意味を持つ文字（`<`、`&`など）および不可視文字・制御文字（ノーブレークスペースなど）

### 9.2 文字実体参照の使用

UTF-8エンコーディングを使用する場合、**特殊な意味を持つ文字（`<`、`&`など）および制御文字・不可視文字以外は、直接記述することを推奨する**。

**✅ Good**

```html
<!-- 直接記述を推奨 -->
<p>ユーロの通貨記号は "€" です。</p>
<p>価格は1,000円〜2,000円です。</p>
<p>Copyright © 2026 Company Name</p>

<!-- 特殊文字のみ文字実体参照を使用 -->
<p>HTMLでは &lt;div&gt; や &lt;span&gt; などの要素があります。</p>
<p>A &amp; B</p>
```

**❌ Bad**

```html
<!-- 不要な文字実体参照 -->
<p>ユーロの通貨記号は &ldquo;&euro;&rdquo; です。</p>
<p>価格は1,000円&mdash;2,000円です。</p>
<p>Copyright &copy; 2026 Company Name</p>
```

### 9.3 文字実体参照を使用すべきケース
**例**

```html
<!-- Good: 特殊文字のみ参照 -->
<p>価格：1,000円 &lt; 2,000円</p>
<p>HTMLタグ: &lt;div&gt; &amp; &lt;span&gt;</p>

<!-- Good: 記号類は直接記述 -->
<p>Copyright © 2026 Company Name</p>
<p>商標™は登録商標®とは異なります</p>

<!-- Bad: HTMLの特殊文字を直接記述 -->
<p>価格：1,000円 < 2,000円</p>
<p>A & B</p>
```

## 参考資料

- [HTML Standard (WHATWG)](https://html.spec.whatwg.org/)
- [W3C Markup Validation Service](https://validator.w3.org/)
- [MDN Web Docs - HTML](https://developer.mozilla.org/ja/docs/Web/HTML)
