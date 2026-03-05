function Input({ type, placeholder, value, onChange, label }) {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />
    </div>
  );
}

export default Input;