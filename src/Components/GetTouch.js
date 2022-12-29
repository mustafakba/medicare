import styles from '../Styles/GetTouch.css'
import Iframe from "react-iframe";
import TopTitle from "./Shared/TopTitle";
function GetTouch(){
    return(
        <div className={styles}>
            <div className="get-touch-container">
                <div className="get-touch-left-section">
                    <Iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12033.348658171597!2d28.8675745!3d41.0616221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2f8f99536fdeab1!2sNur%20Parke!5e0!3m2!1str!2str!4v1672266211752!5m2!1str!2str"
                        style="border:0;" allowFullScreen="" loading="lazy" className="map"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>
                <div className="get-touch-right-section">
                        <TopTitle backgroundLetter={"G"} firstWord={"GET IN"} secondWord={"TOUCH"} />
                </div>
            </div>
        </div>
    )
}

export default GetTouch;