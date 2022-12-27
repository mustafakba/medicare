import {RiPencilFill} from "react-icons/ri";
import styles from '../../Styles/TheButton.css'

function TheButton() {
    return (
        <div className={styles}>
            <div className="button-side">
                <span className="button-left-side">
                    APPOINTMENT
                </span>
                <span className="button-right-side">
                    <RiPencilFill/>
                </span>
            </div>
        </div>
    );
}

export default TheButton;
