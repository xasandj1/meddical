import React from 'react';
import "./welcome.scss"
import { Left } from '../../../../assets/icons/left';
import WlecomeImg from "../../../../assets/img/welcome__img.png"

export const Welcome = () => {
    return (
        <section className="welcome">
            <div className="container welcome__container">
                <div className="welcome__top">
                    <h3 className="welcome__title">Welcome to Meddical</h3>
                    <h2 className="welcome__greate">A Great Place to Receive Care</h2>
                    <p className="welcome__txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                    <div className="welcome__btns">
                        <button className="welcome__btn">Learn More </button>
                        <Left />
                    </div>
                </div>
                <div className="welcome__bottom">
                    <img src={WlecomeImg} alt="" />
                </div>
            </div>
        </section>
    );
}
