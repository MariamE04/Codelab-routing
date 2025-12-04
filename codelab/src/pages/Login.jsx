import { useState } from "react";
import { useNavigate } from "react-router"; {/*useNavigate() giver en funktion (navigate) som kan ændre URL'en uden at refreshe siden. */}
import AuthFacade from "../AuthFacade";
import '../styles/login.css';

function Login(){
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault(); {/*"Stop, browser — skal ikke reloade siden. React håndterer dette selv." */}
    try {
      await AuthFacade.login(userId, password);
      navigate("/admin");
    } catch (err) {
      alert("Wrong username or password");
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input 
          type="text" 
          value={userId} 
          onChange={e => setUserId(e.target.value)} 
          placeholder="Username" 
        />
        <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          placeholder="Password" 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
