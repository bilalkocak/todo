import React from 'react';
import {Doughnut} from "@reactchartjs/react-chart.js";
import {Collapse} from "react-collapse";
import {filteredTasks} from "../../helper";


const DetailCollapse = ({isOpen, collection, tasks}) => {
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
        <Collapse isOpened={isOpen} initialStyle={{height: '0px', overflow: 'hidden'}}>
            <div className={'chart'}>
                <Doughnut data={data} options={{
                    legend: {
                        labels: {
                            fontColor: 'white',
                            fontSize: 18
                        }
                    },
                }}/>
            </div>
        </Collapse>
    );
};

export default DetailCollapse;
