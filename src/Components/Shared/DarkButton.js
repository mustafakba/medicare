import styles from '../../Styles/DarkButton.css'
import {Icon} from '../Icons'

function DarkButton({text,iconName}) {
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

export default DarkButton;
