import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import loginLogo from "../../assets/images/loginLogo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      setError("Correo electrónico o contraseña incorrectos");
    }
  };

  return (
    <div className="logUsuario">
      <img src={loginLogo} alt="loginLogo" />
      <h2>¡Hola! para continuar, inicia sesión o crea una cuenta</h2>
      <form className="loginForm" onSubmit={handleSubmit}>
        <section className="inputsForm">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </section>

        <button className="buttonLogin" type="submit">
          Iniciar Sesión
        </button>
        <button
          className="buttonRegister"
          type="button"
          onClick={() => navigate("/register")}
        >
          Crear Cuenta
        </button>
      </form>
      <a href="/recuperar-contrasena">¿Has olvidado tu contraseña?</a>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Login;
