import React from "react";
import NewsInfoStyle from "./newsInfo.module.scss";
import { NewsInfoData } from "./newsInfoData";
import { NewsEyeIcon } from "../../assets/icons/newsEye-icon";
import { NewsLikeIcon } from "../../assets/icons/news-like-icon";

export const NewsInfo = () => {
  return (
    <div className="container">
      <div className={NewsInfoStyle.news_info__main}>
        {NewsInfoData.map((item) => (
          <div className={NewsInfoStyle.news_main__card}>
            <img src={item.img} alt="img" />
            <div className={NewsInfoStyle.news_info__des}>
              <p className={NewsInfoStyle.info_des__text}>{item.text}</p>
              <h2 className={NewsInfoStyle.info_des__title}>{item.title}</h2>
              <div className={NewsInfoStyle.info_des__review}>
                <span className={NewsInfoStyle.info_des__review_eye}>
                  <NewsEyeIcon />
                  <p>{item.view}</p>
                </span>
                <span className={NewsInfoStyle.info_des__review_heart}>
                  <NewsLikeIcon />
                  <p>{item.like}</p>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
