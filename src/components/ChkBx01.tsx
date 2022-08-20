import { useCallback } from "react"

export type ChkBx01Props = {
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

// 都道府県1つ分のチェックボックス
export const ChkBx01: React.FC<ChkBx01Props> = (props: ChkBx01Props) => {
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
