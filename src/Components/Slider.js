import {Splide, SplideSlide} from '@splidejs/react-splide';


import styles from '../Styles/Slider.css'
import DarkButton from "./Shared/DarkButton";
import WhiteButton from "./Shared/WhiteButton";
import {Icon} from "./Icons";


function Slider() {
    return (
        <div className={`${styles} splide-wrapper`}>
            <Splide aria-label="My Favorite Images">
                <SplideSlide>
                    <img className="splide-img" src="https://themesflat.com/html/medicare/images/slides/1.jpg"
                         alt="slider-one"/>
                    <div className="content">
                        <h1 className="title">Achiteve Your Desired Perfect Smile </h1>
                        <div className="explanation">
                            A full range of cosmetic dentistry treatment to improve Your smile!
                        </div>
                        <div style={{display:'flex', marginTop: '50px'}}>
                            <DarkButton text="APPOINTMENT" iconName="pencil"/>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div style={{maxWidth: '800px!important'}} className="content content-dental-health">
                        <div>
                            <span style={{fontSize: '50px', paddingBottom: '20px;'}}>IMPROVE YOUR</span>
                            <br/>
                            <span className="title-dental-health" style={{fontSize: '80px'}}>DENTAL HEALTH</span>
                        </div>
                        <div style={{marginTop: '50px'}} className="explanation">
                            The Latest Trends In Esthetic Dental Care
                        </div>
                        <div style={{display:'flex', marginTop: '50px'}}>
                            <DarkButton text="APPOINTMENT" iconName="pencil"/>
                        </div>
                    </div>
                    <img className="splide-img" src="https://themesflat.com/html/medicare/images/slides/2.jpg"
                         alt="slider-two"/>
                </SplideSlide>
                <SplideSlide>
                    <div className="content-high-quality">
                        <h2 className="title-quality">High Quality Of Dental Care</h2>
                        <div className="explanation-quality">Welcome To Medicare</div>
                        <div className="line-quality"></div>
                        <div style={{maxWidth: '600px', width: '100% !important'}} className="buttons-area">
                            <span><WhiteButton text="APPOINTMENT" iconName="pencil"/></span>
                            <span style={{marginLeft:'35px'}}><WhiteButton text="VIEW DETAIL" iconName="right"/></span>
                        </div>
                    </div>
                    <img className="splide-img" src="https://themesflat.com/html/medicare/images/slides/3.jpg"
                         alt="slider-three"/>
                </SplideSlide>
            </Splide>
        </div>
    );
}

export default Slider;
