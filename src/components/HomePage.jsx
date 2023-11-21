import React from "react";
import "./HomePage.css";
import IMG from "../images/fur.png";
import IMG2 from "../images/image 5.png";
import IMG3 from "../images/rb.jpg";
import IMG4 from "../images/avtoperevozki4.jpg";
import IMG5 from "../images/2.jpg";
import IMG6 from "../images/aviaperevozki-.jpg";

const HomePage = () => {
  return (
    <div>
      <div class="header_block">
        <div class="image-container">
          <img src={IMG} alt="" className="header_block_img" />
          <div class="dark-overlay"></div>
          <div class="text-overlay">
            <h1>ИНН 03112201410131 ОКПО 28982341</h1>
            <p>КР г.Бишкек ул. Ибраимова 115 А офис 604</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container_left">
          <p>
            Наша компания является единственным и уникальным в Киргизии
            Уполномоченным Экономическим Оператором (УОЭ) в Евразийском
            Экономическом Союзе (ЕАЭС) с 2014 года. БрокСервис организация, у
            которой есть возможность пользоваться упрощенным порядком оформления
            грузов при пересечении границ государств, входящих в ЕАЭС, соблюдает
            стандарты ВТО и придерживаясь принципов безопасного перемещения
            товаров.
          </p>
        </div>
        <div className="container_right">
          <img src={IMG2} alt="" />
        </div>
      </div>
      <div className="card_block">
        <h3>Виды перевозок</h3>
        <div className="card">
          {" "}
          <img src={IMG3} alt="" />
          <div className="image-overlay"></div>
          <p> Международные перевозки </p>
        </div>
        <div className="card">
          {" "}
          <img src={IMG4} alt="" />
          <div className="image-overlay"></div>
          <p>Автомобильные перевозки </p>
        </div>
        <div className="card">
          {" "}
          <img src={IMG5} alt="" />
          <div className="image-overlay"></div>
          <p>Железнодорожные перевозки</p>
        </div>
        <div className="card">
          {" "}
          <img src={IMG6} alt="" />
          <div className="image-overlay"></div>
          <p>Авиаперевозки</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
