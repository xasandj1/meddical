import React from "react";
import Style from "./item.module.scss";
import img from "../../../../assets/img/item_mini_img.png";
import { ItemMiniIcon } from "../../../../assets/icons/item_mini_icon";
import { ItemMiniIconHover } from "../../../../assets/icons/item-min-icon2";
import { NewsPgIcon5 } from "../../../../assets/icons/news_pg_icon5";

export const Item = () => {
  return (
    <div className={Style.item_mini}>
      <div className={Style.img_sup}>
        <img src={img} alt="" />
        <div className={Style.icon_sup}>
          <ItemMiniIcon />
        </div>
        <div className={Style.icon_sup__hover}>
          <ItemMiniIconHover />
        </div>
      </div>
      <div className={Style.item_mini_text_content}>
        <h3 className={Style.item_mini_title}>Free Checkup</h3>
        <p className={Style.item_mini_text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat
          Convallis felis vitae tortor augue. Velit nascetur massa in.
        </p>
        <a className={Style.item_mini_link} href="#">
          Learn More
          <NewsPgIcon5 />
        </a>
      </div>
    </div>
  );
};
