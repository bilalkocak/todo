import React from 'react';
import './TaskItem.scss'
import {Modal} from "antd";
import {CheckOutlined, EditOutlined, DeleteOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";
import {updateTask, deleteTask, setCurrentTask} from "../../store/actions/tasks";
import {useDispatch} from "react-redux";
import {ExclamationCircleOutlined} from "@ant-design/icons";

const {confirm} = Modal;

const TaskItem = ({task}) => {
    const dispatch = useDispatch();


    const _deleteTask = () => {
        dispatch(deleteTask(task.id))
    }

    const _editTask = () => {
        dispatch(setCurrentTask(task))
    }

    const toggleCheck = () => {
        let _task = {...task}
        _task.isDone = !task.isDone
        dispatch(updateTask(_task))
    }

    const showDeleteConfirm = () => {
        confirm({
            title: 'Are you sure delete this task?',
            icon: <ExclamationCircleOutlined/>,
            content: 'this task will be deleted completely.',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                _deleteTask()
            },
            onCancel() {
                console.log('Cancel');
            },
        });
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

            <div className={'taskItemContainerRight'}>
                <div className={'taskButton'} onClick={() => _editTask()}>
                    <EditOutlined/>
                </div>
                <div className={'taskButton'} onClick={() => showDeleteConfirm()}>
                    <DeleteOutlined/>
                </div>
            </div>
        </div>
    );
};

TaskItem.propTypes = {
    task: PropTypes.object.isRequired
};
export default TaskItem;
