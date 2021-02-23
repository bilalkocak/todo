import React, {useEffect} from 'react';
import {Typography, Statistic} from "antd";
import {useSelector, useDispatch} from "react-redux";
import {fetchCollection} from "../../../store/actions/collections";
import {fetchAllTasks} from "../../../store/actions/tasks";
import './Dashboard.scss'
import {filteredTasks, motivationRate} from "../../../helper";
import {FrownOutlined, MehOutlined, SmileOutlined} from "@ant-design/icons";
import {collectionColors} from "../../../constant";

const {Title} = Typography;
const customIcons = {
    1: {
        icon: <FrownOutlined/>,
        color: collectionColors[3]
    },
    2: {
        icon: <FrownOutlined/>,
        color: collectionColors[3]
    },
    3: {
        icon: <MehOutlined/>,
        color: collectionColors[1]
    },
    4: {
        icon: <SmileOutlined/>,
        color: collectionColors[5]
    },
    5: {
        icon: <SmileOutlined/>,
        color: collectionColors[5]
    }
};

const Dashboard = () => {
    const collections = useSelector(state => state.collections.collections)
    const tasks = useSelector(state => state.tasks.tasks)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllTasks())
        dispatch(fetchCollection())
    }, [])
    return (
        <div className={'dashboardContainer'}>

            <section className={'stats'}>
                <Title>Welcome</Title>

                <div className={'content'}>
                    <div className="motivationFace fade-in"
                         style={{color: customIcons[Math.round(motivationRate(tasks))]?.color}}>
                        {customIcons[Math.round(motivationRate(tasks))]?.icon}
                        <Title level={4}>Motivation Status: {motivationRate(tasks)}</Title>
                    </div>
                    <div className={'generalStats'}>
                        <Statistic title="Task Counts" value={filteredTasks(tasks).completed.length}
                                   suffix={`/ ${tasks.length}`}/>
                        <Statistic title="Collection Counts" value={collections.length}/>

                        <Statistic title="Uncompleted" value={filteredTasks(tasks).unCompleted.length}/>
                        <Statistic title="Completed" value={filteredTasks(tasks).completed.length}/>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Dashboard;
