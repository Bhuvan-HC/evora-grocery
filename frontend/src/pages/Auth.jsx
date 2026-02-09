import { useState } from "react";
import "../styles/auth.css";

const Auth = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        <h2 className="auth-title">
          {mode === "login" ? "Login to EVORA" : "Create Business Account"}
        </h2>

        <p className="auth-sub">
          {mode === "login"
            ? "Login using your registered email and phone number"
            : "Register your business to start bulk procurement"}
        </p>

        {/* TOGGLE */}
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

        {/* EMAIL */}
        <div className="auth-field">
          <label>Email Address</label>
          <input
            type="email"
            required
            placeholder="business@email.com"
          />
        </div>

        {/* PHONE */}
        <div className="auth-field">
          <label>Mobile Number</label>
          <input
            type="tel"
            required
            placeholder="10-digit mobile number"
          />
        </div>

        {/* REGISTER ONLY */}
        {mode === "register" && (
          <div className="auth-field">
            <label>Business Name</label>
            <input
              type="text"
              required
              placeholder="Hotel / Caterer name"
            />
          </div>
        )}

        <button className="auth-submit">
          {mode === "login" ? "Login & Send OTP" : "Register & Send OTP"}
        </button>

        <p className="auth-note">
          Email and phone number are mandatory for verification and billing.
        </p>

      </div>
    </div>
  );
};

export default Auth;