import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";
export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  async function login() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!error) {
    //   navigate("/admin/availability");
      navigate("/");
    } else {
      alert(error.message);
    }
  }

  return (
    <div className="login-container">
      {/* <h1>Login</h1> */}

      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />

<div className="password-row">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />

    <button
    type="button"
    onClick={() => setShowPassword((p) => !p)}
    style={{
      width: "80px",
      padding: "12px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      background: "white",
      cursor: "pointer",
    }}
  >
    {showPassword ? "Hide" : "Show"}
  </button>
</div>

      <button onClick={login}>Login</button>
    </div>
  );
}