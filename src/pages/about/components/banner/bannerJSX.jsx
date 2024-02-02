import React from "react";
import style from "./banner.module.scss";
import { AbutIcon } from "../../../../assets/icons/abutIcon";

export default function Banner() {
  return (
    <div className={style.banner_img}>
      <div className="container">
        <div className={style.banner_contianer}>
          <AbutIcon />
          <p className={style.banner_contianer_text}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Quisque placerat
              scelerisque felis vitae tortor augue. Velit nascetur Consequat
              faucibus porttitor enim et.
            </span>
          </p>
          <p className={style.banner_contianer_text2}>John Doe</p>
          <div className={style.banner_contianer_box}>
            <span className={style.banner_contianer_box_icon}></span>
            <span className={style.banner_contianer_box_icon}></span>
            <span className={style.banner_contianer_box_icon}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
