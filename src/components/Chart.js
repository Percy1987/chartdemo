import React from 'react'
import LineChart from './LineChart';
import BarChart from './BarChart';
import databar from './databar'
import dataline from './dataline'

function Chart(props) {
    const isModel = props.model
    console.log(isModel);
    return (
        <>
            {isModel == "bars"
                ? <BarChart data={databar} />
                : <LineChart data={dataline} />
            }
        </> 
    )   
}

export default Chart;