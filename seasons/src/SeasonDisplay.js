import React from 'react';
import './SeasonDisplay.css';

const getSeason = (lat, month) => {
    return month > 2 && month < 9 ? lat > 0 ? 'summer' : 'winter' : lat > 0 ? 'winter' : 'summer';
};

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },

    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake'
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay;