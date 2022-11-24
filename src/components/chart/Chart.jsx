import React from 'react';
import './Chart.scss';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import {forecastDays} from 'data';

const Chart = ({forecast}) => {
    const data = [];

    for (let i = 0; i < forecastDays.length; i++) {
        const obj = {};
        obj['name'] = `${forecastDays[i]}`;
        obj['temperature'] = Number(forecast.list[i].main.temp);
        data.push(obj);
    }

    return (
        <div className='chart-container'>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 20
                }}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Line
                        type="monotone"
                        dataKey="temperature"
                        stroke="#333"
                        activeDot={{
                        r: 8
                    }}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
