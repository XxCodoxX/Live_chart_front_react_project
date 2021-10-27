import React from 'react';
import { Line } from 'react-chartjs-2'

const LineChart = (props) => {


    const chart = {

        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        datasets: [
            {
                label: 'Device Value',
                data: props.value,
                backgroundColor: [
                    'rgba(75,192,192,0.6)'
                ],
                borderWidth: 2
            }
        ],

    };



    return (

        <div>

            <Line data={chart} />
        </div>
    )



}


export default LineChart;