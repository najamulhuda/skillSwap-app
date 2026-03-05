import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleLogin = () => {
    if (email && password) navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-bg" />

      <div className="login-left">
        <div className="login-brand">
          <div className="brand-name">SkillSwap</div>
          <div className="brand-tagline">Exchange skills, grow together</div>
        </div>

        <h1 className="login-headline">
          Trade skills.<br />
          <span>Build futures.</span>
        </h1>
        <p className="login-sub">
          Join thousands of professionals exchanging expertise. Learn what you need,
          teach what you know — no money required.
        </p>

        <div className="login-stats">
          <div className="login-stat">
            <div className="val">2.4k+</div>
            <div className="lbl">Active traders</div>
          </div>
          <div className="login-stat">
            <div className="val">180+</div>
            <div className="lbl">Skills listed</div>
          </div>
          <div className="login-stat">
            <div className="val">94%</div>
            <div className="lbl">Match rate</div>
          </div>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <h2>{isSignup ? "Create Account" : "Welcome back"}</h2>
          <p className="login-desc">
            {isSignup
              ? "Start swapping skills today."
              : "Sign in to your SkillSwap account."}
          </p>

          {isSignup && (
            <Input
              type="text"
              placeholder="Your full name"
              label="Full Name"
            />
          )}
          <Input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
          />
          <Input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
          />

          <Button
            text={isSignup ? "Create Account" : "Sign In →"}
            onClick={handleLogin}
            style={{ width: "100%", marginTop: "8px" }}
          />

          <div className="login-footer-text">
            {isSignup ? "Already have an account? " : "Don't have an account? "}
            <a href="#" onClick={(e) => { e.preventDefault(); setIsSignup(!isSignup); }}>
              {isSignup ? "Sign in" : "Sign up free"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;