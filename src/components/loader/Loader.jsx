import React from 'react';
import ReactLoading from 'react-loading';
import './Loader.scss';

const Loadre = () => {
    return (
        <ReactLoading className='loader' type={'spokes'} height={'10%'} width={'10%'} />
    );
}

export default Loadre;
