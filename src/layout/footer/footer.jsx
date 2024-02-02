import React from "react";
import FooterStyle from "./footer.module.scss";
import { FooterLogo } from "../../assets/icons/footer-logo";
import { FooterInputpIcon } from "../../assets/icons/footer-input-icon";
import { Link } from "react-router-dom";

//// icons:
import { FooterIcon1 } from "../../assets/icons/footer-icon1";
import { FooterIcon2 } from "../../assets/icons/footer-icon2";
import { FooterIcon3 } from "../../assets/icons/footer-icon3";

export const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
      <div className="container">
        <div className={FooterStyle.footer_main__links}>
          <div className={FooterStyle.footer_logo}>
            <FooterLogo />
            <p className={FooterStyle.footer_logo__text}>
              Leading the Way in Medical Execellence, Trusted Care.
            </p>
          </div>
          <div className={FooterStyle.footer_important}>
            <h2 className={FooterStyle.footer_important__text}>
              Important Links
            </h2>
            <ul className={FooterStyle.footer_list}>
              <li>
                <Link className={FooterStyle.footer_links} to="/appointment">
                  Appointment
                </Link>
              </li>
              <li>
                <Link className={FooterStyle.footer_links} to="/doctor">
                  Doctors
                </Link>
              </li>
              <li>
                <Link className={FooterStyle.footer_links} to="/service">
                  Services
                </Link>
              </li>
              <li>
                <Link className={FooterStyle.footer_links} to="/about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={FooterStyle.footer_important__text}>Contact Us</h2>
            <ul className={FooterStyle.footer_list}>
              <li>
                <a
                  className={FooterStyle.footer_links}
                  href="tel:(237) 681-812-255"
                >
                  Call: (237) 681-812-255
                </a>
              </li>
              <li>
                <a
                  className={FooterStyle.footer_links}
                  href="email: fildineesoe@gmail.com"
                >
                  Email: fildineesoe@gmail.com
                </a>
              </li>
              <li>
                <p className={FooterStyle.footer_links}>
                  Address: 0123 Some place
                </p>
              </li>
              <li>
                <p className={FooterStyle.footer_links}>Some Country</p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={FooterStyle.footer_important__text}>Newsletter</h2>
            <div className={FooterStyle.footer_main__input}>
              <input type="email" placeholder="Enter your email address" />
              <button>
                <FooterInputpIcon />
              </button>
            </div>
          </div>
        </div>
        <div className={FooterStyle.footer_media}>
          <p className={FooterStyle.footer_media__text}>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
          <div className={FooterStyle.footer_media__item}>
            <a href="#">
              <FooterIcon1 />
            </a>
            <a href="#">
              <FooterIcon2 />
            </a>
            <a href="#">
              <FooterIcon3 />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
