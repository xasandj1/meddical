import React from 'react'
import "./specialists.scss"
import { Diograma } from '../../../../assets/icons/Diograma'
import { ActiveCardiolg } from '../../../../assets/icons/activecardiolg'

export const Specialists = () => {
    return (
        <section className="specialists">
            <div className="container specialists__container">
                <div className="specialists__top">
                    <h3 className="welcome__title">Always Caring</h3>
                    <h2 className="welcome__greate">Our Specialties</h2>
                </div>
                <div className="specialists__bottom">
                    <button className="specialists__btn">
                        <Diograma />
                        <p className="specialists__bottom__txt">Neurology</p>
                    </button>
                    <button className="specialists__btn--active">
                        <ActiveCardiolg />
                        <p className="specialists__bottom__txt txt">Neurology</p>
                    </button>
                    <button className="specialists__btn">
                        <Diograma />
                        <p className="specialists__bottom__txt">Neurology</p>
                    </button>
                    <button className="specialists__btn">
                        <Diograma />
                        <p className="specialists__bottom__txt">Neurology</p>
                    </button>
                    <button className="specialists__btn">
                        <Diograma />
                        <p className="specialists__bottom__txt">Neurology</p>
                    </button>
                    <button className="specialists__btn">
                        <Diograma />
                        <p className="specialists__bottom__txt">Neurology</p>
                    </button>
                    <button className="specialists__btn">
                        <Diograma />
                        <p className="specialists__bottom__txt">Neurology</p>
                    </button>
                    <button className="specialists__btn">
                        <Diograma />
                        <p className="specialists__bottom__txt">Neurology</p>
                    </button>
                    <button className="specialists__btn">
                        <Diograma />
                        <p className="specialists__bottom__txt">Neurology</p>
                    </button>
                    <button className="specialists__btn">
                        <Diograma />
                        <p className="specialists__bottom__txt">Neurology</p>
                    </button>
                    <button className="specialists__btn">
                        <Diograma />
                        <p className="specialists__bottom__txt">Neurology</p>
                    </button>
                    <button className="specialists__btn">
                        <Diograma />
                        <p className="specialists__bottom__txt">Neurology</p>
                    </button>
                </div>
            </div>
        </section>
    )
}
