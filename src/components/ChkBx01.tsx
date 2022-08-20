import { Prefecture } from "../types/resas"

export type ChkBx01Props = {
  prefecture: Prefecture
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

// 都道府県1つ分のチェックボックス
export const ChkBx01: React.FC<ChkBx01Props> = ({ prefecture, onChange }) => {
  return (
    <label key={prefecture.prefCode} className="app-prefectures-list">
      <input
        className="app-prefectures-list-checkbox"
        type="checkbox"
        onChange={onChange}
      />
      <span className="app-prefectures-name">{prefecture.prefName}</span>
    </label>
  )
}
