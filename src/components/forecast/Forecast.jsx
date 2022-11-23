import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { HiOutlineCalendarDays } from "react-icons/hi2";
import './Forecast.scss';

const Forecast = ({forecast}) => {
    const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    return (
        <>  
            <div className='title'><label >Forecast</label><HiOutlineCalendarDays/></div>
            <Accordion allowMultipleExpanded preExpanded={[0]}>
                    {forecast.list.slice(0,7).map((item, index) => {
                        return (
                            <AccordionItem key={index} uuid={index}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className="daily-item">
                                            <img src={`icons/${item.weather[0].icon}.png`} alt="weather-icon" className="icon-small" />
                                            <label className='day'>{forecastDays[index]}</label>
                                            <label className='desc'>{item.weather[0].description}</label>
                                            <label className='min-max'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="daily-details-grid">
                                        <div className="daily-details-grid-item">
                                            <label>Pressure</label>
                                            <label>{item.main.pressure}hPa</label>
                                        </div>
                                        <div className="daily-details-grid-item">
                                            <label>Humidity</label>
                                            <label>{item.main.humidity}%</label>
                                        </div>
                                        <div className="daily-details-grid-item">
                                            <label>Clouds</label>
                                            <label>{item.clouds.all}%</label>
                                        </div>
                                        <div className="daily-details-grid-item">
                                            <label>Wind</label>
                                            <label>{item.wind.speed}m/s</label>
                                        </div>
                                        <div className="daily-details-grid-item">
                                            <label>Sea level</label>
                                            <label>{item.main.sea_level}m</label>
                                        </div>
                                        <div className="daily-details-grid-item">
                                            <label>Feels like</label>
                                            <label>{item.main.feels_like}°C</label>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })}
            </Accordion>
        </>
    );
}

export default Forecast;
