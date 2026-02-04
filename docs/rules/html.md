# HTML制作ルール

テンプレートエンジン（ejs、pug）を使用して制作を行うことを推奨します。

:::tip
文字コード・改行コードについては [common.md](./common.md) を参照
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

### 3.2 アクセシビリティ

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

### 9.2 文字実体参照・数値文字参照一覧

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
