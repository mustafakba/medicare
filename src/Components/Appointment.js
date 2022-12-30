import styles from '../Styles/Appointment.css'
import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import DarkButton from "./Shared/DarkButton";
import {Icon} from "./Icons";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import TopTitle from "./Shared/TopTitle";



function Appointment(){
    const [value, onChange] = useState(new Date());

    return(
        <div style={styles}>
            <div className="appointment-container">
                <div className="appointment-left-container">
                    <TopTitle backgroundLetter={"M"} firstWord={"MAKE"} secondWord={"APPOINTMENT"} />
                    <form className="form-area" action="">
                        <div className="form-infos">
                           <div className="top-form">
                               <div className="left-form">
                                   <div className="info-area">
                                       <input className="text-item" placeholder="Name *" type="text"/>
                                   </div>
                                   <div className="info-area">
                                       <input className="text-item" placeholder="Phone *" type="text"/>
                                   </div>

                               </div>
                               <div className="right-form">
                                   <div className="info-area">
                                       <input className="text-item" placeholder="Email *" type="text"/>
                                   </div>
                                   <div className="info-area">
                                       <select >
                                           <option disabled selected value="default">Lütfen Dr Seçiniz</option>
                                           <option value="drmustafa">Mustafa Bey</option>
                                           <option value="drerhan">Erhan Bey</option>
                                           <option value="drcavid">Cavid Bey</option>
                                           <option value="dreyup">Eyüp Bey</option>
                                       </select>
                                   </div>
                               </div>
                           </div>
                            <div className="date-and-time">
                                <span>Date And Time *</span>
                                <DateTimePicker onChange={onChange} value={value} />
                            </div>
                            <div className="info-area text-area">
                                <textarea className="text-item" placeholder="Your Messages *" />
                            </div>
                            <DarkButton text="APPOINTMENT" iconName="pencil" />
                        </div>
                    </form>
                </div>
                <div className="appointment-right-container">
                    <div className="appointment-img">
                        <Splide aria-label="My Favorite Images">
                            <SplideSlide>
                                <div className="appointment-card">
                                    <div className="quotes">
                               <span className="quotes-icon">
                                    <Icon name="quotes" size={24} />
                               </span>
                                    </div>
                                    <p className="appointment-paragraph">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aliquid atque dolorum laborum natus similique! Aspernatur libero mollitia voluptas.Lorem ipsum Mustafa Kaba
                                    </p>
                                    <div className="appointment-author">
                                        <div className="appointment-author-name">
                                            CAROLINE LADY
                                        </div>
                                        <span className="appointment-job">
                                    Web Design
                                </span>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="appointment-card">
                                    <div className="quotes">
                               <span className="quotes-icon">
                                    <Icon name="quotes" size={24} />
                               </span>
                                    </div>
                                    <p className="appointment-paragraph">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aliquid atque dolorum laborum natus similique! Aspernatur libero mollitia voluptas.Lorem ipsum Mustafa Kaba
                                    </p>
                                    <div className="appointment-author">
                                        <div className="appointment-author-name">
                                            CAROLINE LADY
                                        </div>
                                        <span className="appointment-job">
                                    Web Design
                                </span>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment;