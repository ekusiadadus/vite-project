# Vite Embedded Component JS

このリポジトリでは、Vite で Embedded Component JS を作成するためのサンプルコードを公開しています。

`src/components/Button` ディレクトリで、ボタンコンポーネントを作成しています。
このコンポーネントは、引数を受け取り、それにアラートを表示するだけのものです。

## デプロイ

```shell
$ npm run build && mv dist/button-id.umd.cjs docs/button-id.umd.cjs
```

このリポジトリは、GitHub Pages の機能で docs 配下のファイルを公開しています。
そのため、`src` 等は適宜変更してください。

静的なファイルで、このコンポーネントを呼び出すには

```js
<script
  id="test"
  type="text/javascript"
  async
  src="https://ekusiadadus.github.io/vite-project/button-id.umd.cjs"
></script>
<script type="text/javascript">
  const script = document.getElementById("test");
  script.addEventListener("load", () => {
    globalThis.run({ id: "test" });
  });
</script>
```

上のスクリプトを埋め込むと使えます。

## ローカルでの動作確認

```shell
$ npm run dev
```

## ビルド

```shell
$ npm run build
```
