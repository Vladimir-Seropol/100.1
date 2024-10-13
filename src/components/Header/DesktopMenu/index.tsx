import { Link } from "react-router-dom";
import SwitchThem from "../../SwitchTheme"
import style from "./style.module.css"


export const DesktopMenu = () => {
    return (
        <>
            <SwitchThem />
            <nav>
                <Link className={style.link} to={"#catalog"}>Каталог</Link>
                <Link className={style.link} to={"#about_us"}>О нас</Link>
                <Link className={style.link} to={"#selection"}>Подбор товара</Link>
                <Link className={style.link} to={"#team"}>Наша команда</Link>
                <Link className={style.link} to={"#payment"}>Доставка и оплата</Link>
                <Link className={style.link} to={"#contacts "}>Контакты</Link>
                {/* <Link className={style.link} to={"/history"}>Корзина</Link> */}
            </nav>
            
        </>

    );
};