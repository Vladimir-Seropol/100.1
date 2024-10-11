// import { useState } from "react";
// import Cards from "../Cards";
// import Search from "../Search";
// import { useState } from "react";

import { useContext } from "react";
import { ThemeContext } from "../../App.tsx";
import ButtonLght from "../Buttons/ButtonLight/button.tsx";
import style from "./style.module.css";

// import CardsSneaker from "../CardsSneaker";
//import theme from "../../components/SwitchTheme";

const SectionSelection = () => {
  const { theme } = useContext(ThemeContext);
  const backgroundStyle =
    theme === "dark"
      ? { background: "none" }
      : { background: "rgba(255, 244, 238, 1)" };

  // Состояние для чекбоксов
  //   const [filters] = useState({
  //     all: true,
  //     completed: false,
  //     incomplete: false,
  //   });
  // const handleFilterChange = () => {
  // const newFilters = { all: false, completed: false, incomplete: false, [filter]: !filters[filter] };
  // setFilters(newFilters);
  //   const [filterValue, setFilterValue] = useState("");
  return (
    <section className={style.wrapper}>
      <div className={style.container} style={backgroundStyle}>
        <div className={style.info}>
          <h2 className={style.title}>Мы подберем идеальную пару для вас</h2>
          <p className={style.description}>
          Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями
          </p>
        </div>
        <span className={style.span}>Какой тип кроссовок рассматриваете?</span>
        <div className={style.selection}>
          <div className={style.sneakers}>
            <img src="  src/images/photo-sneaker.jpg" alt="" />

            <div className={style.inputs}>
              <label>
                <input
                  className={style.check_input}
                  type="checkbox"
                  //    onChange={() => handleFilterChange()}
                />
                <span className={style.check_style}></span>
                кеды
              </label>
            </div>
          </div>

          <div className={style.sneakers}>
            <img src="src/images/photo-sneaker.jpg" alt="" />

            <div className={style.inputs}>
              <label>
                <input
                  className={style.check_input}
                  type="checkbox"
                  //    onChange={() => handleFilterChange()}
                />
                <span className={style.check_style}></span>
                кеды
              </label>
            </div>
          </div>

          <div className={style.sneakers}>
            <img src="src/images/photo-sneaker.jpg" alt="" />

            <div className={style.inputs}>
              <label>
                <input
                  className={style.check_input}
                  type="checkbox"
                  //    onChange={() => handleFilterChange()}
                />
                <span className={style.check_style}></span>
                кеды
              </label>
            </div>
          </div>

          <div className={style.sneakers}>
            <img src="  src/images/photo-sneaker.jpg" alt="" />

            <div className={style.inputs}>
              <label>
                <input
                  className={style.check_input}
                  type="checkbox"
                  //    onChange={() => handleFilterChange()}
                />
                <span className={style.check_style}></span>
                кеды
              </label>
            </div>
          </div>

          <div className={style.sneakers}>
            <img src="src/images/photo-sneaker.jpg" alt="" />

            <div className={style.inputs}>
              <label>
                <input
                  className={style.check_input}
                  type="checkbox"
                  //    onChange={() => handleFilterChange()}
                />
                <span className={style.check_style}></span>
                кеды
              </label>
            </div>
          </div>

          <div className={style.sneakers}>
            <img src="src/images/photo-sneaker.jpg" alt="" />

            <div className={style.inputs}>
              <label>
                <input
                  className={style.check_input}
                  type="checkbox"
                  //    onChange={() => handleFilterChange()}
                />
                <span className={style.check_style}></span>
                кеды
              </label>
            </div>
          </div>
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
    </section>
  );
};

export default SectionSelection;
