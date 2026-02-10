# Contributing to Coding Guidelines

コーディングガイドラインへの貢献をご検討いただき、ありがとうございます！

このドキュメントでは、ガイドラインの改善や新規ルールの追加方法について説明します。

## 貢献の流れ（概要）

```
Issue作成 → ブランチ作成 → ローカル編集 → コミット → PR作成 → レビュー → マージ → 自動デプロイ
```

## 貢献の種類

以下のような貢献を歓迎します：

- 新しいルールの追加: Web制作（HTML/CSS/JavaScript）のベストプラクティスや規約の提案
- 既存ルールの改善: より明確な説明や実践的な例の追加
- 誤字脱字の修正: タイポや文法の修正
- コード例の改善: 実プロジェクトで使える具体例の追加
- チェックリストの拡充: 制作時の確認項目の追加・改善

## 1. ドキュメント規約

### 1.1 用語の統一

- 「コーディングガイドライン」で統一（コーディング規約は使わない）
- 「Issue」「Pull Request (PR)」で統一
- 文体: です・ます調

### 1.2 外部リンクポリシー

必ずMarkdown形式で記載する。

- 許可: 公式ドキュメント、広く認知された技術記事
- 推奨: MDN Web Docs、WHATWG仕様、W3C、Google Web Fundamentals
- 非推奨: 個人ブログ、古い記事（2年以上前。ただし、公式仕様書や不変の原則は除く）

### 1.3 Markdown記法

VitePressの拡張記法を活用できます。

::: tip
補足情報やヒントを記載
:::

::: warning
注意事項を記載
:::

::: details クリックで詳細を表示
詳細な説明を折りたたみで記載
:::

