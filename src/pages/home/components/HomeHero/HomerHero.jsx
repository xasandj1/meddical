import React from "react";
import "./homehero.scss"
import HeroShape from "../../../../assets/img/heroShape.png"

export const HomeHero = () => {
  return (
    <section className="homehero">
      <div className="container homehero__container">
        <span className="homehero__span">Caring for Life</span>
        <h1 className="homehero__title">Leading the Way in Medical Excellence</h1>
        <button className="homehero__btn">Our Services</button>
      </div>
    </section>
  );
};
