import React from "react";
import Logo from "../../assets/img/logo.svg";
import { Tel } from "../../assets/icons/tel"
import { Time } from "../../assets/icons/time";
import { SearchIcon } from "../../assets/icons/search-icon";
import "./header.scss"
import { Location } from "../../assets/icons/location";
import { links } from "./data";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container header__container">
          <img src={Logo} alt="" />
          <nav className="header__nav">
            <div className="header__tel">
              <Tel />
              <div className="header__txts">
                <p className="header__txt">Emergency</p>
                <a href="tel:+(237) 681-812-255" className="header__num">(237) 681-812-255</a>
              </div>
            </div>
            <div className="header__tel">
              <Time />
              <div className="header__txts">
                <p className="header__txt">Emergency</p>
                <p className="header__num">09:00 - 20:00 Everyday</p>
              </div>
            </div>
            <div className="header__tel">
              <Location />
              <div className="header__txts">
                <p className="header__txt">Emergency</p>
                <p className="header__num">09:00 - 20:00 Everyday</p>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section className="home__section">
        <div className="container home__container">
          <ul className="home__list">
            {links.map((item) => (
              <Link className="header__link" key={item.path} to={item.path}>
                {item.name}
              </Link>
            ))}
          </ul>
          <form className="header__btns">
            <button className="header__btn"><SearchIcon /></button>
            <button className="header__search">Search</button>
          </form>
        </div>
      </section>
    </>
  );
};
