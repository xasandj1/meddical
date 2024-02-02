import React from 'react';
import Style from "./service.module.scss"
import { Hero } from '../../components/hero/hero';

export const Service = () => {
    return (
        <div>
            <section className={Style.service_sec}>
                <Hero text="Home / Services"  title="Our Services"/>
            </section>
        </div>
    );
}
