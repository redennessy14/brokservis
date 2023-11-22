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
          <h3>Наша компания</h3>
          <p>
            Наша компания является особым участником среди участников
            внешнеэкономической деятельности. Мы обладаем статусом
            уполномоченного экономического оператора, что свидетельствует о
            низкой категории риска и повышенным доверием как со стороны
            таможенных органов государств-членов ЕАЭС, так и со стороны
            участников внешнеэкономической торговой деятельности.
          </p>
        </div>
        <div className="container_right">
          <img src={IMG2} alt="" />
        </div>
      </div>
      <div className="about_block">
        <div className="about_overlay"></div>
        <h3>Подробнее о нашей компании</h3>
        <p>
          {" "}
          Успешная практика по экспорту и импорту с 2015 года и статус
          уполномоченного экономического оператора – это гарантия качества.
          БрокСервис обладает возможностями пользоваться упрощенным порядком
          оформления грузов при пересечении границ государств, входящих в ЕАЭС,
          соблюдает стандарты ВТО и придерживается принципов безопасного
          перемещения товаров. Мы можем обеспечить перевозку грузов всеми видами
          транспорта: автомобильным, железнодорожным, морским, авиатранспортом,
          а также мультимодальные перевозки. Помимо этого компания БрокСервис
          предлагает в высокой мере снизить Ваши затраты времени и средств при
          выполнении комплекса таможенных операций. Помещение грузов на
          таможенные склады временного хранения, оформление таможенных
          документов, организация транзита и гибкие условия сотрудничества. Для
          постоянных клиентов существует специальная система скидок.
        </p>
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
