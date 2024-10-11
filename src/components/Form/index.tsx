import React, { useState } from "react";
import ButtonRed from "../Buttons/ButtonRed/button";
import style from "./style.module.css";

interface ButtonProps {
    text: string;
    title: string;
  }


const ContactForm: React.FC<ButtonProps> = ({ text, title }) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Здесь можно добавить логику для обработки отправленных данных
    console.log("Имя:", name);
    console.log("Телефон:", phone);

    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.form}>
        <h2>{title}</h2>
        <p>{text}</p>
        <div>
          <label>
            
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              required
            />
          </label>
        </div>
        <div>
          <label>
           
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Номер телефона"
              required
            />
          </label>
        </div>
        <ButtonRed text="Отправить" onClick={() => {}} />
      </div>
    </form>
  );
};

export default ContactForm;
