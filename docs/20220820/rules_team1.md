# 順番

1. namnium
2. まえ
3. きーす

# 時間

20 分を目処にキリが良いところで

# やることリスト

## namnium 改善したい点

1. API キーが GitHub で公開されているのを.env に
2. strictNullChecks をオンにする
3. filter と map が分かれてる地帯を flatMap に統一 -> !を使わなくてよくなる & 早期リターンのほうが見やすい
4. prefAry, checkedPrefCodes, loadedPrefData を全部 State に統一する <- 状態を一致させたい
5. 10 年後を考えると /_ API が返してくる年度はこれだった _/のハードコードは直したい
6. makeNewStates: 改善して欲しそう
7. グラフの見た目に関するオプション(chartOptions)の位置を変えたい
8. API が返す値は何も信頼できないのでバリデーターをはさみたい

## rmaejima

- API KEY が漏れている
- fetch がクラスで定義されているので util 関数か何かに切り出したい
- API の BaseUrl を定数化したい
- props 以外の型宣言をまとめるフォルダ`types/`とかがあると良さそう
- ChkBx01 定義されているが使われていないので利用（ついでにコンポーネント名変更）
- graphData はメモ化できそう
- prettier の設定ファイルを追加したい
- import sorter 入れたい
- グラフの設定をハードコーディングしているので、fetch した情報から初期化したい
- tsconfig に baseUrl を追加したい
- タイトルは<h1>に置き換えたい
- 型定義（API レスポンス周り）

## 統合

14:00 - 16:30

### must

1. API キーを.env に移す
2. API の型定義
3. 定義した型を利用する
4. fetch がクラスで定義されているので util 関数か何かに切り出したい -> api に切り出して関数化
5. categories のハードコードを fetch に
6. グラフコンポーネント切り出し
7. prefAry, checkedPrefCodes, loadedPrefData を全部 State に統一する
8. makeNewStates: 改善して欲しそう

### better

1. API のバリデーター
2. グラフの見た目に関するオプション(chartOptions)の位置を変えて関数にする -> graph コンポーネントとして分ける
3. グラフの見た目に関するオプション(chartOptions)の位置を変えて関数にする -> graph コンポーネントとして分ける
