import React from "react";
import Logo from "../../assets/img/logo.svg";
// import { links } from "./data";
// import { HeaderButtons } from "./components/header-buttons/header-buttons";
// import { Link } from "react-router-dom";
import { Tel } from "../../assets/icons/tel"
import "./header.scss"

export const Header = () => {
  return (
    <header className="header">
      <div className="container box">
        <img src={Logo} alt="" />
        <nav className="header__nav">
          <div className="header__tel">
            <Tel />
            <div className="header__txts">
              <p className="header__txt">Emergency</p>
              <a href="tel:+(237) 681-812-255" className="header__num">(237) 681-812-255</a>
            </div>
          </div>
        </nav>

        {/* <ul>
          {links.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.name}
            </Link>
          ))}
        </ul> */}
        {/* <HeaderButtons /> */}
      </div>
    </header>
  );
};
