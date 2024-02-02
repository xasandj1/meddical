import React from "react";
import Style from "./news.module.scss";
import { Hero } from "../../components/hero/hero";
import { NewsAbout } from "./components/news_about/news_about";
import { NewsCard } from "./components/news_card/news_card";

export const News = () => {
  return (
    <div>
      <section className={Style.news_hero}>
        <Hero text="Home / News" title="Blog Posts" />
      </section>
      <NewsAbout/>
      <NewsCard/>
    </div>
  );
};
