import React, {useEffect} from 'react';
import {Typography, Statistic} from "antd";
import {useSelector, useDispatch} from "react-redux";
import {fetchCollection} from "../../../store/actions/collections";
import {fetchAllTasks} from "../../../store/actions/tasks";
import './Dashboard.scss'
import {filteredTasks, motivationRate} from "../../../helper";
import {FrownOutlined, MehOutlined, SmileOutlined} from "@ant-design/icons";
import DoughnutChart from "../../DoughnutChart/DoughnutChart";

const {Title} = Typography;
const customIcons = {
    1: <FrownOutlined/>,
    2: <FrownOutlined/>,
    3: <MehOutlined/>,
    4: <SmileOutlined/>,
    5: <SmileOutlined/>,
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
            <Title>Dashboard</Title>
            <section>
                <div className={'generalStats'}>
                    <Statistic title="Task Counts" value={filteredTasks(tasks).completed.length}
                               suffix={`/ ${tasks.length}`}/>
                    <Statistic title="Collection Counts" value={collections.length}/>

                    <Statistic title="Uncompleted Tasks" value={filteredTasks(tasks).unCompleted.length}/>
                    <Statistic title="Completed Tasks" value={filteredTasks(tasks).completed.length}/>
                </div>
                <div className="motivationFace">
                    {customIcons[Math.round(motivationRate(tasks))]}
                    <Title level={3}>Motivation Status: {motivationRate(tasks)}</Title>
                </div>
            </section>
            {
                tasks.length > 0 && <DoughnutChart tasks={tasks}/>
            }
        </div>
    );
};

export default Dashboard;
