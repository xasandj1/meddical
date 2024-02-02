import React from "react";
import ContactCardStyle from "./contactCard.module.scss";
import { contactCardData } from "./contactCardData";

export const ContacCard = () => {
  return (
    <div className="container">
      <div className={ContactCardStyle.contact_card__main}>
        {contactCardData.map((item) => (
          <div className={ContactCardStyle.concard_main}>
            <img src={item.icon} alt="icon" />
            <h2 className={ContactCardStyle.concard_main__title}>
              {item.title}
            </h2>
            <p className={ContactCardStyle.concard_main__text1}>{item.text1}</p>
            <p className={ContactCardStyle.concard_main__text2}>{item.text2}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
