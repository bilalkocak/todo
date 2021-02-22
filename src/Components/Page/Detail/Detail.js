import React, {useEffect, useState} from 'react';
import {LeftOutlined, EditOutlined} from "@ant-design/icons";
import './Detail.scss'
import {Typography} from "antd";
import {useHistory, useParams} from 'react-router-dom'
import {collectionModalModes} from "../../../constant";
import {useSelector, useDispatch} from "react-redux";
import TaskList from "../../TaskList/TaskList";
import {updateCollection, fetchCollectionById, setCurrentCollection} from "../../../store/actions/collections";
import {fetchTasks} from "../../../store/actions/tasks";
import CollectionModal from "../../Modal/CollectionModal";

const {Title} = Typography;

const Detail = () => {
    const history = useHistory()
    const {id} = useParams();
    const dispatch = useDispatch();
    const collection = useSelector(state => state.collections.currentCollection)
    const [isModalVisible, setIsModalVisible] = useState(false);


    const _editCollection = () => {
        dispatch(setCurrentCollection(collection))
        setIsModalVisible(true)
    }

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible)
    }

    useEffect(() => {
        dispatch(fetchCollectionById(id))
        dispatch(fetchTasks(id))
    }, [])
    return (
        <div className={'detailContainer'}>
            <div className="detailHeader">
                <div className={'detailHeaderLeft'}>
                    <div className={'customButton backButton'} onClick={() => history.push('/')}>
                        <LeftOutlined/>
                    </div>
                    <Title level={3}>{collection?.name}</Title>
                </div>
                <div className={'detailHeaderRight'}>
                    <div className={'customButton editButton'} onClick={() => _editCollection()}>
                        <EditOutlined/>
                    </div>
                </div>
            </div>
            <TaskList/>
            <CollectionModal toggle={toggleModal}  isModalVisible={isModalVisible} mode={collectionModalModes.edit}
                             title={'Edit Collection'} submit={updateCollection}/>
        </div>
    );
};

export default Detail;
