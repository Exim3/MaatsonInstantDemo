const GroupField: React.FC<{
  label: string;
  name: string;
  value: string | number;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  placeholder: string;
  type: string;
  style?: string;
  inputStyle?: string;
  labelStyle?: string;
  selectValue?: string;

  options?: { label: string; value: string | number }[];
  optionalTag?: boolean;
}> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type,
  style,
  labelStyle,
  inputStyle,
  optionalTag,
  options,
  selectValue,
}) => {
  return (
    <div className={`flex flex-col gap-2 ${style}`}>
      <label htmlFor={name} className={`flex items-center gap-2 ${labelStyle}`}>
        {label}{" "}
        {optionalTag && (
          <span className="text-xs text-neutral-300">(-optional)</span>
        )}
      </label>

      {type === "textArea" ? (
        <textarea
          id={name}
          value={value}
          placeholder={placeholder}
          className={`input ${inputStyle}`}
          onChange={onChange}
        />
      ) : type === "dropdown" ? (
        <select
          name={name}
          id={name}
          value={value}
          className={`input text-neutral text-xs focus:bg-white ${inputStyle}`}
          onChange={onChange}
        >
          {options && options.length > 0 ? (
            <>
              <option value="" disabled>
                {selectValue}
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </>
          ) : null}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          value={value}
          placeholder={placeholder}
          className={`input ${inputStyle}`}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default GroupField;
