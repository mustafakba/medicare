import styles from '../Styles/Advantages.css'
import {Icon} from "./Icons";
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch , Route} from "react-router-dom";
import {useState} from "react";
import DarkButton from "./Shared/DarkButton";
import WhiteButton from "./Shared/WhiteButton";

function Advantages() {
    return  (
       <Router>
           <div className={styles}>
               <div className="advantages-container">
                   <div className="title-section">
                       <div className="title">
                           <span>OUR </span>
                           <span className="bold-title"> ADVANTAGES</span>
                       </div>
                   </div>
                   <div className="advantages-content">
                       <div className="advantages-left-section">
                           <div className="advantages-box">
                               <div className="advantages-router">
                                   <div className="advantages-bottom-container">
                                       <div className="advantages-item">
                                               <div className="advantages-box active">
                                                   <div className="advantages-box-content">
                                                       <div className="advantages-box-content-icon">
                                                           <span>I</span>
                                                       </div>
                                                   </div>
                                               </div>
                                       </div>
                                       <div className="advantages-item">
                                           <div className="advantages-box">
                                               <div className="advantages-box-content">
                                                   <div className="advantages-box-content-icon">
                                                       <span>II</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="advantages-item">
                                           <div className="advantages-box">
                                               <div className="advantages-box-content">
                                                   <div className="advantages-box-content-icon">
                                                       <span>III</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="advantages-item">
                                           <div className="advantages-box">
                                               <div className="advantages-box-content">
                                                   <div className="advantages-box-content-icon">
                                                       <span>IV</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="advantages-item">
                                           <div className="advantages-box">
                                               <div className="advantages-box-content">
                                                   <div className="advantages-box-content-icon">
                                                       <span>V</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="advantages-title">
                                   QUALIFIED CONSULTING
                               </div>
                               <div className="advantages-explanation">
                                    <p>
                                        Lorem ipsum sit amet, consectetur adipiscing elit. Aenean ullamcorper non lectus eu posuere. Cras dapibus lacus eu varius. In in scelerisque nunc, non vulputate felis. Cras at sagittis lorem lorem.
                                    </p>
                               </div>
                               <div className="advantage-button-area">
                                   <span style={{marginLeft:'35px'}}><DarkButton text="VIEW DETAIL" iconName="right"/></span>
                               </div>
                           </div>

                       </div>
                       <div className="advantages-right-section">
                           <div className="image-box">
                               <img src="https://themesflat.com/html/medicare/images/advantage.jpg" alt=""/>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </Router>
    );
}

export default Advantages;