import React, {useEffect} from 'react';
import './Map.scss';

const Map = ({latitude ,longitude}) => {
    useEffect(() => {
        const ifameData = document.getElementById("iframeId");
        ifameData.src = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed&z=5`;
    },[latitude, longitude]);

    return (
        <div className='map-container'>
            <iframe id='iframeId' style={{height:'230px', width:'100%'}} title='map' src=''></iframe>
        </div>
    );
}

export default Map;
