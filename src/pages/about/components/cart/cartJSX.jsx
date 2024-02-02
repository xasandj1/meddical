import React from "react";
import style from "./cart.module.scss";
import { OurDoctor } from "../../../../components/ourDoctor/our-doctor";
import { NewsInfo } from "../../../../components/newsInfo/news-info";
import { ContacCard } from "../../../../components/contactCard/contacCard";

export default function Cart() {
  return (
    <div className="container">
      <div className={style.contianer}>
        <h2 className={style.cart_title}>Trusted Care</h2>
        <h3 className={style.cart_title2}>Our Doctors</h3>

        <div className={style.OurDoctor}>
          <OurDoctor />
        </div>
        <div className={style.banner_contianer_box}>
          <span className={style.banner_contianer_box_icon}></span>
          <span className={style.banner_contianer_box_icon}></span>
          <span className={style.banner_contianer_box_icon}></span>
        </div>
      </div>

      <div className={style.cart}>
        <h2 className={style.cart_title}>Better information, Better health</h2>
        <h3 className={style.cart_title2}>News</h3>
        <div className={style.cart_content}>
          <NewsInfo />
        </div>
        <div className={style.banner_contianer_box}>
          <span className={style.banner_contianer_box_icon}></span>
          <span className={style.banner_contianer_box_icon}></span>
          <span className={style.banner_contianer_box_icon}></span>
        </div>
      </div>
      <div className={style.Contact}>
        <h2 className={style.cart_title}>Get in touch</h2>
        <h3 className={style.cart_title2}>Contact</h3>
        <div className={style.Contact_cart}>
          <ContacCard />
        </div>
      </div>
    </div>
  );
}
