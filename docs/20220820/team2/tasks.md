# チーム 2 のタスク

## index.tsx

- 特になし

## App.tsx

[x] **checkedPrefCode, checkedPrefCodes をまとめられそう**
[] options をコンポーネント外に出して、categories に大量に並んでいるものがライブラリ的には不要そう(範囲指定ができそう)
[x] `<label>` 内のコードをコンポーネント化
[] 関数で不要な `{}` がある
[] `handleChange` を `useCallback` で囲みたい...が、使う側で関数になってしまっている

## App.css

[x] ベンタープリフィクス(L45-47, 104, 105, 120, 121)が不要かもしれない
[] stylelint をかけたい
[] L1-9 がなんでわかれているの？
[] CSS in JS を使った方が見やすい

## components/ChkBx01.tsx

[x] **App.tsx で利用できるようにする**

## popAPI.tsx

[] class 記法になっているので他と合わせる
[] class 名がわかりづらいので、命名を変えたい
[] components/以下にあるので ChkBx01 と分けたい
[] L12 の `then` 部分がややこしいので可読性をあげたい
[] API key をベタ書きしているので環境変数に入れたい

## updateSelectedPrefData.ts

[x] 命名が気になる
[] 設計が気になる
[x] return が分かれている
[] `Immer.js` を利用できるかもしれない
[] 使う側目線でどう利用したいかを定義しなおして、作り直す
