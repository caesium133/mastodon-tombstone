# mastodon-tombstone

クローズしたマストドンインスタンスのドメイン向けに、すべてのリクエストに対して 410 を返すサーバープログラムです。
Cloudflare Worker で動かすことを想定しています。

## ローカル検証

```
npx wrangler dev
```

## Cloudflare Worker で公開

###  Worker の作成
  - Cloudflare Dashboard → Workers & Pages → Create application
  - Import a repository を選択 → GitHub を接続 → 対象リポジトリを選択

### Build/Deploy コマンド設定
  - Deploy command に npx wrangler deploy を指定

### カスタムドメイン設定
  - デプロイした Worker の概要ページから「設定」をクリック
  - 「ドメインとルート」から「追加」をクリック
  - 「カスタムドメイン」を選択し、ドメイン名を入力