import React from 'react';
import {LeftOutlined} from "@ant-design/icons";
import './Detail.scss'
import {Typography} from "antd";

import TaskList from "../../TaskList/TaskList";
const {Title} = Typography;

const Detail = () => {
    return (
        <div className={'detailContainer'}>
            <div className="detailHeader">
                <div className={'customButton backButton'}>
                    <LeftOutlined/>
                </div>
                <Title level={3}>Collection Name</Title>
            </div>
            <TaskList/>
        </div>
    );
};

export default Detail;
