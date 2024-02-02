import React from 'react'
import Style from "./news_card.module.scss"
import { ContacCard } from '../../../../components/contactCard/contacCard'

export const NewsCard = () => {
  return (
    <section className={Style.news_card_sec}>
        <div className="container">
            <p className={Style.card_text}>
            Get in touch
            </p>
            <h2 className={Style.card_title}>
            Contact
            </h2>
            <ContacCard/>
        </div>
    </section>
  )
}
