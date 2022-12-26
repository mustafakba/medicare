import styles from '../../Styles/Header.modules.css'
function Header() {
    return (
        <div className="{styles}">
           <div className="container">
               <div className="logo">
                   <img src="https://themesflat.com/html/medicare/images/logo.png" alt=""/>
               </div>
               <ul className="menuItems">
                   <li className="menuItem menuItem-active">
                    HOME
                   </li>
                   <li className="menuItem">ABOUT</li>
                   <li className="menuItem">DOCTOR</li>
                   <li className="menuItem">SERVICES</li>
                   <li className="menuItem">PORTFOLIO</li>
                   <li className="menuItem">APPOINTMENT</li>
                   <li className="menuItem">BLOGS</li>
                   <li className="menuItem">CONTACT</li>
               </ul>
               <div className="language-section">
                   <div className="languages">
                       <span className="language">EN</span>
                       <span className="">/</span>
                       <span className={"language"}>FR</span>
                   </div>
                   <div className="line"></div>
                   <div className="language-icon">
                       <img src="https://themesflat.com/html/medicare/images/icon/btn-menu-activet.png" alt=""/>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default Header;
