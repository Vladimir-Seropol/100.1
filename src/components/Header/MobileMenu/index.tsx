import { BurgerMenu } from "../BurgerMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import SwitchThem from "../../SwitchTheme";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={style.container}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      {isOpen && (
        <div className={style.wrapper}>
          <nav>
            <SwitchThem />
            {/* <Link className={style.link} to={"/catalog"}>Каталог</Link> */}
            <Link to="/catalog" onClick={handleLinkClick}>
              Каталог
            </Link>

            {/* <Link className={style.link} to={"/about_us"}>О нас</Link> */}
            <Link to="/about_us" onClick={handleLinkClick}>
              О нас
            </Link>

            {/* <Link className={style.link} to={"/selection"}>Подбор товара</Link> */}
            <Link to="/selection" onClick={handleLinkClick}>
              Подбор товара
            </Link>

            {/* <Link className={style.link} to={"/team"}>Наша команда</Link> */}
            <Link to="/team" onClick={handleLinkClick}>
              Наша команда
            </Link>

            {/* <Link className={style.link} to={"/payment"}>Доставка и оплата</Link> */}
            <Link to="/payment" onClick={handleLinkClick}>
              Доставка и оплата
            </Link>

            {/* <Link className={style.link} to={"/contacts "}>Контакты</Link> */}
            <Link to="/contacts" onClick={handleLinkClick}>
              Контакты
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
