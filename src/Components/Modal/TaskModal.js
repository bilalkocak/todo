import React, {useState, useEffect} from 'react';
import {Modal, message} from 'antd';

import './Modals.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCurrentTask} from "../../store/actions/tasks";
import {updateTask} from "../../store/actions/tasks";


const initialData = {
    text: "",
    date: ""
}
const TaskModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();
    const currentTask = useSelector(state => state.tasks.currentTask)

    const [data, setData] = useState(initialData);

    useEffect(() => {
        setData(initialData)
    }, [])

    useEffect(() => {
        if (currentTask) {
            setData(currentTask)
            setIsModalVisible(true)
        }
    }, [currentTask])


    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onChangeData = (e) => {
        let _data = {...data}
        _data[e.name] = e.value
        setData(_data)
    };

    const _afterClose = () => {
        setData(initialData)
        dispatch(setCurrentTask(null))
    };


    const error = () => {
        message.error('Text area does not be empty.', 3);
    };

    const onClickUpdate = () => {
        if (data.text) {
            dispatch(updateTask(data))
            setIsModalVisible(false)
        } else {
            error()
        }

    };


    return (
        <>
            <Modal afterClose={() => _afterClose()} footer={null} destroyOnClose={true} title={'Edit task'}
                   visible={isModalVisible}
                   onCancel={handleCancel}>
                <div className={'collectionModalContent'}>
                    <input type="text" placeholder={'Task text'} name={'text'}
                           onChange={(e) => onChangeData(e.target)} value={data.text} className={'modalInput'}/>

                </div>
                <div className="collectionModalFooter">
                    <button onClick={onClickUpdate} className={'customButton'}>Update</button>
                </div>
            </Modal>
        </>
    );
};

export default TaskModal;
