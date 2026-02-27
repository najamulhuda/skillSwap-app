import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login to SkillSwap</h2>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button text="Login" onClick={handleLogin} />
      </div>
    </div>
  );
}

export default Login;