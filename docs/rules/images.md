# 画像制作ルール

## 命名規則

::: tip AIで使う
この命名規則は、Claude Code などのAIエージェント向けのスキルとしても置いている。→ [skills/image-naming/SKILL.md](https://github.com/wan55-engineers/wan55-coding-guideline/blob/main/skills/image-naming/SKILL.md)
:::

### 基本の考え方

画像のファイル名はclass名から決め、保存先のディレクトリはページのURLに合わせる。

### ディレクトリ

```
/img/{ページ}/
```

- ページはURLの階層に合わせる（`about/` `service/web/`）
- URLに対応しないディレクトリは `_` で始める
- 複数ページで使う画像は、使うページすべての一番近い共通の親の `_common/` に置く（サイト全体なら `/img/_common/`）
- LPなどでページ全体の画像が多い場合や、特定のブロックに画像が多い場合は、`_ブロック名/` に分けてもよい。分けた場合もファイル名は短縮しない

```
/img/
  _common/                ← サイト全体の共通画像
  about/
    _common/              ← about配下だけの共通画像
    _voice/               ← voiceブロックの画像
      voice_card_01.jpg
    hero_01.jpg
    history/              ← 下層ページ
      hero_01.jpg
```

### ファイル名

```
{ブロック}_{要素}_{番号}_{デバイス}_{状態}@{倍率}.{拡張子}
```

必要なときだけ、番号の後ろにデバイス・状態・倍率をこの順に付ける（`hero_01_sp@2x.jpg`）。要素・デバイス・状態を省くときは直前の `_` も省く。倍率を省くときは `@` も付けない。

| 部分 | 決め方 | 例 |
| --- | --- | --- |
| ブロック | BEMのBlock名（`p-` / `c-` / `l-`）から接頭辞を除いたもの | `hero` `button` `header` |
| 要素 | 画像が置かれた子要素（Element）名。ブロック直下なら省略 | `card` `icon` |
| 番号 | 追加順の2桁。1枚目から必ず付ける | `01` |
| デバイス | 指定がなければPC用 | `sp`（スマートフォン用） |
| 状態 | 指定がなければ通常状態 | `hover`（ホバー時） |
| 倍率 | 倍率の前に `_` を挟まず `@` を付ける | `@2x`（2倍サイズ） |

```html
<!-- /img/about/ -->
<section class="p-hero">
  <picture>
    <source media="(max-width: 767px)" srcset="/img/about/hero_01_sp.jpg">
    <img src="/img/about/hero_01.jpg" alt="">
  </picture>
</section>

<section class="p-service">
  <div class="p-service__card">
    <img src="/img/about/service_card_01.jpg" alt="">
  </div>
</section>
```

- ブロック名・要素名はclass名と同じにする。言い換え・省略・補完をしない
- 番号は削除しても詰めない・再利用しない。100枚を超えそうなら最初から3桁にする
- 同じ画像なら、デバイス・状態・倍率が違っても番号は変えない
- WebPなどフォーマット違いは拡張子だけ変える
- 英小文字・数字と区切りの記号で書く。部分の区切りは `_`（倍率の前は `@`）、単語の区切りは `-`
- 基本ルールで付ける名前には、色や形など見た目の情報を入れない
- class名の変更や画像の移動をしたら、画像もリネームして参照を直す

### 例外

例外は次の表に限る。表に記載のない部分は基本ルールに従う。

| 対象 | ルール | 例 | 理由 |
| --- | --- | --- | --- |
| トップページ | ディレクトリは `top/` | `/img/top/hero_01.jpg` | URLが `/` でディレクトリ名がない |
| CSSで敷く背景 | 要素名の代わりに `bg` | `hero_bg_01.jpg` | 画像を置く子要素がない |
| 一覧でリンク先ページを表すサムネイル | リンク先ページのディレクトリに `thumb_{番号}` で置く | `/img/works/a/thumb_01.jpg` | ページ内のブロックではなく、ページそのものを表す |
| 汎用画像（アイコン・ロゴなど） | `/img/_common/` に `{種類}_{名前}` で置き、番号は付けない。名前には色や形を使ってよく、色違いには色名を付けてよい | `icon_arrow-right.svg` `logo_main_white.svg` | 特定のブロックに属さず、中身の名前で一意に決まる |
| CMSアップロード | ファイル名の先頭にページ名。下層ページは階層を `-` でつなぐ | `top_hero_01.jpg` `service-web_hero_01.jpg` | ディレクトリが使えない |
| favicon・apple-touch-icon | このルールの対象外。慣習どおりルート直下 | `/favicon.ico` | 置き場所が仕様で決まっている |

汎用画像の種類と名前の例：

| 種類 | 対象 | 例 |
| --- | --- | --- |
| `icon` | 矢印やSNSなどの汎用アイコン。色はSVGの `currentColor` で変える | `icon_arrow-right.svg` |
| `logo` | ヘッダー・フッターなど複数箇所で使うロゴ | `logo_main.svg` |

### ケース別の命名例

| ケース | 対応 |
| --- | --- |
| idが付いている | class名よりidを優先する（`id="history"` → `history_01`） |
| 同じページで同じコンポーネントを複数回使う | 置いている親ブロックの名前を使う（`service_card_01` / `works_card_01`） |
| 同じclassのsectionが並び、idもない | たとえばclass名が `p-section` なら、最初に追加した画像は `section_01.jpg`、次に追加した画像は `section_02.jpg` とする。ページ上の表示順を変えても番号は変えない。セクションごとに区別したいときは、見出しから名前を付ける（`section-history_01`）か、HTMLにidを付ける |
| 子要素が入れ子になっている | 画像に一番近い要素名だけを使い、階層はつなげない（`service_icon_01`） |
| 特定のコンポーネントだけで使うアイコン・ロゴ | 汎用画像ではなく基本ルール（`button_icon_01.svg`） |

### NG例

| NG | OK | 理由 |
| --- | --- | --- |
| `img01.jpg` | `hero_01.jpg` | 使用箇所がわからない |
| `hero_main.jpg` | `hero_01.jpg` | 2枚目を足すときに破綻する |
| `about_photo_01.jpg` | `about_01.jpg` | 直下の画像に要素は付けない |
| `hero_sp_01.jpg` | `hero_01_sp.jpg` | スマートフォン用を示す `sp` は番号の後ろに付ける |
| `header_ico_01.svg`（class名は `__icon`） | `header_icon_01.svg` | class名と違う名前になっている |
| `icon_01.svg`（汎用） | `icon_arrow-right.svg` | 汎用画像は中身の名前で命名する |
| `/img/about/voice/` | `/img/about/_voice/` | 分割ディレクトリに `_` がなく、ページと区別できない |
| `_voice/01.jpg` | `_voice/voice_01.jpg` | フォルダの外で判別できない |

## 画像書き出しルール

### JPG

**用途**: 色数が多く、サイズの大きい写真などの画像

**設定**:
- **圧縮率**: 原則として80%
- **カラープロファイル**: sRGBに変換してから書き出し
- Adobe RGBに注意し、必要な場合カラープロファイルを変換

:::tip
クオリティに配慮しながら、極力ファイルサイズは軽減すること。
共有されたPSDの担当デザイナーにカラープロファイルを確認して作業実施。
:::

**最適化ツール**:
- [ImageOptim](https://imageoptim.com/) (macOS)
- [Squoosh](https://squoosh.app/) (Web)
- [TinyJPG](https://tinyjpg.com/) (Web)

### PNG

**用途**: 透明を含む画像、スプライト用画像など

**PNG-8**: 
- 主にアイコンや簡単なテキスト画像など
- 色数の少ない、あるいは透明を含む画像

**PNG-24/PNG-32**:
- 半透明の画像
- 色数が多く透明を含む画像

:::warning 注意
PNG-24/PNG-32はJPGと比べてファイルサイズが大きいので、透過の用途以外では使用しない。
:::

**pngを使用する場合は軽量化の処理を行うこと。**

**最適化ツール**:
- [TinyPNG](https://tinypng.com/)
- [pngquant](https://pngquant.org/)

### SVG

**用途**:
- 主にアイコン
- テキスト画像
- メインのロゴ画像

**メリット**:
- 拡大縮小しても劣化しない
- ファイルサイズが小さい（シンプルな図形の場合）
- CSSで色やサイズを変更可能

#### Illustratorから SVG 書き出し方法

1. **ファイル** → **別名で保存**
2. ファイル形式で **SVG** を選択
3. SVGオプションで以下を設定：
   - SVGプロファイル: **SVG 1.1**
   - フォント: **SVGに変換** または **アウトライン化**
   - 画像: **埋め込み**
   - CSS プロパティ: **スタイル要素**
   - 小数点以下の桁数: **2**

**書き出し後の最適化**:

[SVGO](https://github.com/svg/svgo) や [SVGOMG](https://jakearchibald.github.io/svgomg/) で最適化を行う。

```bash
# SVGOのインストールと使用
npm install -g svgo
svgo input.svg -o output.svg
```

### WebP

**用途**: モダンブラウザ向けの画像最適化

**メリット**:
- JPGやPNGより高圧縮
- 透過に対応
- ファイルサイズが20-30%小さい

**使用例**:

```html
<picture>
  <source srcset="/img/about/hero_01.webp" type="image/webp">
  <img src="/img/about/hero_01.jpg" alt="写真">
</picture>
```

## 参考資料

- [Web Fundamentals - Image Optimization](https://web.dev/fast/#optimize-your-images)
- [SVG Specification](https://www.w3.org/TR/SVG2/)
