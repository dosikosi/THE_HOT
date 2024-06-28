import React from "react";
import { NavLink } from "react-router-dom";
import founder_img from "../../assets/images/founder-img.jpg";
import header_left_img from "../../assets/images/header-left-img.png";
import header_right_img from "../../assets/images/header-right-img.png";
import Footer from "../../components/footer/footer";
import HomeProducts from "../../components/home_products_links/home-products";
import "./home-page.css";

function HomePage() {
  React.useEffect(() => {
    document.title = `THE HOT`;
  }, []);
  return (
    <>
      <header>
        <div className="header_wrapper">
          <div className="header_left_blog">
            <img src={header_left_img} alt="header_left_img" />
          </div>
          <div className="header_right_block">
            <div className="header_text">
              <div className="before_text_line"></div>
              <NavLink to="/diffusers">
                <h1>Найди себе подходящий аромат</h1>
              </NavLink>
            </div>
            <img src={header_right_img} alt="header_right_img" />
          </div>
        </div>
      </header>
      <section className="history_brand">
        <div className="history_brand_wrapper">
          <div className="founder_img">
            <img src={founder_img} alt="founder_img" />
          </div>
          <div className="history_brand_text">
            <i>
              <h1>ИСТОРИЯ БРЕНДА</h1>
            </i>

            <p>
              Привет! <br /> Меня зовут Анастасия Зеленцова, я создатель бренда THE HOT
            </p>
            <p>
              Прежде чем содать свой бренд, я прошла большой, изучая множество рецептов, свойств
              масел, смешивая различные экологичные аромамасла, я вывела
              собственные формулы и создала потрясающую коллекцию ухода за телом
              и ароматизаторов для дома.
            </p>
            <p>
              Как же выбрать свой номер аромата? Я предлагаю тебе в свой первый
              заказ доверится интуиции и выбрать счастливое число от 1 до 9.
              Каждый диффузор уникален и ноты раскрываются так интересно, что
              трудно будет уловить определенный состав. Я составила такие
              аромадиффузоры, чтобы в твоем пространстве были слышны
              ненавязчивые и приятные ароматы.
            </p>
            <p>
              В своих продуктах я использую только натуральные ингредиенты,
              которые будут заботиться о твоем теле и домашнем пространстве.
              Каждая баночка делается мной вручную с большой любовью к людям,
              природе и своему ремеслу. Не сомневайся, что найдёшь здесь по
              истине экологичный продукт.
            </p>

          </div>
        </div>
      </section>
      <section className="home_products">
        <div className="home_products_wrapper">
          <div className="home_products_title">
            <h3>Популярные продукты</h3>
          </div>
          <div className="home_product_items">
            <HomeProducts />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
