import React from 'react';
import TaskItem from "../TaskItem/TaskItem";
import AddTask from "../TaskItem/AddTask";
import {Typography, Empty} from "antd";
import TaskModal from "../Modal/TaskModal";
import {filteredTasks} from "../../helper";

const {Title} = Typography;


const TaskList = ({tasks}) => {


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
                            {tasks.length ? (
                                    <>

                                        <Title level={5}>Completed - {filteredTasks(tasks).completed.length}</Title>
                                        {
                                            filteredTasks(tasks).completed.map((task) => {
                                                return (
                                                    <TaskItem key={'task-' + task.id} task={task}/>
                                                )
                                            })
                                        }
                                    </>
                                ) :
                                <div className={'emptyArea'}>
                                    <Empty description={''}/>
                                    <Title level={2}>You have no task.</Title>
                                </div>

                            }
                        </>
                    )
                }
                <TaskModal/>
            </div>
        );
    }
;

export default TaskList;
