# Wan55 Coding Guidelines

[![Deploy to GitHub Pages](https://github.com/wan55-coding-guideline/actions/workflows/deploy.yml/badge.svg)](https://github.com/wan55-coding-guideline/actions/workflows/deploy.yml)

WAN55のWeb制作におけるコーディングガイドラインです。

## 📖 公開ドキュメント

**🔗 https://\<USERNAME\>.github.io/\<REPO\>/**

> **Note**: `<USERNAME>` と `<REPO>` は実際のGitHubユーザー名とリポジトリ名に置き換えてください。

## 🎯 このリポジトリについて

HTML/CSS/JavaScript を中心としたWeb制作のコーディングガイドラインを管理・公開しています。

### 目的

- 社内チームおよび協力会社との制作品質の統一
- ベストプラクティスの共有と継続的な改善
- 静的サイトとして公開し、誰でも参照可能に

### 運用方針

- 本リポジトリは社内専用（書き込み権限は社員のみ）
- 公開ドキュメントサイトは外部からも閲覧可能
- Pull Request ベースで誰でも提案・改善に参加可能

詳しくは [LICENSE](LICENSE) を参照してください。

## 🚀 クイックスタート

```bash
# リポジトリをクローン
git clone https://github.com/<USERNAME>/<REPO>.git
cd <REPO>

# 依存パッケージをインストール
npm ci

# 開発サーバーを起動
npm run dev
# → http://localhost:5173 でプレビュー
```

### 必要な環境

- Node.js 18以上
- npm（Node.jsに同梱）

## 📝 コントリビュート

ガイドラインへの改善提案を歓迎します。

詳細な貢献方法は **[CONTRIBUTING.md](CONTRIBUTING.md)** を参照してください。

### 簡単な流れ

1. Issue で提案内容を共有
2. ブランチを作成（`feature/your-topic`）
3. `docs/` 配下のMarkdownを編集
4. Pull Request を作成
5. レビュー → マージ → 自動デプロイ

## 📁 主なディレクトリ構成

```
docs/
├── rules/                     # コーディングルール
│   ├── common.md             # 共通ルール
│   ├── html.md               # HTML制作ルール
│   ├── css.md                # CSS制作ルール
│   ├── javascript.md         # JavaScript制作ルール
│   └── images.md             # 画像制作ルール
└── .vitepress/
    └── config.ts             # VitePress設定
```

## 🛠️ 技術スタック

- **静的サイトジェネレーター**: [VitePress](https://vitepress.dev/)
- **ホスティング**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📜 ライセンス

本リポジトリは社内専用のプロプライエタリライセンスです。詳細は [LICENSE](LICENSE) を参照してください。

---

**© 2026 WAN55**
