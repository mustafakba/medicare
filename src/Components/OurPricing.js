import styles from '../Styles/OurPricing.css'
import {useState} from "react";
import {Icon} from './Icons'
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide ,} from "swiper/react";
import "swiper/css/pagination";
import 'swiper/css';



// import required modules
import TopTitle from "./Shared/TopTitle";


function OurPricing() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    const [values] = useState
       (
       [
            {
                title : 'TEETH WHITENING',
                services :['true','true','true','true','false'],
                price :'99',
                image :'https://themesflat.com/html/medicare/images/pricing/pricing2.jpg'
            }
            ,
            {
                title : 'TOOTH IMPLANTS',
                services :['true','false','false','true','false'],
                price :'299',
                image :'https://themesflat.com/html/medicare/images/pricing/pricing3.jpg'
            },
            {
                title : 'EXTRACTIONS',
                services :['true','false','true','true','false'],
                price :'199',
                image :'https://themesflat.com/html/medicare/images/pricing/pricing1.jpg'
            }
        ]
        )

    return(
        <div className={styles}>
            <div className="our-pricing-container">
                <div className="our-pricing-title-section">
                    <TopTitle backgroundLetter={"P"} secondWord={"PRICING"} firstWord={"OUR"} />
                    <div className="our-pricing-thin-explanation">
                        <p>Lorem ipsum dolor sit amet sed tincidunt suscipit id malesuada.
                        </p>
                    </div>
                </div>
                <Swiper
                    breakpoints={{
                        576: {
                            slidesPerView: 1,
                            slidesPerGroup: 1
                        },
                        768: {
                            slidesPerView: 2,
                            slidesPerGroup: 2
                        },
                        1362: {
                            slidesPerView: 3,
                            slidesPerGroup: 3
                        }
                    }}
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    navigation
                     pagination={{ clickable: true }}
                     scrollbar={{ draggable: true }}
                     onSwiper={(swiper) => console.log(swiper)}
                     onSlideChange={() => console.log("slide change")}
                >
                    {[...values, ...values].map((value,index) => (
                        <SwiperSlide>
                           <div className="pricing-card-container">
                               <div className="pricing-card">
                                   <div className="pricing-image">
                                       <img src={value.image} alt=""/>
                                   </div>
                                   <div className="wrap-plan">
                                        <span className="plan">
                                            {value.title}
                                        </span>
                                   </div>
                                   <div className="pricing-features">
                                       <div className="pricing-left-side">
                                           {
                                               value.services.map((service,index) => {
                                                   return(
                                                       // <div className="icon-type" key={index}>
                                                       //     {service === "true" ? (<Icon name="tick" ) :(<Icon name="times" />) }
                                                       // </div>
                                                       <div className="icon-type">
                                                           <Icon name={service === 'true' ? 'tick' : 'times'} />
                                                       </div>
                                                   )
                                               })
                                           }
                                       </div>
                                       <div className="pricing-right-side">
                                           <li className="pricing-features-item">Diagnostic Services</li>
                                           <li className="pricing-features-item">Professional Consultation</li>
                                           <li className="pricing-features-item">Tooth Implants</li>
                                           <li className="pricing-features-item">Surgical Extractions</li>
                                           <li className="pricing-features-item">Teeth Whitening</li>
                                       </div>
                                   </div>
                                   <div className="pricing-price">
                                       <span className="turkish-dolar">$</span>
                                       <span className="price">{value.price}</span>
                                   </div>
                                   <div className="cta">
                                       <div className="pricing-button-area">
                                           <a href="#">GET STARTED</a>
                                       </div>
                                   </div>
                               </div>
                           </div>
                        </SwiperSlide>
                        )
                    )}
                </Swiper>
            </div>
        </div>
    )

}

export default OurPricing;