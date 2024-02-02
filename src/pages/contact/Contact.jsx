import React from "react";
import style from "../contact/contact.module.scss";
import img from "../../assets/contactImg/Map.png";
import time_icon from "../../assets/contactImg/time.png";
export const Contact = () => {
  return (
    <>
      <section className={style.section}>
        <div className="container">
          <div className={style.hero_content}>
            <p className="hero-des">Home / Contact</p>
            <h1 className={style.hero_title}>Our Contacts</h1>
          </div>
        </div>
      </section>

      <section className={style.map_section}>
        <div className="container">
          <img className={style.img} src={img} alt="" />
        </div>
      </section>

      <section className={style.contact}>
        <div className="container">
          <div className={style.wrapper}>
            <div className={style.left}>
              <p className={style.left_title}>Get in touch</p>
              <h2 className={style.left_desc}> Contact</h2>
              <div className={style.wrapper_form}>
                <form action="#" className={style.form}>
                  <input
                    style={{ border: "1px solid white" }}
                    id={style.transparent}
                    type="text"
                    placeholder="Name"
                    className={style.grow}
                  />
                  <input
                    style={{ border: "1px solid white" }}
                    id={style.transparent}
                    type="email"
                    placeholder="Email"
                    className={style.grow}
                  />
                  <input
                    id={style.transparent}
                    type="text"
                    placeholder="Subject"
                    className={style.subject}
                  />
                  <textarea
                    type="text"
                    placeholder="Message"
                    className={style.message}
                  />
                  <button className={style.left_btn}>Submit</button>
                </form>
                <div className={style.cards}>
                  <div className={style.card}>
                    <img src={time_icon} alt="" />
                    <h4 className={style.card_title}>Working Hours</h4>
                    <p className={style.card_desc}>
                      Mon-Sat 09:00-20:00 Sunday Emergency only
                    </p>
                  </div>
                  <div className={style.card}>
                    <img src={time_icon} alt="" />
                    <h4 className={style.card_title}>Working Hours</h4>
                    <p className={style.card_desc}>
                      Mon-Sat 09:00-20:00 Sunday Emergency only
                    </p>
                  </div>{" "}
                  <div className={style.card}>
                    <img src={time_icon} alt="" />
                    <h4 className={style.card_title}>Working Hours</h4>
                    <p className={style.card_desc}>
                      Mon-Sat 09:00-20:00 Sunday Emergency only
                    </p>
                  </div>{" "}
                  <div className={style.card}>
                    <img src={time_icon} alt="" />
                    <h4 className={style.card_title}>Working Hours</h4>
                    <p className={style.card_desc}>
                      Mon-Sat 09:00-20:00 Sunday Emergency only
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </section>

      
    </>
  );
};
