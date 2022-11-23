import React, {useState} from 'react';
import {AsyncPaginate} from 'react-select-async-paginate';
import {GEO_API_URL, geoApiOptions} from '../../api';
// import { BsSun, BsMoonStars } from "react-icons/bs";
import './Search.scss';

const Search = ({onSearchChange}) => {
    const [searched, setSearched] = useState(null);
    // const [isNightMode, setIsNightMode] = useState(false);

    const handleOnChange = (searchedData) => {
        setSearched(searchedData);
        onSearchChange(searchedData);
    }

    const loadOptions = async (inputValue) => {
        return await fetch(`${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                return {
                    options: response.data.map(city => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }

    // const changeMode = () => {
    //     setIsNightMode( prevState => !prevState)
    // }

    return (
        <div className='top-container'>
            <div className='search'>
            <AsyncPaginate
                placeholder="Search for city..."
                debounceTimeout={500}
                value={searched}
                onChange={handleOnChange}
                loadOptions={loadOptions}
                />
            </div>    
            {/* <div className='mode' onClick={changeMode}>
                {isNightMode ? <BsMoonStars/> : <BsSun/>}
            </div> */}
        </div>
        );
}

export default Search;
