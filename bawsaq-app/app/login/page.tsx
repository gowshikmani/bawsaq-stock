"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import "./login.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Authentication will be added later.
    console.log("Login submitted", { rememberMe });
  };

  return (
    <main className="login-page">
      {/* Background decoration */}
      <div className="background-grid" />
      <div className="green-glow glow-one" />
      <div className="green-glow glow-two" />

      <section className="login-container">
        {/* Logo */}
        <Link href="/" className="brand">
          <div className="brand-icon">
            <span />
            <span />
            <span />
            <div className="brand-arrow">↗</div>
          </div>

          <div className="brand-text">
            <h1>BAWSAQ</h1>
            <p>THE STOCK MARKET</p>
          </div>
        </Link>

        {/* Login Card */}
        <div className="login-card">
          <div className="card-header">
            <span className="status-dot" />
            <span>SECURE TERMINAL</span>
          </div>

          <div className="welcome">
            <h2>Welcome back.</h2>
            <p>Sign in to access your BAWSAQ dashboard.</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="input-group">
              <label htmlFor="email">EMAIL</label>

              <div className="input-wrapper">
                <span className="input-icon">✉</span>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="input-group">
              <label htmlFor="password">PASSWORD</label>

              <div className="input-wrapper">
                <span className="input-icon">●</span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="form-options">
              <label className="remember">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />

                <span className="custom-checkbox">
                  {rememberMe && "✓"}
                </span>

                <span>Remember me</span>
              </label>

              <Link href="/forgot-password" className="forgot-link">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button type="submit" className="login-button">
              <span>SIGN IN</span>
              <span className="button-arrow">→</span>
            </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span />
            <p>OR</p>
            <span />
          </div>

          {/* Signup */}
          <div className="signup">
            <p>Don't have a BAWSAQ account?</p>

            <Link href="/signup">
              CREATE ACCOUNT <span>→</span>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="login-footer">
          <div>
            <span className="market-status" />
            MARKETS ONLINE
          </div>

          <span>© 2026 BAWSAQ</span>

          <span>SECURE CONNECTION</span>
        </footer>
      </section>
    </main>
  );
}