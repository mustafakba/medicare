import styles from '../../Styles/WhiteButton.css'
import {Icon} from '../Icons'

function WhiteButton({text,iconName}) {
    return (
        <div className={styles}>
            <div className="white-button-side">
                <span className="white-button-left-side">
                    {text}
                </span>
                <span className="white-button-right-side">
                    <Icon name={iconName} size={12}/>
                </span>
            </div>
        </div>
    );
}

export default WhiteButton;
