import React from 'react'
import "./booking.scss"
export const Booking = () => {
    return (
        <section className="booking">
            <div className="container booking__container">
                <div className="booking__left">
                    <h3 className="booking__title">Book an Appointment</h3>
                    <p className="booking__txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                </div>
                <div className="booking__right">
                    <div>
                        <input type="text" className='grander__option' placeholder='Name' />
                        <select aria-label="Gender" name="Gender" id="Gender" title="Gender" className="grander__option">
                            <option defaultValue={1} className='bg'>Gender</option>
                            <option defaultValue={2} className='bg' selected="1">Gender</option>
                            <option defaultValue={3} className='bg'>Gender</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" className='grander__option' placeholder='Email' />
                        <input type="text" className='grander__option' placeholder='Phone' />
                    </div>
                    <div>
                        <select aria-label="Gender" name="Gender" id="Gender" title="Gender" className="grander__option">
                            <option defaultValue={1} className='bg'>Date</option>
                            <option defaultValue={2} className='bg' selected="1">Date</option>
                            <option defaultValue={3} className='bg'>Date</option>
                        </select>
                        <select aria-label="Time" name="Time" id="Time" title="Time" className="grander__option">
                            <option defaultValue={1} className='bg'>Time</option>
                            <option defaultValue={2} className='bg' selected="1">Time</option>
                            <option defaultValue={3} className='bg'>Time</option>
                        </select>
                    </div>
                    <div>
                        <select aria-label="Doctor" name="Doctor" id="Doctor" title="Doctor" className="grander__option">
                            <option defaultValue={1} className='bg'>Doctor</option>
                            <option defaultValue={2} className='bg' selected="1">Doctor</option>
                            <option defaultValue={3} className='bg'>Doctor</option>
                        </select>
                        <select aria-label="Department" name="Department" id="Department" title="Department" className="grander__option">
                            <option defaultValue={1} className='bg'>Department</option>
                            <option defaultValue={2} className='bg' selected="1">Department</option>
                            <option defaultValue={3} className='bg'>Department</option>
                        </select>
                    </div>
                    <div className="massage__info">
                        <input type="text" placeholder='Message' className='massage' />
                    </div>
                    <div className="send__btns">
                        <button type='button' className="send__btn">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    )
}