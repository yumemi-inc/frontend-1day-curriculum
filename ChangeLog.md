# Change Log

## haru (4f5abfded6a25d25973c4f729c8fdd9f01d9e2fa)

- 伸び代のある箇所にコメントを記載

## kensiiwasaki (8761dbb4fc9dfbb693537134b2eaef35038c302a)

- 伸び代のある箇所にコメントを記載

## kensiiwasaki (b04df96c836f1374971719e6788c52d2da9f33b2)

フォーマッター設定

- `.prettierrc` に設定を追加
- `.eslintrc` にあるフォーマットルールを削除
- ファイルにフォーマットをかけた

## haru (32c26750fcd029c249fcf83ba1ea71ff39f50f2c)

スタイルのリファクタリング

- `App.css`
  - `*` をまとめた
  - `!important` を消した
  - `.container-title` を `.container .title` のように長いクラス名を分割
  - `gap` などのパラメータが冗長だったので簡略化
- `App.tsx`
  - `App.css` に合わせて修正

## haru (758915f54b4d68da25473289bb47f5585f610bf4)

api 周りのリファクタリング

- `popAPI.tsx`、`prefAPI` を関数に書き換え
- ファイル名を `fetchPopulationAPI.tsx`、`getPrefectureAPI.tsx` に変更

## kensiiwasaki (517a58d9e3cb299b9d34c9c24a3ce398be8dd6b9)

チェックボックスコンポーネントの改修

- `ChkBx01.tsx` を削除
- `CheckBox.tsx` を作成して、`App.tsx` 内のチェックボックスをコンポーネントとして切り出し
- チェックボックスを `div` ではなく `ul`、`li` で並べるようにした
- `eslint` の更新
