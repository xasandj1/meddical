import React from 'react';
import Style from "./service.module.scss"
import { Hero } from '../../components/hero/hero';
import { Item } from './components/item/item';
import { ContacCard } from '../../components/contactCard/contacCard';

export const Service = () => {
    return (
        <div>
            <section className={Style.service_sec}>
                <Hero text="Home / Services"  title="Our Services"/>
            </section>
            <section className={Style.mini_item_sec}>
                <div className='container'>
                    <div className={Style.list}>
                        <div className={Style.item}>
                            <Item/>
                        </div>
                        <div className={Style.item}>
                            <Item/>
                        </div>
                        <div className={Style.item}>
                            <Item/>
                        </div>
                        <div className={Style.item}>
                            <Item/>
                        </div>
                        <div className={Style.item}>
                            <Item/>
                        </div>
                        <div className={Style.item}>
                            <Item/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={Style.contact_sec}>
                <div className="container">
                    <p className={Style.contact_sec_text}>
                    Get in touch
                    </p>
                    <h2 className={Style.contact_sec_title}>
                    Contact
                    </h2>
                    <ContacCard/>
                </div>
            </section>
        </div>
    );
}
