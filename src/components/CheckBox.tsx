export type CheckBoxProps = {
  label: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const CheckBox: React.FC<CheckBoxProps> = ({ label, onChange }) => {
  return <label className="app-prefectures-list">
    <input className='app-prefectures-list-checkbox' type="checkbox" onChange={onChange}/>
    <span className='app-prefectures-name'>{ label }</span>
  </label>
}