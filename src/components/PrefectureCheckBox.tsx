

export type PrefectureCheckBoxProps = {
  onChange: (checked: boolean, prefCode: number) => void
  prefCode: number
  prefName: string
}

// 都道府県1つ分のチェックボックス
export const PrefectureCheckBox: React.FC<PrefectureCheckBoxProps> = props => {
  const {onChange, prefCode, prefName} = props

  return <label className="app-prefectures-list">
    <input
      className="app-prefectures-list-checkbox"
      type="checkbox"
      onChange={(e) => {
        onChange(e.target.checked, prefCode)
      }}/>
    <span className="app-prefectures-name">{prefName}</span>
  </label>
}