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

## haru (9d1dca483011e50e270eeb159ca8154bda01c5b1)

makeNewStates の討伐

- [ここ](https://github.com/yumemi-inc/frontend-1day-curriculum/tree/intern_20220820_team5/src#makenewstatests) を見るとわかりやすい
- フローを「人口情報データ取得」->「チェックデータの更新」に分け、それぞれを関数として分離

## kensiiwasaki (64d44117d6a61d4893f443b7740912e9763f959e, 64d44117d6a61d4893f443b7740912e9763f959e)

eslint で吐かれている場所の修正
