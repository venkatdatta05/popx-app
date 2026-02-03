const Input = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="form-group">
      <label className="label">{label}</label>
      <input className="input-box" type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
