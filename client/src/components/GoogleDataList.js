import React from 'react';

import GoogleDataCard from './GoogleDataCard';

let GoogleDataList = props => {
    console.log('List: ', props);
    return (
        <div>
            {props.googleData.map(playerData => {
                return(
                    <GoogleDataCard key={playerData.id} playerData={playerData} />
                )
            })}
        </div>
    )
}

export default GoogleDataList;