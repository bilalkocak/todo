import React, {useState} from 'react';
import './TaskItem.scss'
import {CheckOutlined, DeleteOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";
import AddCollectionButton from "../Common/Buttons/AddCollectionButton/AddCollectionButton";

const TaskItem = ({task}) => {
    const [isChecked, setIsChecked] = useState(false)

    const deleteTask = () => {
        // TODO delete task
    }

    return (
        <div className={`taskItemContainer`}>
            <div className={'taskItemContainerLeft'} onClick={() => setIsChecked(!isChecked)}>
                <div className={`taskItemCheckbox ${isChecked && 'active'}`}>
                    {
                        isChecked && <CheckOutlined/>
                    }
                </div>
                <div>{task.text}</div>
            </div>

            <div className={'taskItemContainerRight'} onClick={() => deleteTask}>
                <DeleteOutlined/>
            </div>
        </div>
    );
};

AddCollectionButton.propTypes = {
    task: PropTypes.object.isRequired
};
export default TaskItem;
