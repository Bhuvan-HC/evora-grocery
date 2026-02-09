import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const Auth = () => {
  const [mode, setMode] = useState("login");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP: simulate successful login / registration
    // Later this will be replaced by backend OTP verification
    navigate("/dashboard");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        <h2 className="auth-title">
          {mode === "login" ? "Login to EVORA" : "Create Business Account"}
        </h2>

        <p className="auth-sub">
          {mode === "login"
            ? "Access your orders, prices and invoices"
            : "Register your business for bulk procurement"}
        </p>

        <div className="auth-toggle">
          <button
            className={mode === "login" ? "active" : ""}
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button
            className={mode === "register" ? "active" : ""}
            onClick={() => setMode("register")}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="auth-field">
            <label>Email Address</label>
            <input type="email" required />
          </div>

          <div className="auth-field">
            <label>Mobile Number</label>
            <input type="tel" required />
          </div>

          {mode === "register" && (
            <div className="auth-field">
              <label>Business Name</label>
              <input type="text" required />
            </div>
          )}

          <button type="submit" className="auth-submit">
            {mode === "login" ? "Login & Continue" : "Register & Continue"}
          </button>
        </form>

        <p className="auth-note">
          You will be redirected to dashboard after verification.
        </p>

      </div>
    </div>
  );
};

export default Auth;