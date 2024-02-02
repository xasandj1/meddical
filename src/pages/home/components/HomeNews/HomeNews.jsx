import React from 'react'
import "./homenews.scss"
import Surender from "../../../../assets/img/surender.png"
import { Eye } from '../../../../assets/icons/eye'
import { Hert } from '../../../../assets/icons/hert'

export const HomeNews = () => {
    return (
        <section className="homenews">
            <div className="container homenews__container">
                <div className="homenews__top">
                    <h3 class="welcome__title">Better information, Better health</h3>
                    <h2 class="welcome__greate">News</h2>
                </div>
                <div className="homenews__bottom">
                    <div className="homenews__cards">
                        <div className="card">
                            <img src={Surender} alt="" />
                            <div className="homenews__texts">
                                <h5 className="homenews__title">Monday 05, September 2021 | By Author</h5>
                                <p className="homenews__txt">This Article’s Title goes Here, but not too long.</p>
                                <div className="eye__info">
                                    <div className="eye">
                                        <Eye />
                                        <p className="eye__txt">68</p>
                                    </div>
                                    <div className="eye">
                                        <Hert />
                                        <p className="eye__txt">68</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Surender} alt="" />
                            <div className="homenews__texts">
                                <h5 className="homenews__title">Monday 05, September 2021 | By Author</h5>
                                <p className="homenews__txt">This Article’s Title goes Here, but not too long.</p>
                                <div className="eye__info">
                                    <div className="eye">
                                        <Eye />
                                        <p className="eye__txt">68</p>
                                    </div>
                                    <div className="eye">
                                        <Hert />
                                        <p className="eye__txt">68</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Surender} alt="" />
                            <div className="homenews__texts">
                                <h5 className="homenews__title">Monday 05, September 2021 | By Author</h5>
                                <p className="homenews__txt">This Article’s Title goes Here, but not too long.</p>
                                <div className="eye__info">
                                    <div className="eye">
                                        <Eye />
                                        <p className="eye__txt">68</p>
                                    </div>
                                    <div className="eye">
                                        <Hert />
                                        <p className="eye__txt">68</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={Surender} alt="" />
                            <div className="homenews__texts">
                                <h5 className="homenews__title">Monday 05, September 2021 | By Author</h5>
                                <p className="homenews__txt">This Article’s Title goes Here, but not too long.</p>
                                <div className="eye__info">
                                    <div className="eye">
                                        <Eye />
                                        <p className="eye__txt">68</p>
                                    </div>
                                    <div className="eye">
                                        <Hert />
                                        <p className="eye__txt">68</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}