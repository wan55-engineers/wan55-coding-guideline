# Contributing to Coding Guidelines

コーディングガイドラインへの貢献をご検討いただき、ありがとうございます！

このドキュメントでは、ガイドラインの改善や新規ルールの追加方法について説明します。

## 🎯 貢献の種類

以下のような貢献を歓迎します：

- **新しいルールの追加**: Web制作（HTML/CSS/JavaScript）のベストプラクティスや規約の提案
- **既存ルールの改善**: より明確な説明や実践的な例の追加
- **誤字脱字の修正**: タイポや文法の修正
- **コード例の改善**: 実プロジェクトで使える具体例の追加
- **チェックリストの拡充**: 制作時の確認項目の追加・改善

## ⚡️ クイックスタート

```bash
# 1. リポジトリをクローン（初回のみ）
git clone <YOUR_REPO_URL>
cd wan55-coding-guideline

# 2. 依存パッケージをインストール
npm install

# 3. ブランチを作成
git checkout -b feature/your-topic

# 4. 開発サーバー起動
npm run dev
# → http://localhost:5173 でプレビュー

# 5. docs/ 配下のMarkdownファイルを編集
# （保存すると自動リロード）

# 6. コミット＆プッシュ
git add .
git commit -m "feat: ○○ルールを追加"
git push origin feature/your-topic

# 7. GitHubでPull Request作成
```

## mainブランチ保護について

**重要**: mainブランチは保護されており、直接pushできません。必ずPull Requestを経由してマージしてください。

### 保護設定
- ✅ Pull Request必須
- ✅ 1人以上の承認が必要
- ✅ GitHub Actionsのビルド成功必須
- ✅ 古いレビュー承認は無効化

これにより、常に品質の高いドキュメントが保たれます。

## 🤝 貢献の流れ

### 1. Issue を作成（推奨）

大きな変更を加える前に、まず Issue を作成して提案内容を共有してください。

- **タイトル**: 簡潔に何を提案するか記載
- **本文**: 背景、提案内容、期待される効果を説明

**推奨ラベル**:
- `enhancement`: 新機能・新ルール追加
- `documentation`: 既存ドキュメント改善
- `bug`: 誤字脱字・リンク切れ修正
- `discussion`: チーム議論が必要
- `good first issue`: 初めての貢献者向け

**例**:
```
タイトル: [提案] CSSクラス命名規則にBEM方式を追加

ラベル: enhancement, discussion

## 背景
現在、CSS命名規則が明確でなく、プロジェクト間で統一されていません。

## 提案内容
`docs/rules/css.md` にBEM（Block Element Modifier）方式を追加：
- Block: `.card`
- Element: `.card__title`
- Modifier: `.card--featured`

## 期待される効果
- CSS保守性の向上
- 命名の迷いを削減
- チーム間の統一性向上

## 参考資料
- https://getbem.com/
```

### 2. ブランチを作成

main ブランチから作業用ブランチを作成します。

```bash
git checkout main
git pull origin main
git checkout -b feature/add-react-hooks-rule
```

**ブランチ命名規則**:

| プレフィックス | 用途 | 例 |
|--------------|------|----|
| `feature/` | 新規ルール追加 | `feature/add-bem-naming` |
| `fix/` | 誤字脱字・リンク切れ修正 | `fix/typo-in-html-rules` |
| `docs/` | サイト構成変更 | `docs/update-sidebar` |
| `improve/` | 既存ルール改善 | `improve/css-examples` |

**命名のコツ**:
- 短く具体的に（30文字以内推奨）
- 小文字とハイフンのみ使用
- Issue番号を含めてもOK: `feature/issue-23-add-bem`

### 3. ドキュメントを編集

#### 新規ルールを追加する場合

**配置場所**: `docs/rules/` 配下

以下のテンプレートに従ってください：

```markdown
# ルール名（明確で簡潔に）

## 結論

何をすべきか、端的に記載。箇条書き推奨。

- ✅ こうする
- ❌ こうしない
- 💡 推奨: こういう場合はこう

## 理由

なぜこのルールが必要か、背景や問題点を説明。

### メリット1: 保守性向上

具体的にどう保守性が上がるか。

### メリット2: バグ防止

防げるバグの具体例。

### メリット3: パフォーマンス

（該当する場合）

## 例

**実際のプロジェクトで使える具体例を記載**。

### ✅ Good（推奨）

```html
<!-- 良い例: 説明を添える -->
<div class="card">
  <h2 class="card__title">タイトル</h2>
  <p class="card__description">説明文</p>
</div>
```

### ❌ Bad（非推奨）

```html
<!-- 悪い例: なぜダメかを説明 -->
<div class="c1">
  <h2 class="t">タイトル</h2>
  <p class="d">説明文</p>
