import { useState } from "react"
import styles from "./PrefectureCheckbox.module.css"

export type PrefectureCheckboxProps = {
  name: string;
};

// 都道府県1つ分のチェックボックス
export const PrefectureCheckbox: React.FC<PrefectureCheckboxProps> = () => {
  const [checked, setChecked] = useState(false)
  return (
    <label className={styles["prefectures-list"]}>
      <input
        className={styles["prefectures-list-checkbox"]}
        type="checkbox"
        checked={checked}
        onChange={() => setChecked((bool) => !bool)}
      />
      <span className={styles["prefectures-name"]}>愛知県</span>
    </label>
  )
}
