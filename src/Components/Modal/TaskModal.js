import React, {useState, useEffect} from 'react';
import {Modal, message, Rate} from 'antd';

import './Modals.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCurrentTask} from "../../store/actions/tasks";
import {updateTask} from "../../store/actions/tasks";
import {FrownOutlined, MehOutlined, SmileOutlined} from "@ant-design/icons";


const customIcons = {
    1: <FrownOutlined/>,
    2: <FrownOutlined/>,
    3: <MehOutlined/>,
    4: <SmileOutlined/>,
    5: <SmileOutlined/>,
};

const initialData = {
    text: "",
    date: "",
    motivation: 0
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

    const onChangeMotivation = (e) => {
        setData({...data, motivation: e})
    }


    return (
        <>
            <Modal afterClose={() => _afterClose()} footer={null} destroyOnClose={true} title={'Edit task'}
                   visible={isModalVisible}
                   onCancel={handleCancel}>
                <div className={'collectionModalContent'}>
                    <input type="text" placeholder={'Task text'} name={'text'}
                           onChange={(e) => onChangeData(e.target)} value={data.text} className={'modalInput'}/>
                    <div className="motivation">
                        How is your motivation ?<Rate value={data.motivation} onChange={(e) => onChangeMotivation(e)}
                                                      style={{fontSize: 24, marginLeft: 15}}
                                                      character={({index}) => customIcons[index + 1]}/>
                    </div>

                </div>
                <div className="collectionModalFooter">
                    <button onClick={onClickUpdate} className={'customButton'}>Update</button>
                </div>
            </Modal>
        </>
    );
};

export default TaskModal;
