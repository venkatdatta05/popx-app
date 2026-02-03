import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Please fill all required fields!");
      return;
    }

    // Save user data
    localStorage.setItem("popx_user", JSON.stringify(form));

    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Create your PopX account</h1>

        <form onSubmit={handleSubmit}>
          <label>Full Name*</label>
          <input name="name" value={form.name} onChange={handleChange} />

          <label>Phone number*</label>
          <input name="phone" value={form.phone} onChange={handleChange} />

          <label>Email address*</label>
          <input name="email" value={form.email} onChange={handleChange} />

          <label>Password*</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          <label>Company name</label>
          <input name="company" value={form.company} onChange={handleChange} />

          <label>Are you an Agency?*</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={form.agency === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="agency"
                value="no"
                checked={form.agency === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>

          <button className="btn primary" type="submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
