import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Sneaker } from "../../types/sneaker";
import style from "./style.module.css";
import ButtonRed from "../../components/Buttons/ButtonRed/button";
const SneakerPage = () => {
  const params = useParams();
  const [sneakerData, setSneakerData] = useState<Sneaker | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(
          `https://01d736031dee7633.mokky.dev/sneakers/${params.id}`
        );
        const data = await req.json();
        setSneakerData(data);
      } catch (e) {
        console.log("ERROR->", e);
      }
    };
    getData();
  }, []);

  return (
    <div className={style.absolute}>
      {sneakerData && (
        <div className={style.item_wrapper}>
          <div className={style.background}>
            <div className={style.container}>
              <img src={sneakerData.imgUrl} alt="" />
              <div className={style.info}>
                <div className={style.article}>
                  <span className={style.article}>Артикул: {sneakerData.vendorСode}</span>
                  <span className={style.article}>В наличии: {sneakerData.inStock} шт</span>
                </div>
                <h2 className={style.title}>{sneakerData.title}</h2>
                <img src="src/assets/stars.png" alt="" className={style.stars}/>
                <p className={style.size}>Выбeрите размер{sneakerData.sizes}</p>
                <span className={style.price}>{sneakerData.price}</span>
                <span className={style.priceold}>{sneakerData.oldPrice}</span>
                <div className={style.button}>
                  <ButtonRed text="Заказать" onClick={() => {}} />
                </div>

                <p className={style.text}><img src="../../assets/Vector.svg" alt="" style={{maxWidth:"20px", width:"20px", height:"20px"}}/>Бесплатная доставка до двери</p>
                <p className={style.text}><img src="src/assets/Vector.png" alt="" style={{maxWidth:"20px", width:"20px", height:"20px"}}/>Оплата заказа при получении</p>
                <p className={style.text}><img src="src/assets/Vector.svg" alt="" style={{maxWidth:"20px", width:"20px", height:"20px"}}/>Обмен в течении двух недель</p>
              </div>
            </div>
            <div className={style.description}>
                <div>
              <h3>Описание </h3>
              <p>{sneakerData.description}</p>       
                </div>
             
              <div className={style.data}>
                <h3>Характеристики</h3>
                <p>Пол: {sneakerData.gender}</p>
                <p>Цвет: {sneakerData.color}</p>
                <p>Сoстав: {sneakerData.compound}</p>
                <p>Страна: {sneakerData.country}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SneakerPage;
