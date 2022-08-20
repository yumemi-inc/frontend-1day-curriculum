import { useCallback } from "react"

export type PrefectureCheckBoxProps = {
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

// 都道府県1つ分のチェックボックス
export const PrefectureCheckBox: React.FC<PrefectureCheckBoxProps> = (
  props: PrefectureCheckBoxProps,
) => {
  const handleChange = useCallback(
    (event: any) => {
      props.onChange(event.currentTarget.checked)
    },
    [props.onChange],
  )
  return (
    <label className="app-prefectures-list">
      <input
        type="checkbox"
        checked={props.checked}
        onChange={handleChange}
        className="app-prefectures-list-checkbox"
      />
      <span className="app-prefectures-name">{props.name}</span>
    </label>
  )
}
