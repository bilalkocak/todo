import React, {useState, useEffect} from 'react';
import TaskItem from "../TaskItem/TaskItem";
import AddTask from "../TaskItem/AddTask";
import {Typography} from "antd";
import {useSelector} from "react-redux";

const {Title} = Typography;


const TaskList = () => {
    const tasks = useSelector(state => state.tasks.tasks)


    return (
        <div>
            {
                tasks && (
                    <>
                        <Title level={5}>Tasks - {tasks.length}</Title>
                        <AddTask/>
                        {
                            tasks.filter(task => task.isDone === false).map((task) => {
                                return (
                                    <TaskItem key={'task-' + task.id} task={task}/>
                                )
                            })
                        }
                        <Title level={5}>Completed - 4</Title>
                        {
                            tasks.filter(task => task.isDone === true).map((task) => {
                                return (
                                    <TaskItem key={'task-' + task.id} task={task}/>
                                )
                            })
                        }</>
                )
            }

        </div>
    );
};

export default TaskList;
