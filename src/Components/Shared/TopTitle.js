import styles from '../../Styles/TopTitle.css'
import React from "react";
function TopTitle({firstWord,secondWord,backgroundLetter}) {
    return(
        <div style={styles}>
            <div className="title-component-section">
                <div className="title-component-title">
                    <span className="background-letter">{backgroundLetter}</span>
                    <span>{firstWord} </span>
                    <span className="second-word">{secondWord}</span>
                </div>
            </div>
        </div>
    )
}

export default TopTitle;