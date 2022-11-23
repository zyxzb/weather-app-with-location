import React from 'react';
import './Info.scss';
import { SlLocationPin } from "react-icons/sl";

const Info = ({error}) => {
    return (
        <div className='info'>
            {error ? <p>{error}</p> : <div><p>Select locations</p><SlLocationPin/></div>}
        </div>
    );
}

export default Info;
