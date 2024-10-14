// import { useState } from "react";
// import Cards from "../Cards";
// import Search from "../Search";
// import { useState } from "react";

import {  useContext } from "react";
import { ThemeContext } from "../../App.tsx";
import ButtonLght from "../Buttons/ButtonLight/button.tsx";
import style from "./style.module.css";
import  Form from "../Form";

// import CardsSneaker from "../CardsSneaker";
//import theme from "../../components/SwitchTheme";

const SectionSelection = () => {
    
  const { theme } = useContext(ThemeContext)!;
  const backgroundStyle =
    theme === "dark"
      ? { background: "none" }
      : { background: "rgba(255, 244, 238, 1)" };

  
  return (
    <section className={style.wrapper} id="selection">
      <div className={style.container} style={backgroundStyle}>
        <div className={style.info}>
          <h2 className={style.title}>Ваша подборка готова!</h2>
          <p className={style.description}>
          Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог
          </p>
        </div>
        <div className="carousel">
  <div className={style.selection}>
    <Form  text={"Получите подборку подходящих для вас моделей на почту"} title={"Получить предложение"} phoneInputProps={{ type: "email", placeholder: "E-mail" }}    />
  </div>
        <div className={style.step}>
          <span className={style.counter}>1 из 3</span>
          <ButtonLght
            text="Следующий шаг"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>

        </div>
      
      </div>
    </section>
  );
};

export default SectionSelection;