</div>
```

**なぜダメか**: クラス名が短すぎて意味不明。

## 例外

このルールを適用しない/できない特殊ケースがあれば記載。

- ⚠️ 外部ライブラリのHTML構造を変更できない場合
- ⚠️ レガシーコードとの互換性維持が必要な場合

## チェックリスト

実装時に確認すべき項目（該当する場合）:

- [ ] セマンティックなHTML構造になっているか
- [ ] アクセシビリティを考慮しているか
- [ ] レスポンシブ対応できているか
- [ ] 各ブラウザで動作確認したか

## 参考資料

公式ドキュメントや信頼できる記事へのリンク:

- [MDN Web Docs](https://developer.mozilla.org/)
- [W3C仕様](https://www.w3.org/)
- [Google Web Fundamentals](https://developers.google.com/web)
```

## 📁 ファイル構成

```
docs/
├── index.md                 # トップページ
├── rules/                   # ルール集（ここを主に編集）
│   ├── common.md           # 共通ルール
│   ├── directory-file.md   # ディレクトリ・ファイル
│   ├── html.md             # HTML制作ルール
│   ├── css.md              # CSS制作ルール
│   ├── javascript.md       # JavaScript制作ルール
│   ├── images.md           # 画像制作ルール
│   └── checklist.md        # チェックリスト
└── .vitepress/
    └── config.ts           # サイト設定（サイドバー等）
```

#### サイドバーへの追加

新規ファイルを作成したら、`docs/.vitepress/config.ts` の `sidebar` セクションに追加:

```typescript
sidebar: {
  '/rules/': [
    {
      text: 'Web制作ルール',
      items: [
        { text: '共通ルール', link: '/rules/common' },
        { text: 'ディレクトリ・ファイルルール', link: '/rules/directory-file' },
        { text: 'HTML制作ルール', link: '/rules/html' },
        { text: 'CSS制作ルール', link: '/rules/css' },
        { text: 'JavaScript制作ルール', link: '/rules/javascript' },
        { text: '画像制作ルール', link: '/rules/images' },
        { text: 'アクセシビリティ', link: '/rules/accessibility' }, // ← 新規追加例
      ]
    }
  ]
}
```

**順序**: 関連性の高いものを近くに配置。

### 4. ローカルで確認

**必須チェック**: PRを出す前に必ず以下を確認してください。

```bash
# 開発サーバーを起動
npm run dev
# → http://localhost:5173 でプレビュー

# 本番ビルドテスト（エラーがないか確認）
npm run build

# ビルド結果をプレビュー
npm run preview
```

**確認項目**:

- [ ] **サイドバー**: 新規ページが表示されるか
- [ ] **リンク**: 内部リンクが切れていないか
- [ ] **コードブロック**: シンタックスハイライトが正しいか
- [ ] **画像**: 画像が表示されるか（相対パス確認）
- [ ] **レスポンシブ**: モバイル表示が崩れていないか
- [ ] **検索**: 検索機能で見つかるか（ビルド後）
- [ ] **誤字脱字**: VS Codeのスペルチェック等を活用

### 5. コミット

意味のある単位でコミットします。

```bash
git add docs/rules/react-hooks.md mkdocs.yml
git commit -m "feat: React Hooks のルールを追加"
```

**コミットメッセージ規約**（Conventional Commits）:

```
<type>: <subject>

[optional body]

[optional footer]
```

| Type | 説明 | 例 |
|------|------|----|
| `feat` | 新規ルール追加 | `feat: BEM命名規則を追加` |
| `fix` | 誤字・リンク修正 | `fix: HTML例のタグ閉じ忘れ修正` |
| `docs` | サイト構成変更 | `docs: サイドバー順序を変更` |
| `improve` | 既存ルール改善 | `improve: CSS例をより実践的に` |
| `chore` | ビルド・設定変更 | `chore: VitePress 1.1.0に更新` |

**Good Examples**:
```bash
git commit -m "feat: CSS Grid レイアウトルールを追加"
git commit -m "fix: 画像最適化ガイドのリンク切れ修正"
git commit -m "improve: JavaScript命名規則に具体例を追加 (#15)"
```

**Bad Examples**:
```bash
git commit -m "update"  # ❌ 何を更新したか不明
git commit -m "色々修正"  # ❌ 英語推奨
git commit -m "WIP"  # ❌ 作業中はコミットしない
```

### 6. Pull Request を作成

GitHub にプッシュして Pull Request を作成します。

```bash
git push origin feature/add-bem-naming
```

