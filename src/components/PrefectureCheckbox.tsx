import { useState } from "react"

export type PrefectureCheckboxProps = {
  name: string
}

// 都道府県1つ分のチェックボックス
export const PrefectureCheckbox: React.FC<PrefectureCheckboxProps> = () => {
  const [checked, setChecked] = useState(false)
  return <label>
    <input type="checkbox" checked={checked} onChange={() => setChecked(bool => !bool)} />
    <span>愛知県</span>
  </label>
}
