# コーディング後チェックリスト

コーディング完了後、納品前に以下の項目をチェックしてください。

:::tip 使い方
このチェックリストは印刷またはコピーして使用してください。
ブラウザ上でチェックボックスをクリックしても状態は保存されません。
:::

## 📋 印刷用チェックリスト

以下のチェックリストをコピーしてタスク管理ツール（GitHub Issues、Notion、Trelloなど）に貼り付けて使用できます。

```markdown
## コーディング後チェックリスト

### 1. 文法チェック
- [ ] HTML Validation（W3C）
- [ ] CSS Validation（W3C）

### 2. ブラウザ確認
- [ ] Chrome（最新版）
- [ ] Firefox（最新版）
- [ ] Safari（最新版）
- [ ] Edge（最新版）
- [ ] iOS Safari
- [ ] Android Chrome

### 3. 表示確認
- [ ] レイアウト崩れなし
- [ ] レスポンシブ対応
- [ ] 画像表示正常
- [ ] 全リンク動作確認

### 4. アクセシビリティ
- [ ] alt属性設定
- [ ] キーボード操作可能
- [ ] フォーカス表示

### 5. パフォーマンス
- [ ] PageSpeed Insights 80点以上
- [ ] 画像最適化
- [ ] ファイル圧縮

### 6. SEO
- [ ] titleタグ
- [ ] meta description
- [ ] OGP設定

### 7. デバッグ
- [ ] コンソールエラーなし
- [ ] 404エラーなし
```

---

## 1. 文法チェック

### HTML Validation

**W3C Markup Validation Service**を用いて検証テストを行う。

