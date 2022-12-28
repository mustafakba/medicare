import styles from '../Styles/Jobs.css'

function Jobs() {
    return(
        <div className={styles}>
                <div className="job-container">
                    <div className="flat-progress-item percent_85">
                            <span id="percent_85" className="progress-icon">
                                <span className="progress-content">
                                    <span>85%</span>
                                </span>
                            </span>
                            <div className="progress-name">WEB DESIGN</div>

                    </div>
                    <div className="flat-progress-item percent_50">
                            <span id="percent_50" className="progress-icon">
                                <span className="progress-content">
                                    <span>40%</span>
                                </span>
                            </span>
                            <div className="progress-name">TEETH CARE</div>
                    </div>
                    <div className="flat-progress-item percent_65">
                            <span id="percent_65" className="progress-icon">
                                <span className="progress-content">
                                    <span>65%</span>
                                </span>
                            </span>
                        <div className="progress-name">MARKETING</div>

                    </div>
                    <div className="flat-progress-item percent_70">
                        <span className="progress-icon">
                            <span className="progress-content">
                                <span>70%</span>
                            </span>
                        </span>
                        <div className="progress-name">DEVELOPMENT</div>
                    </div>
            </div>
        </div>
    )

}

export default Jobs;