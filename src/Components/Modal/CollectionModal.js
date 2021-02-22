import React, {useState} from 'react';
import {Modal, message} from 'antd';
import {collectionColors} from "../../constant";
import AddCollectionButton from "../Common/Buttons/AddCollectionButton/AddCollectionButton";

import PropTypes from 'prop-types';
import './Modals.scss'
import {useDispatch} from "react-redux";


const initialData = {
    name: "",
    desc: ""
}
const CollectionModal = ({title, submit}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();

    const [data, setData] = useState(initialData);
    const [color, setColor] = useState(0);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onChangeData = (e) => {
        let _data = {...data}
        _data[e.name] = e.value
        setData(_data)
    };


    const error = () => {
        message.error('Name does not be empty.', 3);
    };

    const onClickSave = () => {
        if (data.name) {
            dispatch(submit({
                ...data,
                color: collectionColors[color]
            }))
            setData(initialData)
            setColor(0)
            setIsModalVisible(false)
        } else {
            error()
        }

    };


    return (
        <>
            <div onClick={showModal}>
                <AddCollectionButton text={'+ Add Collection'} width={330}/>
            </div>

            <Modal footer={null} destroyOnClose={true} title={title} visible={isModalVisible} onCancel={handleCancel}>
                <div className={'collectionModalContent'}>
                    <input type="text" placeholder={'My Collection'} name={'name'}
                           onChange={(e) => onChangeData(e.target)} value={data.name} className={'modalInput'}/>
                    <input type="text" placeholder={'Description'} name={'desc'}
                           onChange={(e) => onChangeData(e.target)} value={data.desc} className={'modalInput'}/>
                    <div className="collectionModalColor">
                        {
                            collectionColors.map((_color, index) => {
                                return <div key={index} onClick={() => setColor(index)} style={{
                                    borderColor: _color,
                                    backgroundColor: color === index ? _color : 'transparent'
                                }} className="option active"/>

                            })
                        }
                    </div>
                </div>
                <div className="collectionModalFooter">
                    <button onClick={onClickSave} className={'customButton'}>Save</button>
                </div>
            </Modal>
        </>
    );
};
CollectionModal.prototype = {
    title: PropTypes.string.isRequired,
    submit: PropTypes.func.isRequired
}
export default CollectionModal;
