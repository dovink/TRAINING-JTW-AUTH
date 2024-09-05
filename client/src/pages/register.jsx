import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "../components/user/fetchData";
import { ROUTES } from "../Navigation/conts";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Įveskite el. pašto adresą");
      return;
    }
    if (!name) {
      setError("Įveskite savo varda");
      return;
    }

    if (!password) {
      setError("Įveskite slaptažodį");
      return;
    }

    try {
      await registerUser(email, name, password);
      navigate(ROUTES.LOGIN);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          El. paštas:
          <input
            type="email"
            value={email}
            placeholder="Iveskite El. pašto adresa"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Vardas:
          <input
            type="text"
            value={name}
            placeholder="Iveskite savo varda"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Slaptažodis:
          <input
            type="password"
            value={password}
            placeholder="Iveskite savo slaptažodį"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Užsiregistruoti</button>
      </form>
      <p>
        Jau turite paskyra? <NavLink to={ROUTES.LOGIN}> Prisijungti</NavLink>
      </p>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Register;
