import React from 'react';
import {Doughnut} from "@reactchartjs/react-chart.js";
import {filteredTasks} from "../../helper";
import PropTypes from 'prop-types';


const DoughnutChart = ({tasks}) => {
    const data = {
        labels: ['Uncompleted', 'Completed'],
        datasets: [
            {
                data: [filteredTasks(tasks).unCompleted.length, filteredTasks(tasks).completed.length],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }
    return (
        <Doughnut data={data} options={{
            legend: {
                labels: {
                    fontColor: 'white',
                    fontSize: 18
                }
            },
        }}/>
    );
};
DoughnutChart.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default DoughnutChart;
