import React from 'react';
import {PlusOutlined} from "@ant-design/icons";

const AddTask = () => {
    return (
        <div>
            <div className={`addTaskInput`}>
                <div className={'addTaskIcon'}><PlusOutlined/></div>
                <input placeholder={'Add task'} type="text"/>
            </div>
        </div>
    );
};

export default AddTask;
