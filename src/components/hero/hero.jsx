import React from "react";
import HeroStyle from "./hero.module.scss";

export const Hero = ({ title, text }) => {
  return (
    <div className="container">
      <div className={HeroStyle.hero_main}>
        <h1 className={HeroStyle.hero_main__text}>{text}</h1>
        <p className={HeroStyle.hero_main__title}>{title}</p>
      </div>
    </div>
  );
};
