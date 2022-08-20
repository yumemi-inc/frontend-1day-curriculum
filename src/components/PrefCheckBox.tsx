import { ChangeEvent } from "react"

export type PrefCheckBoxProps = {
  name: string
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const PrefCheckBox = ({ name, checked, onChange }: PrefCheckBoxProps) => {
  return (
    <label className="app-prefectures-list">
      <input
        className="app-prefectures-list-checkbox"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="app-prefectures-name">{name}</span>
    </label>
  )
}