**PRタイトル例**:
```
✅ feat: BEM命名規則をCSS制作ルールに追加
✅ fix: HTML制作ルールの誤字修正
✅ improve: JavaScript例をより実践的に改善
❌ 更新  # 何を更新したか不明
❌ fix  # 何を修正したか不明
```

**PR説明テンプレート**:
```markdown
## 📝 変更内容

BEM（Block Element Modifier）命名規則を追加しました。

## 🎯 目的

CSS命名の統一性を高め、保守性を向上させる。

## 📋 変更ファイル

- `docs/rules/css.md`: BEMセクション追加
- `docs/.vitepress/config.ts`: （変更なし）

## ✅ チェックリスト

- [x] `npm run dev` で動作確認
- [x] `npm run build` が成功
- [x] リンク切れなし
- [x] 誤字脱字チェック済み
- [x] ルールテンプレートに従っている
- [x] 実践的なコード例を含む

## 📷 スクリーンショット

（該当する場合、プレビュー画像を添付）

## 🔗 関連Issue

Closes #15

## 📌 レビュー観点

- BEM方式の説明が正確か
- 例が実践的か
- 他のCSS命名規則との整合性
```

### 7. レビューと修正

レビュアーからフィードバックがあった場合は、修正してプッシュします。

```bash
# 修正後
git add .
git commit -m "fix: レビュー指摘事項を修正"
git push origin feature/add-react-hooks-rule
```

### 8. マージ

承認されたら、main ブランチにマージされます。マージ後、GitHub Actions が自動的にサイトをデプロイします。

## ✅ レビュー基準

Pull Request は以下の観点でレビューされます：

### 📖 内容の質

- [ ] **明確性**: ルールが具体的で理解しやすいか
- [ ] **実践性**: 実プロジェクトで使える内容か
- [ ] **説得力**: 理由が納得できるものか
- [ ] **網羅性**: 例外ケースも考慮されているか
- [ ] **整合性**: 既存ルールと矛盾していないか

### ✍️ 文章・表現

- [ ] **正確性**: 誤字脱字がないか
- [ ] **トーン**: 統一されたスタイルか（です・ます調）
- [ ] **用語**: 専門用語に説明があるか
- [ ] **構成**: テンプレートに沿っているか
- [ ] **可読性**: 見出し・箇条書きで読みやすいか

### 💻 技術・実装

- [ ] **ビルド**: `npm run build` が成功するか
- [ ] **リンク**: 内部リンク・外部リンクが有効か
- [ ] **コード**: シンタックスハイライトが正しいか
- [ ] **画像**: 画像パスが正しく、表示されるか
- [ ] **検索**: ビルド後に検索で見つかるか

### 🎨 コード例の質

- [ ] **実践性**: 実際に使える例か（架空すぎないか）
- [ ] **Good/Bad**: 良い例・悪い例の両方があるか
- [ ] **説明**: なぜGood/Badなのか理由が添えられているか
- [ ] **動作**: コピペして動くコードか（可能な限り）

## 🤔 よくある質問

### Q: どのくらいの粒度でルールを作るべきですか？

**A**: 1つのルールは1つの明確な原則に焦点を当てるべきです。例：

- ✅ Good: 「CSSクラス命名規則」「HTML意味付けタグ」を別々に
- ❌ Bad: 「フロントエンド全般のルール」を1ページに詰め込む

### Q: 小さな修正（誤字など）でもPRが必要ですか？

**A**: はい、mainブランチ保護のため、どんな小さな変更でもPR必須です。

軽微な修正の場合:
```bash
git checkout -b fix/typo-in-css
# 修正
git commit -m "fix: CSS制作ルールの誤字修正"
git push origin fix/typo-in-css
# PR作成（レビュー後すぐマージ可能）
```

### Q: 特定のプロジェクトだけのルールも追加できますか？

**A**: はい。ただし適用範囲を明記してください：

```markdown
> ⚠️ **適用範囲**: このルールはECサイトプロジェクトのみで使用
```

### Q: 既存のルールに異議がある場合は？

**A**: Issue で議論してください。建設的なフィードバック大歓迎です。

```markdown
タイトル: [議論] CSS命名規則にスネークケースを許可すべきか

ラベル: discussion

（議論内容）
```

### Q: レビューはどのくらいで返ってきますか？

**A**: 目安は2営業日以内ですが、緊急の場合はSlack等で連絡してください。

### Q: 承認後、自分でマージしていいですか？

**A**: はい。GitHub Actionsのビルドが✅になっていれば、承認後すぐマージOKです。

## 📞 サポート

質問や不明点がある場合は、以下の方法でお問い合わせください：

- **GitHub Issues**: 一般的な質問や提案
- **Pull Request のコメント**: 特定の変更に関する質問

---

あなたの貢献を心よりお待ちしています！🎉
