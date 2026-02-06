# CSS制作ルール

:::tip
文字コード・改行コードは [common.md](./common.md) を参照。
:::

## 1. 前提

### 1.1 対応環境

Browserslist を唯一の基準とする。

- Autoprefixer による自動ベンダープレフィックス付与を前提とする
- 手動での `-webkit-` `-moz-` などの記述は禁止

`.browserslist` で管理する（[テンプレート](https://github.com/wan55-engineers/wan55-coding-guideline/blob/main/templates/.browserslistrc)を参考に設定）。

### 1.2 品質ゲート

Stylelint で以下を担保する。

- 禁止事項の検出（ID セレクタ、深いネスト、タグ+クラス）
- 命名規則の検証（BEM準拠）
- プロパティの記述順序の統一

`.stylelintrc` で管理する（[テンプレート](https://github.com/wan55-engineers/wan55-coding-guideline/blob/main/templates/stylelint.config.mjs)を参考に設定）。

### 1.3 フォーマット

インデント・スペース・改行は自動整形に任せる。

`.prettierrc` で管理する（[テンプレート](https://github.com/wan55-engineers/wan55-coding-guideline/blob/main/templates/.prettierrc.mjs)を参考に設定）。

## 2. 設計原則

### `!important` の禁止

詳細度を適切に管理することで解決する。

::: details 例外
- ユーティリティクラスでの使用
- 外部 CSS/JS ライブラリのスタイル上書き
:::

### 2.1 セレクタ設計

単一クラスセレクタで完結させる。詳細度を上げず、DOM構造に依存しない設計にする。

#### 禁止事項

- `#id` セレクタ
- タグ + クラス（`div.card`）
- 深い子孫連鎖（`.a .b .c .d`）
- 構造依存（`>` 連鎖、タグ指定）

```scss
/* ❌ Bad - 詳細度が高すぎる */
#sidebar .widget ul li a.link {
  color: blue;
}

/* ❌ Bad - 構造に依存 */
.card > div > h3 {
  color: #333;
}

/* ✅ Good - 単一クラス、構造に依存しない */
.sidebar-link {
  color: blue;
}
```

::: details 例外：CMS出力などでクラス付与ができない場合
対象が一意に特定できる場合に限り許可する。
以下の方法で詳細度を抑える。

- 属性セレクタで指定する（例: `[id='card']`）
- 擬似クラスで指定する（例:`:where()`, `:is()`）
:::


### 2.2 Defensive なCSS設計

Webサイトは継続的に更新・改修が発生する。
コンテンツの変動（長文、画像差し替え、要素数の増減）でレイアウトが破綻しない CSS を書く。

```css
/* ❌ Bad - 変動に弱い */
.card {
  width: 320px;
  height: 220px;
  overflow: hidden;
}

/* ✅ Good - 変動に強い */
.card {
  max-width: 100%;
  min-height: 220px;
  padding: 16px;
}
```

> 参考: [Defensive CSS](https://defensivecss.dev/) - 将来の問題を防ぐ CSS の実践的テクニック集

### 2.3 不要なプロパティを指定しない

全てのプロパティに意味を持たせる。各プロパティは必要性を説明できる状態で指定する。

#### デフォルト値の再指定を避ける

デフォルト値の再指定は差分と誤解を生む。

```css
/* ❌ Bad - デフォルト値の無意味な再指定 */
.button {
  display: inline; /* デフォルトと同じ */
  position: relative; /* 変更しないなら不要 */
}

/* ✅ Good - 必要なプロパティのみ */
.button {
  padding: 12px 24px;
  background: var(--color-primary);
  color: #fff;
  border-radius: 4px;
}
```

#### ショートハンドの副作用に注意する

`font` `background` `flex` などのショートハンドは、未指定値までリセットされ副作用が出やすい。
意図を理解した上で使用する。部分的な変更の場合は個別プロパティを使う。

```css
/* ❌ Bad - 背景色だけ変えたいのにショートハンド */
.card {
  background: #fff; /* background-image等もリセットされる */
}

/* ✅ Good - 背景色だけ変更 */
.card {
  background-color: #fff;
}
```

## 3. 命名規約

### 3.1 クラス命名の基本原則

#### 1. 役割と目的を記述する

見た目（赤い、右側にあるなど）ではなく要素の役割で命名する。

* デザイン変更に強い: 左右反転しても命名が破綻しない
* レスポンシブ対応: 並びが変わっても矛盾しない

| 観点 | ❌ Bad（表現的・デザイン依存）          | ✅ Good（構造的・役割ベース）                  |
| -- | -------------------------- | ---------------------------------- |
| 配置 | `.left` `.right-side`      | `.sidebar` `.main-content`         |
| 色  | `.red-text` `.blue-button` | `.error-message` `.primary-button` |
| 装飾 | `.border-bold`             | `.card-outline`                    |

#### 2. 予測可能で平易な単語を選ぶ

- 一般的で誤解のない略語は許容（例: `.navigation` → `.nav`）
- 難解な単語は避ける（例: `ephemeral` より `temp`）
- 日本独自概念はローマ字を許容（例: `omikuji` `torii`）

#### 3. 記法を統一する（ケバブケース）

単語間はハイフン（`-`）で連結する。

- ❌ `.productList` / ❌ `.product_list`
- ✅ `.product-list`

### 3.2 BEM（MindBEMding）

| 構成                 | 命名ルール                       | 例                     |
| ------------------ | --------------------------- | --------------------- |
| Block              | `.block`                    | `.card`               |
| Element            | `.block__element`           | `.card__title`        |
| Modifier           | `.block--modifier`          | `.card--featured`     |
| Element + Modifier | `.block__element--modifier` | `.card__title--large` |

```html
<div class="card card--featured">
  <h3 class="card__title card__title--large">タイトル</h3>
  <p class="card__text">本文</p>
</div>
```

#### Modifier と状態・バリエーション

Modifier の乱立を避ける。状態は ARIA 属性、デザイン差分は `data-*` を推奨する。

```html
<!-- ❌ Bad - Modifierで状態管理 -->
<button class="button button--pressed">トグル</button>
<button class="button button--disabled">無効</button>

<!-- ✅ Good - 状態（意味がある） -->
<button class="button" aria-pressed="true">トグル</button>
<button class="button" disabled>無効</button>

<!-- ✅ Good - data属性でバリエーション管理 -->
<button class="button" data-variant="primary" data-size="large">ボタン</button>
```

#### クラス付与の省略（末端要素）

`a` `img` `span` など末端要素は、変更可能性が低い場合に限り親要素からの子孫セレクタ指定を許容する。

```html
<p class="card__text">
  詳細はこちらの<a href="#">リンク</a>から
</p>
```

## 4. デザイントークン（CSS変数）

### 4.1 :root に集約

グローバルなカスタムプロパティは `:root` に定義する。

```css
:root {
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --rounded-md: 16px;
  --rounded-sm: 8px;
}

.button {
  background-color: var(--color-primary);
  border-radius: var(--rounded-sm);
}
```

### 4.2 z-index 管理

グローバルな`z-index` はカスタムプロパティで定義し管理する。

```css
:root {
  --z-index-header: 100;
  --z-index-dialog: 200;
}
```

## 5. SCSS規約

### 5.1 記法
scss記法を使用する。

### 5.2 `@use` / `@forward`

`@use` `@forward` を使用する。

* `@import` は禁止（グローバルスコープ汚染のため）

```scss
/* ✅ Good */
@use 'variables';
@use 'mixins';

/* ❌ Bad */
@import 'variables';
@import 'mixins';
```

## 参考資料

- [CSS Specifications (W3C)](https://www.w3.org/Style/CSS/)
- [Sass Documentation](https://sass-lang.com/documentation)
- [MindBEMding](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
- [MDN Web Docs - CSS](https://developer.mozilla.org/ja/docs/Web/CSS)
- [CSS @layer](https://developer.mozilla.org/ja/docs/Web/CSS/@layer)
- [Every Layout](https://every-layout.dev/)
