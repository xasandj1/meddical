import React from "react";
import style from "./info.module.scss";
import imgInfo from "../../../../assets/img/abaut_img_info.png";

export default function Info() {
  return (
    <>
      <div className="container">
        <div className={style.info_container}>
          <div className={style.info_container_img}>
            <img src={imgInfo} alt="img" />
          </div>
          <div className={style.info_container_content}>
            <h1 className={style.content_title}>Welcome to Hospital name</h1>
            <h2 className={style.content_title2}>
              Best Care for Your Good Health
            </h2>
            <div className={style.cantinaer}>
              <div className={style.content_box}>
                <p className={style.content_box_text}>
                  <span>A Passion for Healing</span>
                </p>
                <p className={style.content_box_text}>
                  <span>All our best</span>
                </p>
                <p className={style.content_box_text}>
                  <span>Always Caring</span>
                </p>
              </div>
              <div className={style.content_cart}>
                <p className={style.content_box_text}>
                  <span>5-Star Care</span>
                </p>
                <p className={style.content_box_text}>
                  <span>Believe in Us</span>
                </p>
                <p className={style.content_box_text}>
                  <span>A Legacy of Excellence</span>
                </p>
              </div>
            </div>

            <p className={style.content_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Quisque placerat
              scelerisque tortor ornare ornare Convallis felis vitae tortor
              augue. Velit nascetur proin massa in. Consequat faucibus porttitor
              enim et.
            </p>
            <p className={style.content_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque. Convallis felis vitae tortor augue. Velit
              nascetur proin massa in.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
