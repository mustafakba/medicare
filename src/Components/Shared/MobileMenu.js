import style from '../../Styles/MobileMenu.css'
import {useState} from "react";
function MobileMenu(){

    const [burger_class,setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class,setMenuClass] = useState("menu")
    const [isMenuClicked,setIsMenuClicked] = useState("false")

    const updateMenu = () =>{
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu")
        }
        setIsMenuClicked(!isMenuClicked)

    }

    return(
        <div style={style}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}  ></div>
                    <div className={burger_class}  ></div>
                    <div className={burger_class}  ></div>
                </div>
            </nav>
            <div className={menu_class}>
                <div className="mobile-menu-item">Home</div>
                <div className="mobile-menu-item">About</div>
                <div className="mobile-menu-item">Doctor</div>
                <div className="mobile-menu-item">Services</div>
                <div className="mobile-menu-item">Portfolio</div>
                <div className="mobile-menu-item">Appointment</div>
                <div className="mobile-menu-item">Blogs</div>
                <div className="mobile-menu-item">Contact</div>
            </div>

        </div>
    )
}

export default MobileMenu;
