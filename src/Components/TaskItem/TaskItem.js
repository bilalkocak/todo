import React from 'react';
import './TaskItem.scss'
import {CheckOutlined, DeleteOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";
import {updateTask, deleteTask} from "../../store/actions/tasks";
import AddCollectionButton from "../Common/Buttons/AddCollectionButton/AddCollectionButton";
import {useDispatch} from "react-redux";

const TaskItem = ({task}) => {
    const dispatch = useDispatch();

    const _deleteTask = () => {
        dispatch(deleteTask(task.id))
    }

    const toggleCheck = () => {
        let _task = {...task}
        _task.isDone = !task.isDone
        dispatch(updateTask(_task))
    }

    return (
        <div className={`taskItemContainer`}>
            <div className={'taskItemContainerLeft'} onClick={() => toggleCheck()}>
                <div className={`taskItemCheckbox ${task.isDone && 'active'}`}>
                    {
                        task.isDone && <CheckOutlined/>
                    }
                </div>
                <div>{task.text}</div>
            </div>

            <div className={'taskItemContainerRight'} onClick={() => _deleteTask()}>
                <DeleteOutlined/>
            </div>
        </div>
    );
};

AddCollectionButton.propTypes = {
    task: PropTypes.object.isRequired
};
export default TaskItem;
