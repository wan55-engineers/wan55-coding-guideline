# CSS制作ルール

**SASS（SCSS）を使用して制作を行うことを推奨します。**

:::tip
文字コード・改行コードについては [common.md](./common.md) を参照
:::

## 1. バージョン

**原則、CSS3を使用する。**

## 2. 文字コード

SCSSファイルの先頭に以下を記述：

```scss
@charset "UTF-8";
```

## 3. CSS記述の統一

### 3.1 id

#### 3.1.1 idの用途

**idは以下の用途で使用し、スタイルは適用しないこと。**

- アンカーリンク
- JavaScriptのトリガーとなる箇所
- ページ固有のID
- 構造上idであることが必要な箇所

**✅ Good**

```html
<!-- アンカーリンク -->
<section id="contact">
  <h2>お問い合わせ</h2>
</section>

<!-- JavaScriptのトリガー -->
<button id="menuToggle" type="button">メニュー</button>

<!-- フォーム要素の関連付け -->
<label for="userName">お名前</label>
<input type="text" id="userName" name="userName">
```

**❌ Bad**

```css
/* idにスタイルを適用 */
#header {
  background-color: #fff;
}
```

#### 3.1.2 命名ルール

**ローワーキャメルケースで命名すること。**

```html
<!-- Good -->
<div id="mainContent"></div>
<div id="sidebarNav"></div>
<button id="submitButton"></button>

<!-- Bad -->
<div id="main-content"></div>
<div id="sidebar_nav"></div>
```

### 3.2 class

#### 3.2.1 命名ルール

**原則、MindBEMdingを採用する。**

| 構成 | 命名ルール |
|------|-----------|
| Block（ブロック） | `.block` |
| Element（要素） | `.block__element` |
| Modifier（修飾子） | `.block--modifier`<br>`.block__element--modifier` |

**例**

```html
<!-- Block -->
<div class="card">
  <!-- Element -->
  <h3 class="card__title">タイトル</h3>
  <p class="card__text">本文...</p>
  <a href="#" class="card__link">詳細を見る</a>
</div>

<!-- Modifier -->
<div class="card card--featured">
  <h3 class="card__title card__title--large">注目記事</h3>
  <p class="card__text">本文...</p>
</div>

<!-- Button Block -->
<button class="button">通常ボタン</button>
<button class="button button--primary">プライマリボタン</button>
<button class="button button--large">大きいボタン</button>
```

**SCSS記法**

```scss
.card {
  padding: 20px;
  border: 1px solid #ddd;
  
  &__title {
    font-size: 1.5rem;
    margin-bottom: 10px;
    
    &--large {
      font-size: 2rem;
    }
  }
  
  &__text {
    line-height: 1.6;
  }
  
  &__link {
    color: #007bff;
    text-decoration: none;
  }
  
  &--featured {
    background-color: #f8f9fa;
    border-color: #007bff;
  }
}
```

## 4. 一般CSS記述

### 4.1 セレクタについて

**各プロパティのインデントは半角スペース2つとする。**

**プロパティの値の前には、必ず半角スペースを入れる。**

```css
/* Good */
.selector {
  display: block;
  width: 100%;
  margin: 0 auto;
}

/* Bad */
.selector{
display:block;
width:100%;
margin:0 auto;
}
```

### 4.2 ショートハンドプロパティについて

**一括指定可能なプロパティは基本まとめる。**

**✅ Good**

```css
.box {
  /* ショートハンド使用 */
  margin: 10px 20px;
  padding: 15px;
  background: #fff url('/images/bg.png') no-repeat center;
  border: 1px solid #ddd;
}
```

**❌ Bad**

```css
.box {
  /* 個別指定 */
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
  
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
}
```

:::tip 例外
特定の方向のみ変更したい場合は、個別指定を使用する。

```css
.box {
  margin: 10px 20px;
  margin-top: 30px; /* 上部のみ変更 */
}
```
:::

### 4.3 コメントアウトについて

コメントアウトは以下のように記述する。

```scss
/* ================================================
   大見出し
   ================================================ */

/* 中見出し
   ------------------------------------------------ */

/* 小見出し */

.component {
  color: #333;
}
```

## 5. SCSS記法

### 5.1 ネスト

**ネストは3階層までとする。**

**✅ Good**

```scss
.header {
  background-color: #fff;
  
  &__logo {
    width: 200px;
    
    img {
      max-width: 100%;
    }
  }
}
```

**❌ Bad**

```scss
.header {
  .inner {
    .logo {
      .image {
        img {
          max-width: 100%;  /* 深すぎるネスト */
        }
      }
    }
  }
}
```

## 参考資料

- [CSS Specifications (W3C)](https://www.w3.org/Style/CSS/)
- [Sass Documentation](https://sass-lang.com/documentation)
- [MindBEMding](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
- [MDN Web Docs - CSS](https://developer.mozilla.org/ja/docs/Web/CSS)
