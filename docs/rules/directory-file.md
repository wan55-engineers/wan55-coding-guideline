# ディレクトリ・ファイル作成ルール

## ディレクトリ作成ルール

### 使用文字

ディレクトリ名には以下の文字のみを使用する。

- **`a`～`z`** までの小文字のアルファベット（1バイト）
- **`0`～`9`** までの英数字（1バイト）
- **`-`（ハイフン）** と **`_`（アンダースコア）**（いずれも1バイト）
- **スペースは使用しない**

:::warning 例外
システム等からの自動で出力されるファイルに関しては上記の限りではない。
:::

**✅ Good**

```
project/
├── assets/
├── images/
├── css/
├── js/
├── common-components/
└── user_data/
```

**❌ Bad**

```
project/
├── Assets/          # 大文字
├── Images Files/    # スペース
├── CSS/             # 大文字
└── 画像/            # 2バイト文字
```

## ファイル作成ルール

### 1. ファイル名使用文字

ファイル名には以下の文字のみを使用する。

- **`a`～`z`** までの小文字のアルファベット（1バイト）
- **`0`～`9`** までの英数字（1バイト）
- **`-`（ハイフン）** と **`_`（アンダースコア）**（いずれも1バイト）
- **ファイル名には拡張子を必ずつける**
- **2バイト文字とスペースは使用しない**

:::warning 例外
システム等からの自動で出力されるファイルに関しては上記の限りではない。
:::

**✅ Good**

```
index.html
style.css
main.js
user-profile.html
header_component.js
logo-2024.svg
```

**❌ Bad**

```
Index.html          # 大文字
style               # 拡張子なし
main script.js      # スペース
会社概要.html       # 2バイト文字
```

:::tip
画像ファイルの命名規則や書き出しルールについては [images.md](./images.md) を参照
:::

## ディレクトリ構成例

```
project/
├── index.html
├── about/
│   └── index.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── reset.css
│   ├── js/
│   │   ├── main.js
│   │   └── modules/
│   │       ├── slider.js
│   │       └── modal.js
│   └── images/
│       ├── common/
│       │   ├── logo.svg
│       │   ├── logo@2x.png
│       │   └── header_bg.jpg
│       ├── top/
│       │   ├── hero_ph_01.jpg
│       │   └── hero_ph_01_sp.jpg
│       └── icons/
│           ├── icon_arrow.svg
│           ├── icon_search.svg
│           └── icon_menu.svg
└── fonts/
    ├── NotoSansJP-Regular.woff2
    └── NotoSansJP-Bold.woff2
```

## 自動チェック

### ファイル名検証スクリプト

```javascript
// validate-filenames.js
const fs = require('fs');
const path = require('path');

const VALID_PATTERN = /^[a-z0-9_-]+(\.[a-z0-9]+)?$/;

function validateFileName(filename) {
  return VALID_PATTERN.test(filename);
}

function checkDirectory(dir) {
  const files = fs.readdirSync(dir);
  const errors = [];
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (!validateFileName(file)) {
      errors.push(`Invalid filename: ${fullPath}`);
    }
    
    if (stat.isDirectory()) {
      errors.push(...checkDirectory(fullPath));
    }
  });
  
  return errors;
}

const errors = checkDirectory('./src');
if (errors.length > 0) {
  console.error('❌ Filename validation failed:');
  errors.forEach(err => console.error(err));
  process.exit(1);
} else {
  console.log('✅ All filenames are valid');
}
```

### package.json

```json
{
  "scripts": {
    "validate:filenames": "node scripts/validate-filenames.js"
  }
}
```

## 改行コードルール

プロジェクト全体で **LF（Line Feed）** を使用します。

`.gitattributes` で自動管理されます。

**例外**: Windows バッチファイル（`.bat`, `.cmd`, `.ps1`）のみ CRLF を使用

## 参考資料

- [Web Fundamentals - Image Optimization](https://web.dev/fast/#optimize-your-images)
- [SVG Specification](https://www.w3.org/TR/SVG2/)
- [Git Attributes Documentation](https://git-scm.com/docs/gitattributes)
