# Coding Guidelines

[![Deploy to GitHub Pages](https://github.com/<USERNAME>/<REPO>/actions/workflows/deploy.yml/badge.svg)](https://github.com/<USERNAME>/<REPO>/actions/workflows/deploy.yml)

コーディング規約とベストプラクティスをまとめた静的サイトです。VitePress で構築され、GitHub Pages で公開されています。

## 📖 公開URL

**🔗 https://\<USERNAME\>.github.io/\<REPO\>/**

> **Note**: `<USERNAME>` と `<REPO>` は実際のGitHubユーザー名とリポジトリ名に置き換えてください。

## 🎯 目的

このリポジトリは、以下の目的で運用されています：

- **社内コーディング規約の統一**: チーム内で参照できる共通ガイドライン（必要に応じて委託先にも共有）
- **継続的な改善**: Pull Request ベースで誰でも提案・改善に参加可能
- **自動デプロイ**: main ブランチへのマージで自動的にサイトが更新される

## 🚀 ローカル起動方法

### 必要な環境

- Node.js 18 以上

### セットアップ手順

```bash
# 1. リポジトリをクローン
git clone https://github.com/<USERNAME>/<REPO>.git
cd <REPO>

# 2. 依存パッケージをインストール
npm install

# 3. 開発サーバーを起動
npm run dev
```

起動後、ブラウザで **http://localhost:5173** にアクセスしてください。

ファイルを編集すると、ブラウザが自動的にリロードされます。

## 📝 コントリビュート方法

このガイドラインへの改善提案は大歓迎です！

### 基本フロー

1. **Issue を作成**: 改善案や追加したいルールを提案
2. **ブランチを作成**: `feature/your-topic-name` など
3. **ドキュメントを編集**: `docs/` 配下のMarkdownファイルを修正
4. **Pull Request を作成**: わかりやすいタイトルと説明を記載
5. **レビュー**: チームでレビューし、承認後マージ
6. **自動デプロイ**: main にマージされると自動的にサイトが更新されます

### ルール追加のテンプレート

新しいルールを追加する際は、以下の構成を推奨します：

```markdown
# タイトル

## 結論
（何をすべきか、端的に）

## 理由
（なぜそのルールが必要か）

## 例
（良い例と悪い例）

## 例外
（このルールが適用されない特殊ケース）

## 自動化
（ESLint、Prettier などでどう強制するか）
```

詳しくは [CONTRIBUTING.md](CONTRIBUTING.md) を参照してください。

## 📁 ディレクトリ構成

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Pages デプロイワークフロー
├── docs/                      # ドキュメントソース（Markdown）
│   ├── .vitepress/
│   │   └── config.ts          # VitePress 設定ファイル
│   ├── index.md               # トップページ
│   ├── rules/                 # コーディング規約
│   │   ├── naming.md
│   │   ├── typescript.md
│   │   └── react.md
│   └── recipes/               # ベストプラクティス・パターン集
│       └── patterns.md
├── package.json               # Node.js プロジェクト設定
├── .gitignore
├── LICENSE
└── README.md                  # このファイル
```

## 🛠️ 技術スタック

- **静的サイトジェネレーター**: [VitePress](https://vitepress.dev/)
- **フレームワーク**: [Vue.js](https://vuejs.org/) (内部使用)
- **ホスティング**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 ビルドコマンド

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動（ホットリロード） |
| `npm run build` | 本番用ビルド |
| `npm run preview` | ビルドしたサイトをプレビュー |
| `npm run clean` | ビルド成果物を削除 |

## 🔧 GitHub Pages 設定

初回デプロイ時のみ、以下の手順が必要です：

1. GitHubリポジトリの **Settings** → **Pages** を開く
2. **Source** で「GitHub Actions」を選択
3. main ブランチにプッシュすると、自動的にデプロイが開始されます

## 📜 ライセンス

このプロジェクトは [MIT License](LICENSE) の下で公開されています。

## 🤝 サポート

質問や問題がある場合は、[Issues](https://github.com/<USERNAME>/<REPO>/issues) で報告してください。

---

**Made with ❤️ by WAN55**
