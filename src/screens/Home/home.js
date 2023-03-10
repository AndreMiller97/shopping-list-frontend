import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { Button, Input } from "../../components";
import {SAVE_USERNAME_PATH } from "../../services/constants/index"

export const HomeScreen = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");

  const onClickContinue = () => {
   if (username.length < 3){
    alert("O Nome deve conter mais do que 3 caracteres")
    return
   }
    localStorage.setItem(SAVE_USERNAME_PATH, username)
    navigate('/list')
  };

  return (
    <div className="home-screen-container">
      <div className="home-screen-content-container">
        <img
          className="shopping-bag-image"
          src="/images/lista_logo.png"
          alt="shopping"
        />
        <h1 className="home-screen-title">
          Sua lista de Compras mais facil do que nunca!
        </h1>
        <h3 className="home-screen-subtitle">
          Ajudamos você a organizar sua lista de compras de forma descomplicada.
        </h3>
        <h3 className="home-screen-subtitle-description">
          Digite seu usuário para poder ter acesso a sua lista de compras:
        </h3>
        <Input
          onChange={(text) => setUsername(text)}
          value={username}
          label="Username"
          placeholder="Digite seu Usuário"
        />
        <div className="home-screen-button-container">
          <Button onClick={onClickContinue}>Continuar</Button>
        </div>
      </div>
    </div>
  );
};
