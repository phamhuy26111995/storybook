export interface CheckboxProps {
    /**
     * Nhãn hiển thị bên cạnh checkbox
     */
    label: string;
    /**
     * Trạng thái checked của checkbox
     */
    isChecked: boolean;
    /**
     * Sự kiện được gọi khi trạng thái thay đổi
     */
    onChange: () => void;
    /**
     * Trạng thái disabled
     */
    disabled?: boolean;
  }
  
  export const Checkbox: React.FC<CheckboxProps> = ({
    label,
    isChecked,
    onChange,
    disabled = false,
  }) => {
    return (
      <label className={`checkbox-container ${disabled ? 'disabled' : ''}`}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          disabled={disabled}
        />
        <span className="checkmark"></span>
        <span className="label">{label}</span>
      </label>
    );
  };