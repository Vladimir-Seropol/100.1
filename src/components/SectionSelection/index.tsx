


import style from "./style.module.css";
import Selection1 from "../Selection1/index.tsx";
import Selection2 from "../Selection2/index.tsx";
import Selection3 from "../Selection3/index.tsx";
import Selection4 from "../Selection4/index.tsx";


const SectionSelection = () => {
  
  return (
    <section className={style.wrapper} id="selection">
<Selection1 />
{/* <Selection2 /> */}
{/* <Selection3 /> */}
     {/* <Selection4 /> */}
       
    </section>
  );
};

export default SectionSelection;
