import React, {useState} from 'react';
import TaskItem from "../TaskItem/TaskItem";
import AddTask from "../TaskItem/AddTask";
import {Typography} from "antd";

const {Title} = Typography;


const TaskList = () => {
    const [tasks, setTasks] = useState([
        {
            isActive: false,
            text: 'çöp at'
        },
        {
            isActive: true,
            text: 'poşet al'
        }]);
    return (
        <div>
            <Title level={5}>Tasks - 0</Title>

            <AddTask/>
            {
                tasks.filter(task => task.isActive === false).map((task) => {
                    return (
                        <TaskItem task={task}/>
                    )
                })
            }
            <Title level={5}>Completed - 4</Title>
            {
                tasks.filter(task => task.isActive === true).map((task) => {
                    return (
                        <TaskItem task={task}/>
                    )
                })
            }

        </div>
    );
};

export default TaskList;
