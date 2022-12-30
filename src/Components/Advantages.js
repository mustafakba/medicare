import styles from '../Styles/Advantages.css'
import {Icon} from "./Icons";
import {BrowserRouter as Router} from 'react-router-dom'
import DarkButton from "./Shared/DarkButton";
import {useState} from 'react'
import TopTitle from "./Shared/TopTitle";

function Advantages() {
    const [activeIndex, setActiveIndex] = useState(0)
    const items = [1,2,3,4,5];
    const contents =
        [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor et urna faucibus convallis eu Mauris vitae dolor et urna faucibus convallis eu",
            "Phasellus eget eleifend eros. Donec sed risus cursus, scelerisque nisl non, consectetur libero. Fusce eu auctor nunc. Integer non dolor mauris. Vivamus malesuada",
            "Morbi eu luctus nibh. Mauris eros dui, consectetur vel ullamcorper eu, accumsan viverra odio. Sed at tellus in arcu rhoncus commodo ac et turpis. Vestibulum porta vestibulum eros," ,
            "Praesent dapibus sem aliquet neque efficitur placerat. Mauris vehicula quam a eros dapibus semper. Nunc lectus mi, mollis sed tristique vitae"
            ,"MUSTAFA KABA -- MEDICARE WEB APP -- CLOUD BILISIM "

        ]
    return  (
       <Router>
           <div className={styles}>
               <div className="advantages-container">
                    <TopTitle firstWord={"OUR"} secondWord={"ADVANTAGES"} backgroundLetter={"A"} />
                   <div className="advantages-content">
                       <div className="advantages-left-section">
                           <div className="advantages-box">
                               <div className="advantages-router">
                                   <div className="advantages-bottom-container">
                                       {
                                           items.map((item,index) =>{
                                               return(
                                                   <div key={index} onClick={ () => setActiveIndex(index) }  className={activeIndex === index ? 'advantages-item active': 'advantages-item' }>
                                                       <div className="advantages-box">
                                                           <div className={activeIndex === index ? 'advantages-box-content active': 'advantages-box-content' }>
                                                               <div className="advantages-box-content-icon">
                                                                   <div>
                                                                       {index + 1}
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               )
                                           })
                                       }
                                   </div>
                               </div>
                               <div className="advantages-title">
                                   QUALIFIED CONSULTING
                               </div>
                               <div className="advantages-explanation">
                                   {
                                       contents[activeIndex]
                                   }
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