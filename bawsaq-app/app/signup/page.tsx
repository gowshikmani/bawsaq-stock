"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import "./signup.css";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!agreeTerms) {
      alert("Please accept the Terms of Service.");
      return;
    }

    // Real authentication will be added later.
    console.log("Signup submitted");
  };

  return (
    <main className="signup-page">
      {/* Background */}
      <div className="background-grid" />
      <div className="green-glow glow-one" />
      <div className="green-glow glow-two" />

      <section className="signup-container">
        {/* Brand */}
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

        {/* Signup Card */}
        <div className="signup-card">
          <div className="card-header">
            <span className="status-dot" />
            <span>CREATE INVESTOR ACCOUNT</span>
          </div>

          <div className="welcome">
            <h2>Create your account.</h2>
            <p>Join BAWSAQ and start tracking the market.</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="input-group">
              <label htmlFor="name">FULL NAME</label>

              <div className="input-wrapper">
                <span className="input-icon">●</span>

                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />
              </div>
            </div>

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
                  placeholder="Create a password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="input-group">
              <label htmlFor="confirm-password">CONFIRM PASSWORD</label>

              <div className="input-wrapper">
                <span className="input-icon">●</span>

                <input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Repeat your password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="terms">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />

              <span className="custom-checkbox">
                {agreeTerms && "✓"}
              </span>

              <span>
                I agree to the{" "}
                <Link href="/terms">Terms of Service</Link>{" "}
                and <Link href="/privacy">Privacy Policy</Link>.
              </span>
            </label>

            {/* Create Account */}
            <button type="submit" className="signup-button">
              <span>CREATE ACCOUNT</span>
              <span className="button-arrow">→</span>
            </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span />
            <p>OR</p>
            <span />
          </div>

          {/* Login */}
          <div className="login-link">
            <p>Already have a BAWSAQ account?</p>

            <Link href="/login">
              SIGN IN <span>→</span>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="signup-footer">
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
