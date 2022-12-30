import styles from '../Styles/OurPortfolio.css'
import TopTitle from "./Shared/TopTitle";
import {Icon} from "./Icons";

function OurPortfolio() {
    return (
        <div style={styles}>
            <div className="our-portfolio-container">
               <TopTitle firstWord={"OUR"} secondWord={"PORTFOLIO"} backgroundLetter={"P"} />
                <ul className="portfolio-types">
                    <li className="portfolio-type active">
                        <a href="#" id="">ALL</a>
                    </li>
                    <li className="portfolio-type ">
                        <a href="#" id="">DENTAL</a>
                    </li>
                    <li className="portfolio-type">
                        <a href="#" id="">WEB DESIGN</a>
                    </li>
                    <li className="portfolio-type">
                        <a href="#" id="">PHOTOSHOP</a>
                    </li>
                    <li className="portfolio-type">
                        <a href="#" id="">VIDEOS</a>
                    </li>

                </ul>
            </div>
            <div className="image-containers">
                <div className="image-containers-left-section">
                    <div className="top-line-images">
                        <div className="left-image container-relative">
                            <div className="overlay">
                                    <h4 className="overlay-title">
                                        COSMETIC DENTISTRY
                                    </h4>
                                    <span className="overlay-content">
                                    Health Dental
                                    </span>
                                        <div className="overlay-icon"><Icon size="16" name="right"/></div>
                            </div>
                            <img className="portfolio-image" src="https://themesflat.com/html/medicare/images/portfolio/v1.1.jpg" alt=""/>
                        </div>
                        <div className="right-image container-relative">
                            <div className="overlay">
                                <h4 className="overlay-title">
                                    COSMETIC DENTISTRY
                                </h4>
                                <span className="overlay-content">
                                    Health Dental
                                    </span>
                                <div className="overlay-icon"><Icon size="16" name="right"/></div>
                            </div>
                            <img className="portfolio-image" src="https://themesflat.com/html/medicare/images/portfolio/v1.2.jpg" alt=""/>
                        </div>
                    </div>
                    <div style={{marginTop:'-5px'}} className="left-section-bottom-image container-relative">
                        <div className="overlay">
                            <h4 className="overlay-title">
                                COSMETIC DENTISTRY
                            </h4>
                            <span className="overlay-content">
                                    Health Dental
                                    </span>
                            <div className="overlay-icon"><Icon size="16" name="right"/></div>
                        </div>
                        <img className="portfolio-image" src="https://themesflat.com/html/medicare/images/portfolio/v1.5.jpg" alt=""/>
                    </div>
                </div>
                <div className="image-containers-right-section ">
                    <div className="right-section-left-image container-relative">
                        <div className="overlay">
                            <h4 className="overlay-title">
                                COSMETIC DENTISTRY
                            </h4>
                            <span className="overlay-content">
                                    Health Dental
                                    </span>
                            <div className="overlay-icon"><Icon size="16" name="right"/></div>
                        </div>
                        <img className="portfolio-image" src="https://themesflat.com/html/medicare/images/portfolio/v1.3.jpg" alt=""/>
                    </div>
                        <div className="right-section-right-images">

                          <div className="container-relative">
                              <div className="overlay">
                                  <h4 className="overlay-title">
                                      COSMETIC DENTISTRY
                                  </h4>
                                  <span className="overlay-content">
                                    Health Dental
                                    </span>
                                  <div className="overlay-icon"><Icon size="16" name="right"/></div>
                              </div>
                              <img className="portfolio-image" src="https://themesflat.com/html/medicare/images/portfolio/v1.4.jpg" alt=""/>
                          </div>
                            <div className="container-relative">
                                <div className="overlay">
                                    <h4 className="overlay-title">
                                        COSMETIC DENTISTRY
                                    </h4>
                                    <span className="overlay-content">
                                    Health Dental
                                    </span>
                                    <div className="overlay-icon"><Icon size="16" name="right"/></div>
                                </div>
                                <img className="portfolio-image" src="https://themesflat.com/html/medicare/images/portfolio/v1.6.jpg" alt=""/>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default OurPortfolio;