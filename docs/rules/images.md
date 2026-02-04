# 画像ファイルルール

## 命名規則

画像名は以下の形式で命名する。

```
[カテゴリ名]_[識別名]_[連番]_[状態][デバイス識別名].[拡張子]
```

※不要だと判断される場合は省略可

### 識別名一覧

| 識別名 | 用途 |
|--------|------|
| `ttl` | タイトル |
| `txt` | テキスト |
| `bg` | 背景 |
| `ico` | アイコン |
| `bnr` | バナー |
| `logo` | ロゴ |
| `img` | イラストなど |
| `ph` | 写真 |
| `fig` | 図表 |

### デバイス識別名・状態

| 識別名 | 用途 |
|--------|------|
| `_pc` | PC用 |
| `_sp` | スマートフォン用 |
| `_tb` | タブレット用 |
| `_on` | オン状態（hoverなど） |
| `_off` | オフ状態 |
| `_active` | カレント時 |

### 接尾名

| 識別名 | 用途 |
|--------|------|
| `@2x` | 高解像度ディスプレイ用（Retina対応） |

### 命名例

```
# 基本
header_logo.png
footer_bg.jpg
main_img_01.jpg

# デバイス別
hero_ph_sp.jpg
nav_ico_pc.svg

# 状態
button_bnr_on.png
button_bnr_off.png
menu_ico_active.svg

# 高解像度用
logo@2x.png
icon_user@2x.svg

# 複合
product_img_01_sp@2x.jpg
header_ttl_on_pc.png
```

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
  <source srcset="/images/photo.webp" type="image/webp">
  <img src="/images/photo.jpg" alt="写真">
</picture>
```

## 参考資料

- [Web Fundamentals - Image Optimization](https://web.dev/fast/#optimize-your-images)
- [SVG Specification](https://www.w3.org/TR/SVG2/)
