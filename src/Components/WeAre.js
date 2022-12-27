import styles from '../Styles/WeAre.css'
import DarkButton from "./Shared/DarkButton";
import {Icon} from "./Icons";
import BlueBox from "./Shared/BlueBox";


function WeAre() {
    return (
        <div className={styles}>
          <div className="container-we-are">
              <div className="top-section">
                  <div className="left-section">
                      <div className="border">
                          <img src="https://themesflat.com/html/medicare/images/blog/about.jpg" alt=""/>
                      </div>
                  </div>
                  <div className="right-section">
                      <h5 className="welcome-section">WELCOME TO MEDICARE</h5>
                      <div className="we-are-title">
                          WHO WE ARE
                      </div>
                      <div className="we-are-title-line">
                      </div>
                      <p className="we-are-paragraph">
                          Lorem ipsum dolor sit amet, consectetur adipiscing. Nunc pharetra interdum iaculis. <br/> Vestibulum semper mauris felis, euismod velit consequat sed. Proin porttitor purus in <br/> odio egestas, sed efficitur nibh ultrices.
                      </p>
                      <p className="we-are-paragraph">
                          Morbi mattis sollicitudin libero ut finibus. Morbi imperdiet tortor ex, ut convallis nisi vestibulum eget. Phasellus hendrerit ut erat eget pharetra.
                      </p>


                      <div style={{maxWidth: '24%', flexWrap:'nowrap', marginTop: '50px'}}>
                          {/*
                          Bu satırla ilgili media-query'e göre max-width ayarı yapılacak
                          */}
                          <DarkButton text="OUR TEAM" iconName="user"/>
                      </div>
                  </div>
              </div>
              <div className="we-are-bottom-section">
                  <div className="we-are-bottom-container">
                      <BlueBox iconName="user"/>
                      <div className="numbers">
                          <div className="we-are-bottom-number">3928</div>
                          <div className="we-are-bottom-explanation"> Happy Clients</div>
                      </div>
                  </div>
                  <div className="we-are-bottom-container">
                      <BlueBox iconName="plaster" />
                      <div className="numbers">
                          <div className="we-are-bottom-number">650</div>
                          <div className="we-are-bottom-explanation">Equipment</div>
                      </div>
                  </div>
                  <div className="we-are-bottom-container">
                        <BlueBox iconName="like"/>
                      <div className="numbers">
                          <div className="we-are-bottom-number">3928</div>
                          <div className="we-are-bottom-explanation"> Happy Clients</div>
                      </div>
                  </div>
                  <div className="we-are-bottom-container">
                      <BlueBox iconName="heart"/>
                      <div className="numbers">
                          <div className="we-are-bottom-number">55</div>
                          <div className="we-are-bottom-explanation"> Our Doctor</div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
}

export default WeAre;
