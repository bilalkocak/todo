import React from 'react';
import TaskItem from "../TaskItem/TaskItem";
import AddTask from "../TaskItem/AddTask";
import {Typography} from "antd";
import {useSelector} from "react-redux";
import TaskModal from "../Modal/TaskModal";
import {filteredTasks} from "../../helper";

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
                                filteredTasks(tasks).unCompleted.map((task) => {
                                    return (
                                        <TaskItem key={'task-' + task.id} task={task}/>
                                    )
                                })
                            }
                            <Title level={5}>Completed - {filteredTasks(tasks).completed.length}</Title>
                            {
                                filteredTasks(tasks).completed.map((task) => {
                                    return (
                                        <TaskItem key={'task-' + task.id} task={task}/>
                                    )
                                })
                            }</>
                    )
                }
                <TaskModal/>

            </div>
        );
    }
;

export default TaskList;