詳細は[VitePress Markdownガイド](https://vitepress.dev/ja/guide/markdown)を参照。

### 1.4 開発ツール設定

コードフォーマットを統一するため、VS Codeで以下を推奨：

1. 拡張機能をインストール
   - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
2. VS Code設定を有効化（設定 > `Editor: Format On Save` → ON）

### 1.5 画像管理

- 保存先: `docs/public/images/`
- ファイル名: ケバブケース（例: `example-screenshot.png`）
- 参照: `![altテキスト](/images/example-screenshot.png)`
- サイズ: 横幅800px以下を推奨

## 2. クイックスタート

### 2.1 前提条件

- このリポジトリへのpush権限がある（社内メンバー）
- mainブランチは保護されており、featureブランチを使ったPR運用
- fork運用は行わない

### 2.2 必要な環境

- Node.js: 18以上（推奨: 20 LTS）
- パッケージマネージャー: npm
- バージョン管理: Volta/asdf/nvmなどを推奨

### 2.3 セットアップ手順

```bash
# 1. リポジトリをクローン（初回のみ）
git clone <YOUR_REPO_URL>
cd wan55-coding-guideline

# 2. 依存パッケージをインストール
npm ci

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

## 3. mainブランチ保護について

::: warning
mainブランチは保護されており、直接pushできません。必ずPull Requestを経由してマージしてください。
:::

### 3.1 保護設定

- Pull Request必須
- 1人以上の承認が必要
- GitHub Actionsのビルド成功必須
- 古いレビュー承認は無効化

これにより、常に品質の高いドキュメントが保たれます。

## 4. 貢献の流れ

### 4.1 Issue を作成（推奨）

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

### 4.2 ブランチを作成

mainブランチから作業用ブランチを作成します。

```bash
git checkout main
git pull origin main
git checkout -b feature/add-react-hooks-rule
```

**ブランチ命名規則** (Conventional Commits準拠):

| プレフィックス | 用途 | 例 |
|--------------|------|----|
| `feature/` | 新規ルール・機能追加 | `feature/add-bem-naming` |
| `fix/` | 誤字脱字・リンク切れ修正 | `fix/typo-in-html-rules` |
| `docs/` | ドキュメント構成変更 | `docs/update-sidebar` |
| `refactor/` | 既存ルールの再構成 | `refactor/css-structure` |
| `chore/` | ビルド・設定変更 | `chore/update-vitepress` |

**命名のコツ**:
- 短く具体的に（30文字以内推奨）
- 小文字とハイフンのみ使用
- Issue番号参照: `feature/23-add-bem`

**運用形態**: このリポジトリは社内用のため、forkではなくブランチ運用を行います。

### 4.3 ドキュメントを編集

#### 新規ルールを追加する場合

**配置場所**: `docs/rules/` 配下

以下のテンプレートに従ってください：

```markdown
# ルール名（明確で簡潔に）

## 結論

何をすべきか、端的に記載。箇条書き推奨。

**適用範囲**: HTML/CSS/JavaScript（該当する技術を記載）  
**強制度**: MUST（必須）/ SHOULD（推奨）/ MAY（任意）  
**自動検出**: ESLint / markdownlint / 不可  
**対象ブラウザ**: Browserslistに従う / IE11必須など

- [推奨] こうする
- [非推奨] こうしない
- [注意] こういう場合はこう

## 理由

なぜこのルールが必要か、背景や問題点を説明。
過去に発生したトラブル事例やコードレビューで頻出した指摘事項を具体的に書くと他メンバーの納得感が得られやすくなります。

### メリット1: 保守性向上

具体的にどう保守性が上がるか。

### メリット2: バグ防止

防げるバグの具体例。

### メリット3: パフォーマンス

（該当する場合）

## 例

**実際のプロジェクトで使える具体例を記載**。

### Good（推奨）

```html
<!-- 良い例: 説明を添える -->
<div class="card">
  <h2 class="card__title">タイトル</h2>
  <p class="card__description">説明文</p>
</div>
```

### Bad（非推奨）

```html
<!-- 悪い例: なぜダメかを説明 -->
<div class="c1">
  <h2 class="t">タイトル</h2>
  <p class="d">説明文</p>
</div>
```

**問題点**: クラス名が短すぎて意味不明。保守性が低い。

### 例外的に許容されるケース

```html
<!-- 外部ライブラリのクラス名は変更不可 -->
<div class="swiper-container">
  <!-- ライブラリ仕様に従う -->
</div>
```

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

外部リンクポリシーに従って記載（詳細は「ドキュメント規約」参照）。

- [MDN Web Docs - HTML](https://developer.mozilla.org/ja/docs/Web/HTML)
- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/)
- [Google Web Fundamentals](https://developers.google.com/web/fundamentals)


#### ファイル構成

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

新規ファイルを作成したら、`docs/.vitepress/config.ts` のサイドバーに追加します。

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

### 4.4 ローカルで確認

::: warning 必須チェック
PRを出す前に必ず以下を確認してください。
:::

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

### 4.5 コミット

意味のある単位でコミットします。

```bash
git add docs/rules/accessibility.md docs/.vitepress/config.ts
git commit -m "feat: アクセシビリティルールを追加"
```

**コミットメッセージ規約**（Conventional Commits）:

```
<type>: <subject>

[optional body]

[optional footer]
```

| Type | 説明 | 例 |
|------|------|----|
| `feat` | 新規ルール・機能追加 | `feat: BEM命名規則を追加` |
| `fix` | 誤字・リンク修正 | `fix: HTML例のタグ閉じ忘れ修正` |
| `docs` | ドキュメント構成変更 | `docs: サイドバー順序を変更` |
| `refactor` | 既存ルールの再構成 | `refactor: CSS例をより実践的に` |
| `chore` | ビルド・設定・依存更新 | `chore: VitePress 1.1.0に更新` |
| `style` | フォーマットのみ変更 | `style: インデント修正` |

**Good Examples**:
```bash
git commit -m "feat: CSS Grid レイアウトルールを追加"
git commit -m "fix: 画像最適化ガイドのリンク切れ修正"
git commit -m "refactor: JavaScript命名規則に具体例を追加 (#15)"
```

**Bad Examples**:
```bash
git commit -m "update"  # NG: 何を更新したか不明
git commit -m "色々修正"  # NG: 英語推奨
git commit -m "WIP"  # NG: 作業中はコミットしない
```

### 4.6 Pull Requestを作成

GitHubにプッシュしてPull Requestを作成します。

::: tip
PR作成画面を開くと、標準のテンプレートが自動で読み込まれます。必要事項を記入して送信してください。
:::

```bash
git push origin feature/add-bem-naming
```

**PRタイトル例**:
```
Good: feat: BEM命名規則をCSS制作ルールに追加
Good: fix: HTML制作ルールの誤字修正
Bad: 更新  # 何を更新したか不明
Bad: fix  # 何を修正したか不明
```

**PR説明テンプレート**:
```markdown
## 変更内容

BEM（Block Element Modifier）命名規則を追加しました。

## 目的

CSS命名の統一性を高め、保守性を向上させる。

## 📋 変更ファイル

- `docs/rules/css.md`: BEMセクション追加
- `docs/.vitepress/config.ts`: （変更なし）

## チェックリスト

**手動確認**:
- [x] `npm run dev` で動作確認
- [x] `npm run build` が成功
- [x] ルールテンプレートに従っている
- [x] 実践的なコード例を含む

**自動確認** (GitHub Actions):
- [x] ビルド成功（Actions未整備の項目は手動確認に含める）

## 📷 スクリーンショット

（該当する場合、プレビュー画像を添付）

## 🔗 関連Issue

Closes #15

## 📌 レビュー観点

- BEM方式の説明が正確か
- 例が実践的か
- 他のCSS命名規則との整合性
```
> **ヒント**: GitHubにIssue/PRテンプレートを設定すると、上記フォーマットが自動入力されます。  
> 詳細は [.github/ISSUE_TEMPLATE/](https://docs.github.com/ja/communities/using-templates-to-encourage-useful-issues-and-pull-requests) を参照。
### 4.7 レビューと修正

レビュアーからフィードバックがあった場合は、修正してプッシュします。

```bash
# 修正後
git add .
git commit -m "fix: レビュー指摘事項を修正"
git push origin feature/add-accessibility-rule
```

**プレビュー環境**: PR作成後、GitHub Actionsが自動的にビルドを実行します。ビルドが成功すれば、レビュアーは本番と同じ環境で変更内容を確認できます。

> **将来的に**: Vercel Preview Deploysなどを導入すれば、PR毎に一時的なプレビューURLが自動生成され、レビューが更に効率化されます。

### 4.8 マージ

承認されたら、mainブランチにマージされます。マージ後、GitHub Actionsが自動的にサイトをデプロイします。

## 5. レビュー基準

Pull Requestは以下の観点でレビューされます。

### 5.1 内容の質

- [ ] **明確性**: ルールが具体的で理解しやすいか
- [ ] **実践性**: 実プロジェクトで使える内容か
- [ ] **説得力**: 理由が納得できるものか
- [ ] **網羅性**: 例外ケースも考慮されているか
- [ ] **整合性**: 既存ルールと矛盾していないか

### 5.2 文章・表現

- [ ] **正確性**: 誤字脱字がないか
- [ ] **トーン**: 統一されたスタイルか（です・ます調）
- [ ] **用語**: 専門用語に説明があるか
- [ ] **構成**: テンプレートに沿っているか
- [ ] **可読性**: 見出し・箇条書きで読みやすいか

### 5.3 技術・実装

- [ ] **ビルド**: `npm run build` が成功するか
- [ ] **リンク**: 内部リンク・外部リンクが有効か
- [ ] **コード**: シンタックスハイライトが正しいか
- [ ] **画像**: 画像パスが正しく、表示されるか
- [ ] **検索**: ビルド後に検索で見つかるか

### 5.4 コード例の質

- [ ] **実践性**: 実際に使える例か（架空すぎないか）
- [ ] **Good/Bad**: 良い例・悪い例の両方があるか
- [ ] **説明**: なぜGood/Badなのか理由が添えられているか
- [ ] **動作**: コピペして動くコードか（可能な限り）
- [ ] **例外ケース**: 許容される例外も記載されているか

## 6. よくある質問

### Q: どのくらいの粒度でルールを作るべきですか？

**A**: 1つのルールは1つの原則に焦点を当てる。例：

- Good: 「CSSクラス命名規則」「HTML意味付けタグ」を別々に
- Bad: 「フロントエンド全般のルール」を1ページに詰め込む

### Q: 小さな修正（誤字など）でもPRが必要ですか？

**A**: はい。mainブランチへの直接pushは禁止です。

### Q: 特定のプロジェクトだけのルールも追加できますか？

**A**: 可能です。ルール冒頭に `**適用範囲**: ECサイトのみ` と明記してください。

### Q: 既存のルールに異議がある場合は？

**A**: Issueで議論を開始し、ラベル `discussion` を付けて提案してください。

### Q: レビューはどのくらいで返ってきますか？

**A**: 2営業日以内を目安としています。緊急時はSlackで連絡してください。

### Q: 承認後、自分でマージしていいですか？

**A**: はい。GitHub Actionsが成功していれば即座にマージ可能です。

## 7. サポート

質問や不明点がある場合は、以下で連絡してください。

- GitHub Issue: 一般的な質問や提案
- Pull Requestコメント: 特定の変更に関する質問
- Slack: 緊急時や運用相談

## 8. 参考資料

- [VitePress公式ドキュメント](https://vitepress.dev/ja/)
- [VitePress Markdownガイド](https://vitepress.dev/ja/guide/markdown)
- [Conventional Commits](https://www.conventionalcommits.org/ja/)
- [GitHub Flow](https://docs.github.com/ja/get-started/quickstart/github-flow)

---

あなたの貢献をお待ちしています！
