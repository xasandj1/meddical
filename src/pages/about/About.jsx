import React from "react";
import style from "./about.module.scss";
import Info from "./components/info/info";
import { Hero } from "../../components/hero/hero";
import Banner from "./components/banner/bannerJSX";
import Cart from "./components/cart/cartJSX";

export const About = () => {
  return (
    <>
      <section className={style.hero_bg_img}>
        <Hero text="Home / About " title="About us" />
      </section>
      <section>
        <Info />
        <Banner />
        <Cart />
      </section>
    </>
  );
};
