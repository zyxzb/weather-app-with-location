import React, {useState, useEffect} from 'react';
import {BsSun, BsMoonStars} from "react-icons/bs";

const storageTheme = () => {
    let theme = 'dark-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme
}

const ToggleMode = () => {
    const [isNightMode, setIsNightMode] = useState(false);
    const [theme, setTheme] = useState(storageTheme());

    const changeMode = () => {
        setIsNightMode(prevState => !prevState)
    }

    const handleChangeTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme')
        } else {
            setTheme('light-theme')
        }
    }

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <div className='toggle-container' onClick={handleChangeTheme}>
            <div className='mode' onClick={changeMode}>
                {isNightMode
                    ? <BsMoonStars/>
                    : <BsSun/>}
            </div>
        </div>
    );
}

export default ToggleMode;
