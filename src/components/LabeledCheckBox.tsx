export type LabeledCheckBoxProps = {
  label: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

// 共通のチェックボックスコンポーネント
export const LabeledCheckBox: React.FC<LabeledCheckBoxProps> = ({ label, onChange }) => {
  return (
    <label>
      <input
        className='common-checkbox'
        type='checkbox'
        onChange={onChange}
      />
      <span className='common-checkbox-label-text'>{label}</span>
    </label>
  )
}