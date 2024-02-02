import React from 'react'
import "./homecontact.scss"
import { Tel } from "../../../../assets/icons/tel"
import { Location } from '../../../../assets/icons/location'
import { Mail } from '../../../../assets/icons/mail'
import { Time } from '../../../../assets/icons/time'

export const HomeContact = () => {
    return (
        <section className="homecontact">
            <div className="container homecontact__container">
                <div className="homecontact__top">
                    <h3 class="welcome__title">Better information, Better health</h3>
                    <h2 class="welcome__greate">News</h2>
                </div>
                <div className="homecontact__bottom">
                    <div className="homecontact__cards">
                        <div className="homecontact__card">
                            <Tel />
                            <h5 className="homecontact__title">Emergency</h5>
                            <a href="tel:+(237) 681-812-255" className='homecontact__tel'>(237) 681-812-255</a>
                            <a href="tel:+(237) 666-331-894" className='homecontact__tel'>(237) 666-331-894</a>
                        </div>
                        <div className="homecontact__card">
                            <span className="location"><Location /></span>
                            <h5 className="homecontact__title tit">Emergency</h5>
                            <p className='homecontact__tel tx'>0123 Some place</p>
                            <p className='homecontact__tel tx'>0123 Some place</p>
                        </div>
                        <div className="homecontact__card">
                            <Mail />
                            <h5 className="homecontact__title">Emergency</h5>
                            <a href="mailto:fildineeesoe@gmil.com" className='homecontact__tel'>fildineeesoe@gmil.com</a>
                            <a href="mailto:myebstudios@gmail.com" className='homecontact__tel'>myebstudios@gmail.com</a>
                        </div>
                        <div className="homecontact__card">
                            <Time />
                            <h5 className="homecontact__title">Emergency</h5>
                            <p className='homecontact__tel tx'>Mon-Sat 09:00-20:00</p>
                            <p className='homecontact__tel tx'>Sunday Emergency only</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
