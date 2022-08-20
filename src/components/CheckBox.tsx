export type CheckBoxProps = {
  prefName: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const CheckBox: React.FC<CheckBoxProps> = ({ prefName, onChange }) => {
  return (
    <label>
      <input type="checkbox" onChange={onChange} className="checkbox" />
      <span className="name">{prefName}</span>
    </label>
  );
};
