# 共通ルール

プロジェクト全体で適用される基本ルールを定めます。

## 文字コード・改行コード
- 文字コード: `UTF-8`（BOMなし）
- 改行コード: `LF`

`.gitattributes` で管理する([テンプレート](https://github.com/wan55-engineers/wan55-coding-guideline/blob/main/templates/.gitattributes)を参考に設定)。

## コードスタイル
- インデント: 2スペース（ソフトタブ）。タブ禁止
- ファイル末尾: 最終行は改行で終わる（final newline）

`.editorconfig` で管理する([テンプレート](https://github.com/wan55-engineers/wan55-coding-guideline/blob/main/templates/.editorconfig)を参考に設定)。

## バージョン管理（Git）
- 原則: 生成物はコミットしない（例: `node_modules/`, `*.log`, `.DS_Store`）
- 例外: `dist/` は差分抽出・公開・デプロイ要件がある場合に限りコミットを許可する
- 秘密情報はコミットしない（例: `.env`, 鍵ファイル）

`.gitignore` で管理する([テンプレート](https://github.com/wan55-engineers/wan55-coding-guideline/blob/main/templates/.gitignore)を参考に設定)