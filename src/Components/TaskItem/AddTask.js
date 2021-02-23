import React, {useState} from 'react';
import {PlusOutlined} from "@ant-design/icons";
import {addTask} from "../../store/actions/tasks";
import {useDispatch, useSelector} from "react-redux";

const AddTask = () => {
    const dispatch = useDispatch();
    const collection = useSelector(state => state.collections.currentCollection)
    const [text, setText] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && text) {
            dispatch(addTask({text, collectionId: collection.id, isDone: false}))
            setText('')
        }
    }

    const onChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <div className={`addTaskInput`}>
                <div className={'addTaskIcon'} style={{ backgroundColor: collection?.color }}><PlusOutlined/></div>
                <input onKeyDown={handleKeyDown} placeholder={'Add task'} value={text} onChange={(e) => onChange(e)}
                       type="text"/>
            </div>
        </div>
    );
};

export default AddTask;
