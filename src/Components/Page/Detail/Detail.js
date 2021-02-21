import React from 'react';
import {LeftOutlined} from "@ant-design/icons";
import './Detail.scss'
import {Typography} from "antd";
import {useHistory} from 'react-router-dom'

import TaskList from "../../TaskList/TaskList";

const {Title} = Typography;

const Detail = () => {
    const history = useHistory()
    return (
        <div className={'detailContainer'}>
            <div className="detailHeader">
                <div className={'customButton backButton'} onClick={() => history.push('/')}>
                    <LeftOutlined/>
                </div>
                <Title level={3}>Collection Name</Title>
            </div>
            <TaskList/>
        </div>
    );
};

export default Detail;
