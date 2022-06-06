import { useState } from "react"

export type ChkBx01Props = {
}

// 都道府県1つ分のチェックボックス
export const ChkBx01: React.FC<ChkBx01Props> = () => {
  const [checked, setChecked] = useState(false)
  return <label>
    <input type="checkbox" checked={checked} onChange={() => setChecked(bool => !bool)}/>
    <span>愛知県</span>
    <span>{checked ? "チェックされている" : "チェックされていない"}</span>
  </label>
}