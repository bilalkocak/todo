import React, {useEffect, useState} from 'react';
import {Modal, message} from 'antd';
import {
    collectionColors,
    collectionModalModes
} from "../../constant";
import AddCollectionButton from "../Common/Buttons/AddCollectionButton/AddCollectionButton";

import PropTypes from 'prop-types';
import './Modals.scss'
import {useDispatch, useSelector} from "react-redux";


const initialData = {
    name: "",
    desc: ""
}
const CollectionModal = ({title, submit, mode, toggle, isModalVisible}) => {
    const dispatch = useDispatch();
    const currentCollection = useSelector(state => state.collections.currentCollection)


    const [data, setData] = useState(initialData);
    const [color, setColor] = useState(0);


    useEffect(() => {
        if (mode.name === collectionModalModes.edit.name && isModalVisible) {
            setData(currentCollection)
            let index = collectionColors.indexOf(currentCollection.color)
            setColor(index)
        }
    }, [isModalVisible])

    const showModal = () => {
        toggle();
    };

    const handleCancel = () => {
        toggle();
    };

    const onChangeData = (e) => {
        let _data = {...data}
        _data[e.name] = e.value
        setData(_data)
    };


    const error = () => {
        message.error('Name does not be empty.', 3);
    };

    const onClickSubmit = () => {
        if (data.name) {
            dispatch(submit({
                ...data,
                color: collectionColors[color]
            }))
            setData(initialData)
            setColor(0)
            toggle()
        } else {
            error()
        }

    };
    const _afterClose = () => {
        setData(initialData)
        setColor(0)
    };


    return (
        <>
            {
                mode.name === collectionModalModes.add.name &&
                <div onClick={showModal}>
                    <AddCollectionButton text={'+ Add Collection'} width={330}/>
                </div>
            }

            <Modal afterClose={() => _afterClose()} footer={null} destroyOnClose={true} title={title}
                   visible={isModalVisible} onCancel={handleCancel}>
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
                    <button onClick={onClickSubmit} className={'customButton'}>{mode.submitText}</button>
                </div>
            </Modal>
        </>
    );
};
CollectionModal.prototype = {
    title: PropTypes.string.isRequired,
    submit: PropTypes.func.isRequired,
    mode: PropTypes.object.string
}
export default CollectionModal;
