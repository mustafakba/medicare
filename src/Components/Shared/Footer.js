import styles from '../../Styles/Footer.css'
function Footer() {


    return(
        <div style={styles}>
            <div className="footer-container">
                <div className="footer-box">
                    <div className="box-title">
                        <img src="https://themesflat.com/html/medicare/images/logo-footer@2x.png" alt=""/>
                    </div>
                    <div className="box-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit. </p></div>
                </div>
                <div className="footer-box">
                    <div className="box-title">
                        <h5 className="contact-us">CONTACT US</h5>
                    </div>
                    <div className="box-content">
                        <p>Adress: 151 Charlotte Street, London, UK.</p>
                        <p>Email: Admin@medicare.com</p>
                        <p>Phone: +89 123 456 789 .</p>
                    </div>
                </div>
                <div className="footer-box">
                    <div className="box-title">
                        <h5 className="working-hours">
                            WORKING HOURS
                        </h5>
                    </div>
                    <div className="box-content">
                        <p>Monday to Friday: 08:00 AM - 17:00 pm</p>
                        <p>Saturday: 09:00 AM - 15:00 pm</p>
                        <p>Sunday: Closed</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Footer;