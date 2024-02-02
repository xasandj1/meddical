import React from 'react';
import "./advertise.scss"
import { Book } from '../../../../assets/icons/book';
import { People } from "../../../../assets/icons/people"
import { Cash } from '../../../../assets/icons/cash';

export const Advertise = () => {
    return (
        <section className="advertise">
            <div className="container advertise__container">
                <div className="advertise__blog">
                    <div className="advertise__info">
                        <p className="advertise__txt">Book an Appointment</p>
                        <Book />
                    </div>
                </div>
                <div className="advertise__blog">
                    <div className="advertise__info">
                        <p className="advertise__txt people">Book an Appointment</p>
                        <People />
                    </div>
                </div>
                <div className="advertise__blog">
                    <div className="advertise__info">
                        <p className="advertise__txt">Book an Appointment</p>
                        <Cash />
                    </div>
                </div>
            </div>
        </section>
    );
}