🔗 [https://validator.w3.org/](https://validator.w3.org/)

**チェック方法**:

1. 上記URLにアクセス
2. 「Validate by URI」「Validate by File Upload」「Validate by Direct Input」のいずれかを選択
3. 検証を実行
4. エラーを確認し、修正

:::warning 許容されるエラー
仕様上やむを得ない内容が含まれるエラーについては、許容する。

**例**:
- サードパーティスクリプト（Google Analytics等）由来のエラー
- CMSが自動生成するHTML由来のエラー
:::

**チェック項目**:

- DOCTYPE宣言が正しい
- 開始タグと終了タグが対応している
- 属性値が正しくクォートされている
- 必須属性が設定されている
- 要素のネストが正しい
- エラーが0件（または許容範囲内）

### CSS Validation

**W3C CSS Validation Service**を用いて検証する。

🔗 [https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)

**チェック項目**:

- 構文エラーがない
- ベンダープレフィックスの警告のみ（許容）
- 不要なプロパティがない

## 2. ブラウザ目視チェック

表示のズレ、リンク先のチェック等、目視でのチェックが必要な項目をブラウザごとに検証する。

### 対応ブラウザ

**デスクトップ**:

- Google Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Microsoft Edge（最新版）

**モバイル**:

- iOS Safari（最新版）
- Android Chrome（最新版）

**タブレット**:

- iPad Safari（最新版）
- Android Chrome（最新版）

### 表示確認項目

**レイアウト**:

- レイアウトが崩れていない
- 横スクロールが発生していない
- 要素が重なっていない
- 画像が正しく表示されている
- フォントが正しく読み込まれている

**レスポンシブ**:

- ブレイクポイントで正しく切り替わる
- 各デバイスサイズで適切に表示される
- 画像が各デバイスに最適化されている
- タッチ操作がしやすい（モバイル）

**インタラクション**:

- ホバー効果が正しく動作する
- クリック/タップが反応する
- アニメーションがスムーズに動作する
- フォームの送信が正常に動作する

### リンクチェック

- 全ての内部リンクが正しく動作する
- 外部リンクが正しく動作する
- アンカーリンクが正しい位置にジャンプする
- PDFなどのダウンロードリンクが機能する
- 404ページが存在しない

**ツール**: [Broken Link Checker](https://www.brokenlinkcheck.com/)

## 3. アクセシビリティチェック

### alt属性

**alt属性には音声読み上げ機能に対応した適切なテキスト情報を付けているかチェック。**

**チェック項目**:

- 全ての`<img>`タグに`alt`属性がある
- 装飾画像には空のalt（`alt=""`）を設定
- 意味のある画像には適切な説明文を設定
- ロゴ画像には会社名などを設定

**例**:

```html
<!-- Good -->
<img src="/images/logo.png" alt="株式会社サンプル">
<img src="/images/product.jpg" alt="新商品のスマートフォン">
<img src="/images/decoration.png" alt="">

<!-- Bad -->
<img src="/images/logo.png">
<img src="/images/product.jpg" alt="画像">
<img src="/images/decoration.png" alt="装飾">
```

### キーボードでの操作

**マウスやトラックパッドがなくても利用できるように、タブキーでサイトを一巡、スペースキーやエンターキーでリンクやボタンを操作できるようになっているかチェック。**

**チェック項目**:

- `Tab`キーで全ての要素にフォーカス移動できる
- フォーカス順序が論理的である
- フォーカスが視覚的にわかる（アウトライン表示）
- `Enter`キーでリンク/ボタンが動作する
- `Space`キーでボタンが動作する
- `Esc`キーでモーダルが閉じる
- キーボードトラップがない

**テスト方法**:

1. マウスを使わずにTabキーのみでページを移動
2. すべてのリンク、ボタン、フォーム要素に到達できるか確認
3. Enter/Spaceキーで操作できるか確認

### セマンティックHTML

- 適切な見出しレベル（h1～h6）を使用
- `<nav>`, `<main>`, `<article>`, `<aside>`など適切なセマンティック要素を使用
- フォーム要素に`<label>`が関連付けられている
- ボタンは`<button>`または`<a>`を使用（`<div>`は使わない）

### ARIA属性

- 必要に応じて`aria-label`を設定
- `aria-hidden="true"`を装飾要素に設定
- モーダルに`role="dialog"`を設定
- アラートに`role="alert"`を設定

## 4. パフォーマンスチェック

### ページ速度

**Google PageSpeed Insights**で測定

🔗 [https://pagespeed.web.dev/](https://pagespeed.web.dev/)

**目標スコア**:

- モバイル: 80点以上
- デスクトップ: 90点以上

**確認項目**:

- 画像が最適化されている
- CSS/JSが圧縮されている
- 不要なリソースがない
- キャッシュが有効化されている

### ファイルサイズ

- 画像ファイルが適切に圧縮されている
- CSS/JSファイルがminify化されている
- 使用していないCSSが削除されている

## 5. SEOチェック

**メタタグ**:

- `<title>`タグが設定されている（各ページ固有）
- `<meta name="description">`が設定されている
- `<meta name="viewport">`が設定されている
- OGPタグが設定されている（SNSシェア対応）

**構造化データ**:

- 必要に応じてJSON-LDで構造化データを実装

**sitemap.xml**:

- sitemap.xmlが存在する
- Google Search Consoleに登録されている

## 6. セキュリティチェック

- HTTPSで配信されている
- 外部リンクに`rel="noopener"`が設定されている
- フォームにCSRF対策が実装されている
- XSS対策が実装されている

## 7. デバッグ

**Console Errors**:

- ブラウザのコンソールにエラーが出ていない
- 警告が最小限に抑えられている

**Network**:

- 404エラーが発生していない
- リソースの読み込みが成功している

## 自動チェックツール

### Lighthouse

ChromeのDevToolsに搭載。パフォーマンス、アクセシビリティ、SEOを総合的にチェック。

```bash
npm install -g lighthouse
lighthouse https://example.com --view
```

### axe DevTools

アクセシビリティチェック用のブラウザ拡張機能。

🔗 [Chrome Extension](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)

## 参考資料

- [W3C Markup Validation Service](https://validator.w3.org/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse/overview/)
