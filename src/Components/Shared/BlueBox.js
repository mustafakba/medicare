import styles from '../../Styles/BlueBox.css'
import {Icon} from '../Icons'

function BlueBox({iconName}) {
    return (
        <div className={styles}>
            <div className="item">
                <div className="box">
                    <div className="box-content">
                        <div className="box-content-icon">
                            <Icon name={iconName} size={24}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlueBox;
