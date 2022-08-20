import styles from "./PrefectureCheckbox.module.css"

export type PrefectureCheckboxProps = {
  name: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  defaultChecked?: boolean;
};

// 都道府県1つ分のチェックボックス
export const PrefectureCheckbox: React.FC<PrefectureCheckboxProps> = ({
  name, onChange, checked, defaultChecked,
}) => {
  return (
    <label className={styles["prefectures-list"]}>
      <input
        className={styles["prefectures-list-checkbox"]}
        type="checkbox"
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChange}
      />
      <span className={styles["prefectures-name"]}>{name}</span>
    </label>
  )
}
