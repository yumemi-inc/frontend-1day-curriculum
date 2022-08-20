export type CheckBoxProps = {
  label: string
  checked: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const CheckBox: React.FC<CheckBoxProps> = ({ label, checked, onChange }) => {
  return <label>
    <input type="checkbox" checked={checked} onChange={onChange}/>
    <span>{ label }</span>
  </label>
}