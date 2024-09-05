import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../components/user/fetchData";
import { UserContext } from "../context/UserContext";
import { ROUTES } from "../Navigation/conts";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await loginUser(email, password);
      if (response.user) {
        login(response);
        navigate(ROUTES.HOME);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          El.paštas
          <input
            type="email"
            value={email}
            placeholder="Įveskite savo el. paštą"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Slaptažodis
          <input
            type="password"
            value={password}
            placeholder="Įveskite slaptažodį"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Prisijungti</button>
      </form>
      <label>
        Neturite paskyros? <NavLink to="/register">Registruotis</NavLink>
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
