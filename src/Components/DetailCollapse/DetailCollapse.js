import React from 'react';
import {Collapse} from "react-collapse";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import PropTypes from 'prop-types';

import './DetailCollapse.scss'


const DetailCollapse = ({isOpen, tasks}) => {

    return (
        <Collapse isOpened={isOpen} initialStyle={{height: '0px', overflow: 'hidden'}}>
            <div className={'collapse'}>
                <DoughnutChart tasks={tasks}/>
            </div>
        </Collapse>
    );
};

DetailCollapse.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default DetailCollapse;
