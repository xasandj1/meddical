import React from "react";
import OurDoctorStyle from "./our-doctor.module.scss";
import { ourDoctorData } from "./ourDoctorData";
import { Linkediiin } from "../../assets/icons/linkediiin";
import { Faceeeboook } from "../../assets/icons/faceeeboook";
import { Insataagrram } from "../../assets/icons/insataagrram";

export const OurDoctor = () => {
  return (
    <section>
      <div className={OurDoctorStyle.doctor_card__main}>
        {ourDoctorData.map((item) => (
          <div className={OurDoctorStyle.doctor_main__card}>
            <div className={OurDoctorStyle.doctor_des__main}>
              <img src={item.img} alt="img" />
              <p>{item.title}</p>
              <h2>{item.name}</h2>
              <div className={OurDoctorStyle.doctor_link__main}>
                <Linkediiin />
                <Faceeeboook />
                <Insataagrram />
              </div>
            </div>
            <div className={OurDoctorStyle.doctor_main__btn}>
              <button className={OurDoctorStyle.doctor_card__btn}>
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
