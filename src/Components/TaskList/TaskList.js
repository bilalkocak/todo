import React, {useState, useEffect} from 'react';
import TaskItem from "../TaskItem/TaskItem";
import AddTask from "../TaskItem/AddTask";
import {Typography} from "antd";
import {fetchTasks} from "../../store/actions/tasks";
import {useDispatch, useSelector} from "react-redux";

const {Title} = Typography;


const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks)

    useEffect(() => {
        dispatch(fetchTasks(1))
    }, [])

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
