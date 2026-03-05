function Button({ text, onClick, variant = "primary", style = {} }) {
  return (
    <button
      className={`${variant}-btn`}
      onClick={onClick}
      style={style}
    >
      {text}
    </button>
  );
}

export default Button;