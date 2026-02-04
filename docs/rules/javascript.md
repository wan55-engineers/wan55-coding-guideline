# JavaScript制作ルール

## 1. 記述場所の前提

**特に理由がない限り、原則スクリプトは外部ファイル化し、`</body>`タグ直前に配置。**

**✅ Good**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>ページタイトル</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
  
  <!-- スクリプトは</body>直前 -->
  <script src="/js/main.js"></script>
</body>
</html>
```

**❌ Bad**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>ページタイトル</title>
  <!-- head内にスクリプト（レンダリングブロック） -->
  <script src="/js/main.js"></script>
</head>
<body>
  ...
</body>
</html>
```

:::tip 例外
以下の場合は`<head>`内への配置も許容される：

- `defer`または`async`属性を使用する場合
- Googleアナリティクスなど、早期実行が必要なスクリプト
- モダンフレームワーク（React、Vueなど）のエントリーポイント

```html
<head>
  <script src="/js/app.js" defer></script>
</head>
```
:::

## 2. 文字コード

**HTMLに合わせる（原則UTF-8）。**

## 3. コメントのルール

スクリプト内容を把握しやすいよう、適宜コメントでの説明を付与する。

```javascript
/**
 * ユーザー情報を取得する
 * @param {string} userId - ユーザーID
 * @returns {Promise<Object>} ユーザー情報オブジェクト
 */
async function getUserInfo(userId) {
  // APIエンドポイントを構築
  const endpoint = `/api/users/${userId}`;
  
  try {
    // データ取得
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('ユーザー情報の取得に失敗しました:', error);
    throw error;
  }
}

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
  // 初期化処理
  init();
});
```

### コメントの種類

```javascript
// 単一行コメント

/*
 * 複数行コメント
 * 複数行にわたる説明を記述
 */

/**
 * JSDocコメント
 * 関数やクラスのドキュメント生成に使用
 */
```

## 4. インデント

**原則半角スペース2つ分を使用し、タブを使用しない。**

```javascript
function calculateTotal(items) {
  let total = 0;
  
  items.forEach(item => {
    if (item.active) {
      total += item.price;
    }
  });
  
  return total;
}
```

## 5. 変数名のルール

### 命名規則

| ケース | 用途 | 例 |
|--------|------|-----|
| **コンスタントケース** | 定数、グローバル変数 | `CONSTANT_NAME`<br>`MAX_COUNT`<br>`API_BASE_URL` |
| **パスカルケース** | コンストラクタ、クラス | `ClassName`<br>`UserProfile`<br>`HttpClient` |
| **ローワーキャメルケース** | 関数、変数、メソッド、名前空間 | `somethingName`<br>`getUserData`<br>`isActive` |

### 例

```javascript
// 定数（コンスタントケース）
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = 'https://api.example.com';
const DEFAULT_TIMEOUT = 5000;

// クラス（パスカルケース）
class UserManager {
  constructor(userId) {
    this.userId = userId;
  }
  
  getUserInfo() {
    return this.userId;
  }
}

// 関数・変数（ローワーキャメルケース）
let userName = 'John Doe';
let isLoggedIn = false;

function fetchUserData(userId) {
  // 処理...
}

const calculateTotalPrice = (items) => {
  return items.reduce((sum, item) => sum + item.price, 0);
};

// プライベートメソッド（先頭にアンダースコア）
class Component {
  _internalMethod() {
    // 内部処理
  }
  
  publicMethod() {
    this._internalMethod();
  }
}
```

## 6. 記述ルール

### 6.1 厳格モード

ファイルの先頭に `'use strict';` を記述する。

```javascript
'use strict';

function doSomething() {
  // 処理...
}
```

### 6.2 変数宣言

**`var`は使用せず、`const`と`let`を使用する。**

```javascript
// Good
const MAX_COUNT = 10;  // 再代入しない値
let counter = 0;       // 再代入する値

// Bad
var count = 0;
```

### 6.3 セミコロン

**文末にセミコロンを必ず付ける。**

```javascript
// Good
const name = 'John';
const age = 30;

function greet() {
  console.log('Hello');
}

// Bad
const name = 'John'
const age = 30
```

### 6.4 文字列

**シングルクォートを使用する。**

```javascript
// Good
const message = 'Hello, World!';
const template = `Hello, ${name}!`;  // テンプレートリテラルはバッククォート

// Bad
const message = "Hello, World!";
```

### 6.5 比較演算子

**厳密等価演算子（`===`、`!==`）を使用する。**

```javascript
// Good
if (value === 10) {
  // 処理
}

if (user !== null) {
  // 処理
}

// Bad
if (value == 10) {  // 型変換が発生
  // 処理
}
```

### 6.6 アロー関数

**簡潔な記述にはアロー関数を使用する。**

```javascript
// Good
const double = (x) => x * 2;
const sum = (a, b) => a + b;

items.map(item => item.name);
items.filter(item => item.active);

// Traditional function（thisの扱いに注意が必要な場合）
function Counter() {
  this.count = 0;
  setInterval(function() {
    this.count++;  // thisが期待と異なる
  }, 1000);
}
```

## 7. モダンなJavaScript記法

### 7.1 分割代入

```javascript
// オブジェクトの分割代入
const user = { name: 'John', age: 30, email: 'john@example.com' };
const { name, age } = user;

// 配列の分割代入
const colors = ['red', 'green', 'blue'];
const [first, second] = colors;

// 関数の引数で分割代入
function greetUser({ name, age }) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}
```

### 7.2 スプレッド演算子

```javascript
// 配列のコピー
const original = [1, 2, 3];
const copy = [...original];

// 配列の結合
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];

// オブジェクトのコピー・マージ
const defaults = { theme: 'light', lang: 'ja' };
const userSettings = { lang: 'en' };
const settings = { ...defaults, ...userSettings };
```

### 7.3 オプショナルチェーン

```javascript
// Good（オプショナルチェーン）
const userName = user?.profile?.name;
const firstItem = items?.[0];

// Bad（従来の方法）
const userName = user && user.profile && user.profile.name;
```

### 7.4 Null合体演算子

```javascript
// Good
const displayName = userName ?? 'ゲスト';
const count = value ?? 0;

// Bad
const displayName = userName || 'ゲスト';  // 空文字やfalseも置き換わる
```

## 8. 非同期処理

### 8.1 async/await

**Promiseベースの処理は`async/await`を使用する。**

```javascript
// Good
async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// 使用例
async function displayUser() {
  const user = await fetchUserData('123');
  console.log(user.name);
}

// Bad（コールバック地獄）
function fetchUserData(userId, callback) {
  fetch(`/api/users/${userId}`)
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error));
}
```

## 自動化

### ESLint設定

```bash
npm install --save-dev eslint
```

`.eslintrc.json`

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-var": "error",
    "prefer-const": "error",
    "eqeqeq": ["error", "always"],
    "no-console": "warn",
    "camelcase": ["error", { "properties": "never" }]
  }
}
```

### Prettier設定

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "arrowParens": "avoid"
}
```

### package.json scripts

```json
{
  "scripts": {
    "lint": "eslint src/**/*.js",
    "lint:fix": "eslint src/**/*.js --fix",
    "format": "prettier --write \"src/**/*.js\""
  }
}
```

## 参考資料

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/ja/docs/Web/JavaScript)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [ESLint Rules](https://eslint.org/docs/latest/rules/)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
