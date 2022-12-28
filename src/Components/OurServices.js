import styles from '../Styles/OurServices.css'
import BlueBox from "./Shared/BlueBox";



function OurServices() {
    return (
        <div style={styles}>
            <div className="our-services-container">
                <div className="services-left-section">
                    <img src="https://themesflat.com/html/medicare/images/blog/services.jpg" alt=""/>
                </div>
            <div className="services-right-section">
                <div className="services-title-section">
                    <div className="services-title">
                        <span>OUR </span>
                        <span className="services-bold-title"> SERVICES</span>
                    </div>
                </div>
                <div className="thin-services-paragraph">
                    Lorem ipsum dolor sit amet sed tincidunt suscipit id malesuada.
                </div>
                <div className="treatments">
                    <div className="left-col">
                        <div className="mini-component">
                            <div className="mini-explanation">
                                <div className="mini-explanation-title">
                                    ORAL SURGERY
                                </div>
                                <div className="mini-explanation-paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, ullam.
                                </div>
                            </div>
                            <BlueBox iconName="syringe" />
                        </div>
                        <div className="mini-component">
                            <div className="mini-explanation">
                                <div className="mini-explanation-title">
                                    DENTAL CARE
                                </div>
                                <div className="mini-explanation-paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, ullam.
                                </div>
                            </div>
                            <BlueBox iconName="glass" />
                        </div>
                        <div className="mini-component">
                            <div className="mini-explanation">
                                <div className="mini-explanation-title">
                                    COSMETIC DENTISTRY
                                </div>
                                <div className="mini-explanation-paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, ullam.
                                </div>
                            </div>
                            <BlueBox iconName="tooth" />
                        </div>
                    </div>
                    <div className="right-col">
                        <div className="mini-component">
                            <BlueBox iconName="tooth" />
                            <div className="mini-explanation">
                                <div className="mini-explanation-title">
                                    ORAL SURGERY
                                </div>
                                <div className="mini-explanation-paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </div>
                            </div>

                        </div>
                        <div className="mini-component">
                            <BlueBox iconName="brush" />
                            <div className="mini-explanation">
                                <div className="mini-explanation-title">
                                    DENTAL CARE

                                </div>
                                <div className="mini-explanation-paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </div>
                            </div>

                        </div>
                        <div className="mini-component">
                            <BlueBox iconName="lips" />
                            <div className="mini-explanation">
                                <div className="mini-explanation-title">
                                    CARE ADVICE
                                </div>
                                <div className="mini-explanation-paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
}

export default OurServices;
