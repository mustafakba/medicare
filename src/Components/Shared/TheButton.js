import {RiPencilFill} from "react-icons/ri";
import styles from '../../Styles/TheButton.css'
import {Icon} from '../Icons'

function TheButton({text,iconName}) {
    return (
        <div className={styles}>
            <div className="button-side">
                <span className="button-left-side">
                    {text}
                </span>
                <span className="button-right-side">
                    <Icon name={iconName} size={12}/>
                </span>
            </div>
        </div>
    );
}

export default TheButton;
