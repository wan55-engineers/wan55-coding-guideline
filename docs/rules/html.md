# HTML制作ルール

テンプレートエンジン（ejs、pug）を使用して制作を行うことを推奨します。

:::tip
文字コード・改行コードについては [共通ルール](./common.md) を参照
:::

## 1. DOCTYPE

HTML5で制作を行う。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>ページタイトル</title>
</head>
<body>
  <!-- コンテンツ -->
</body>
</html>
```

## 2. viewport

viewportは原則以下のように設定する。

```html
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
```

## 3. マークアップ

### 3.1 W3C準拠

W3Cが勧告するHTML5の仕様に準拠したマークアップを行う。

### 3.2 セマンティックHTML

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

### 3.3 アクセシビリティ

アクセシビリティーに配慮し、タブ、エンター、スペースキーで全てのコンテンツにアクセスできるようにする。

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
    <p>本文...</p>
  </article>
</main>

<!-- キーボード操作可能なボタン -->
<button type="button" onclick="handleClick()">送信</button>

<!-- 画像にalt属性 -->
<img src="/images/logo.png" alt="会社ロゴ">
```

**❌ Bad**

```html
<!-- 非セマンティック要素の乱用 -->
<div class="navigation">
  <div class="menu-item">
    <a href="/">ホーム</a>
  </div>
</div>

<!-- キーボード操作できない -->
<div onclick="handleClick()">送信</div>

<!-- alt属性なし -->
<img src="/images/logo.png">
```

## 4. 画像

### 4.1 遅延読み込み（Lazy Loading）

画像には`loading="lazy"`属性を付けて遅延読み込みを有効にする。これによりサイトの初期読み込み時間が改善される。

**画像には必ず`width`と`height`属性を指定する**（レイアウトシフト対策）。
`alt`属性も必須。

**✅ Good**

```html
<img src="/images/photo.jpg" alt="写真の説明" width="600" height="400" loading="lazy">
```

**❌ Bad**

```html
<!-- widthとheightがない -->
<img src="/images/photo.jpg" alt="写真の説明" loading="lazy">

<!-- loading属性がない -->
<img src="/images/photo.jpg" alt="写真の説明" width="600" height="400">
```

:::tip 注意
- ファーストビューの画像には`loading="lazy"`を付けない（表示速度が遅くなる）
- `iframe`要素にも`loading="lazy"`が使用可能
:::

### 4.2 レスポンシブ画像（Picture要素）

画面幅に応じて画像を出し分ける場合は`<picture>`要素を使用する。CSS（`display: none`など）で画像を出し分けると、不要な画像も読み込まれるためパフォーマンスが悪化する。

**✅ Good**

```html
<picture>
  <source media="(min-width:768px)" srcset="/images/large.jpg" width="800" height="400">
  <img src="/images/small.jpg" alt="レスポンシブ画像" width="400" height="200" loading="lazy">
</picture>
```

**❌ Bad**

```html
<!-- CSSで出し分けると両方の画像が読み込まれる -->
<img src="/images/large.jpg" alt="PC用画像" class="pc-only">
<img src="/images/small.jpg" alt="SP用画像" class="sp-only">
```

## 5. インタラクティブ要素

### 5.1 ボタン要素

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
- **`<button>`**: ページ内での処理（モーダル表示、フォーム送信など）
- **`<a>`**: ページ遷移や同ページ内の別セクションへの移動
:::

## 6. インデント

**原則半角スペース2つ分を使用し、タブを使用しない。**

```html
<header class="l-header">
  <div class="l-header__inner">
    <h1 class="l-header__logo">
      <a href="/">サイト名</a>
    </h1>
  </div>
</header>
```

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
  <!-- セクション1 -->
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
- **機種依存文字は文字実体参照、または数値文字参照を使用する**

### 9.2 文字実体参照の使用

UTF-8エンコーディングを使用する場合、特殊な意味を持つ文字（`<`、`&`など）および制御文字・不可視文字（ノーブレークスペースなど）以外は、文字実体参照を使用せず直接記述することを推奨する。

**✅ Good**

```html
<!-- 直接記述を推奨 -->
<p>ユーロの通貨記号は "€" です。</p>
<p>価格は1,000円〜2,000円です。</p>

<!-- 特殊文字は文字実体参照を使用 -->
<p>HTMLでは &lt;div&gt; や &lt;span&gt; などの要素があります。</p>
<p>A &amp; B</p>
```

**❌ Bad**

```html
<!-- 不要な文字実体参照 -->
<p>ユーロの通貨記号は &ldquo;&eur;&rdquo; です。</p>
<p>価格は1,000円&mdash;2,000円です。</p>
```

### 9.3 文字実体参照・数値文字参照一覧

| 記号 | 名前 | 文字実体参照 | 数値文字参照 |
|------|------|--------------|--------------|
| < | 小なり | `&lt;` | `&#60;` |
| > | 大なり | `&gt;` | `&#62;` |
| & | アンパサンド | `&amp;` | `&#38;` |
| " | ダブルクォート | `&quot;` | `&#34;` |
| ' | シングルクォート | `&apos;` | `&#39;` |
| © | コピーライト | `&copy;` | `&#169;` |
| ® | 登録商標 | `&reg;` | `&#174;` |
| ™ | 商標 | `&trade;` | `&#8482;` |
| ' | 始め曲線型シングルクォート | `&lsquo;` | `&#8216;` |
| ' | 終わり曲線型シングルクォート | `&rsquo;` | `&#8217;` |
| " | 始め曲線型ダブルクォート | `&ldquo;` | `&#8220;` |
| " | 終わり曲線型ダブルクォート | `&rdquo;` | `&#8221;` |
| ～ | 全角チルダ | - | `&#65374;` |
| – | エヌダッシュ | `&ndash;` | `&#8211;` |
| — | エムダッシュ | `&mdash;` | `&#8212;` |

**例**

```html
<!-- Good -->
<p>価格：1,000円 &lt; 2,000円</p>
<p>Copyright &copy; 2026 Company Name</p>

<!-- Bad -->
<p>価格：1,000円 < 2,000円</p>
<p>Copyright © 2026 Company Name</p>
```

## 参考資料

- [HTML Standard (WHATWG)](https://html.spec.whatwg.org/)
- [W3C Markup Validation Service](https://validator.w3.org/)
- [MDN Web Docs - HTML](https://developer.mozilla.org/ja/docs/Web/HTML)
