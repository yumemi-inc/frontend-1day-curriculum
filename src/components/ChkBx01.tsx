import { useState } from "react"

export type ChkBx01Props = {
}

// 都道府県1つ分のチェックボックス
// 伸び代：この省略名称微妙では？
export const ChkBx01: React.FC<ChkBx01Props> = () => {
  const [checked, setChecked] = useState(false)
  return <label>
    <input type="checkbox" checked={checked} onChange={() => setChecked(bool => !bool)}/>
    {/* 伸び代：愛知県専用チェックボックスわろた */}
    <span>愛知県</span>
  </label>
}