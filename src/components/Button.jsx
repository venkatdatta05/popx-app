const Button = ({ text, variant = "primary" }) => {
  return (
    <button className={variant === "primary" ? "primary-btn" : "secondary-btn"}>
      {text}
    </button>
  );
};

export default Button;
