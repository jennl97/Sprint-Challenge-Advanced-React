import React from 'react';

let GoogleDataCard = props => {
    return (
        <div className="app">
            <div className="dataCard">
                <h2>Player Name: {props.playerData.name}</h2>
                <p>Country Played For: {props.playerData.country}</p>
                <p>Number of Google Searches: {props.playerData.searches}</p>

            </div>
        </div>
    )
}

export default GoogleDataCard;