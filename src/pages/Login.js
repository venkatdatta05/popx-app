import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("popx_user"));

    if (!savedUser) {
      alert("No user found. Please register first!");
      return;
    }

    if (savedUser.email === email && savedUser.password === password) {
      alert("Login successful!");
      navigate("/account");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Signin to your PopX account</h1>

        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />

          <button className="btn primary" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
