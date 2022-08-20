import { Prefecture } from "../types/resas"

export type PrefectureCheckboxProps = {
  prefecture: Prefecture
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

// 都道府県1つ分のチェックボックス
export const PrefectureCheckbox: React.FC<PrefectureCheckboxProps> = ({
  prefecture,
  onChange,
}) => {
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
