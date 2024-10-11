import { useState } from "react";
// import Cards from "../Cards";
import Search from "../Search";
import style from "./style.module.css";
import CardsSneaker from "../CardsSneaker";
//import theme from "../../components/SwitchTheme";

const SectionSneakers = () => {
  const [filterValue, setFilterValue] = useState("");
  return (
    
    <section className="container">
      <div className={style.container}>
        <h1>Каталог</h1>
        <div className={style.sneakers_block}>
        <Search setFilterValue={setFilterValue} />
        <CardsSneaker filterValue={filterValue} />    
        </div>
        
      </div>
    </section>
  );
};

export default SectionSneakers;
