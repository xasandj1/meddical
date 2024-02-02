import React from 'react';
import "./service.scss"
import { Medical } from '../../../../assets/icons/medical';
import { Cardiograf } from "../../../../assets/icons/cardiograf"
import { DnaTesting } from '../../../../assets/icons/dnaTesting';
import { BloodBlank } from '../../../../assets/icons/bloodBlank';
import PassionWork from "../../../../assets/img/passion__work.png"
import PassionWorker from "../../../../assets/img/passion__worker.png"
import rectangelHome from "../../../../assets/img/rectangelHome.png"

export const Service = () => {
    return (
        <section className="service">
            <div className="container service__container">
                <div className="service__top">
                    <h3 className="welcome__title">Care you can believe in</h3>
                    <h2 className="welcome__greate">Our Services</h2>
                </div>
                <div className="service__bottom">
                    <div className="service__picture">
                        <button className="service__info">
                            <Medical />
                            <p className="service__txt">Free Checkup</p>
                        </button>
                        <button className="service__info--active">
                            <Cardiograf />
                            <p className="service__txt--active">Free Checkup</p>
                        </button>
                        <button className="service__info">
                            <DnaTesting />
                            <p className="service__txt">Dna Testing</p>
                        </button>
                        <button className="service__info">
                            <BloodBlank />
                            <p className="service__txt">Blood Bank</p>
                        </button>
                        <button className="service__view">View All</button>
                    </div>
                    <div className="passion__main">
                        <h5 className="passion__main__title">A passion for putting patients first.</h5>
                        <div className="poison__beetwen">
                            <div className="passion__main__left">
                                <div className="passion__main__left__info">
                                    <img src={rectangelHome} alt="" className='rectangel' />
                                    <p className="passion__main__left__info__txt">A Passion for Healing</p>
                                </div>
                                <div className="passion__main__left__info">
                                    <img src={rectangelHome} alt="" className='rectangel' />
                                    <p className="passion__main__left__info__txt">All our best</p>
                                </div>
                                <div className="passion__main__left__info">
                                    <img src={rectangelHome} alt="" className='rectangel' />
                                    <p className="passion__main__left__info__txt">A Legacy of Excellence</p>
                                </div>
                            </div>
                            <div className="passion__main__right">
                                <div className="passion__main__left__info">
                                    <img src={rectangelHome} alt="" className='rectangel' />
                                    <p className="passion__main__left__info__txt">5-Star Care</p>
                                </div>
                                <div className="passion__main__left__info">
                                    <img src={rectangelHome} alt="" className='rectangel' />
                                    <p className="passion__main__left__info__txt">Believe in Us</p>
                                </div>
                                <div className="passion__main__left__info">
                                    <img src={rectangelHome} alt="" className='rectangel' />
                                    <p className="passion__main__left__info__txt">Always Caring</p>
                                </div>
                            </div>
                        </div>
                        <p className="poison__txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                        <p className="poison__txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
                    </div>
                    <div className="picture">
                        <img src={PassionWork} alt="" />
                        <img src={PassionWorker} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
