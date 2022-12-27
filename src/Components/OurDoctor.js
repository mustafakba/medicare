import styles from '../Styles/OurDoctor.css'
import {Icon} from "./Icons";
function OurDoctor() {
    return(
        <div style={styles}>
            <div className="our-doctor-container">
                <div className="our-doctor-title-section">
                    <div className="our-doctor-title">
                            <span>OUR </span>
                            <span className="our-doctor-bold-title"> DOCTORS</span>
                    </div>
                </div>
                <div className="our-doctor-inner-section">
                    <div className="our-doctor-left-section">
                        <img src="https://themesflat.com/html/medicare/images/member/1.jpg" alt=""/>
                    </div>
                    <div className="our-doctor-right-section">
                        <div className="our-doctor-information">
                            <div className="doctor-title">Dr: Mike Roger</div>
                            <div className="doctor-session">Principla Dentist</div>
                            <p className="doctor-paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh lorem, tristique a augue ac, vestibulum vestibulum nunc. In ultricies id risus tincidunt sed amet ultrices
                            </p>
                            <p className="doctor-paragraph">Nulla venenatis erat feugiat condimentum varius. In feugiat in nibh non scelerisque. Aenean non ante feugiat, iaculis aliquam leo.
                            </p>
                            <div className="doctor-social-media-items">
                                <div className="doctor-social-media-item">
                                    <Icon name="facebook" />
                                </div>
                                <div className="doctor-social-media-item">
                                    <Icon name="twitter"/>
                                </div>
                                <div className="doctor-social-media-item">
                                    <Icon name="basketball" />
                                </div>
                                <div className="doctor-social-media-item">
                                    <Icon name="pinterest" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default  OurDoctor;