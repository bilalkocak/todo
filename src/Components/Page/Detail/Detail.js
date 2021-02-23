import React, {useEffect, useState} from 'react';
import {
    LeftOutlined, DeleteOutlined, EditOutlined, ExclamationCircleOutlined, PieChartOutlined
} from "@ant-design/icons";
import './Detail.scss'
import {Modal} from "antd";
import {useHistory, useParams} from 'react-router-dom'
import {collectionModalModes} from "../../../constant";
import {useSelector, useDispatch} from "react-redux";
import DetailCollapse from "../../DetailCollapse/DetailCollapse";
import TaskList from "../../TaskList/TaskList";
import {
    updateCollection,
    fetchCollectionById,
    setCurrentCollection,
    deleteCollection
} from "../../../store/actions/collections";
import {fetchTasks} from "../../../store/actions/tasks";
import CollectionModal from "../../Modal/CollectionModal";


const {confirm} = Modal;


const Detail = () => {
    const history = useHistory()
    const {id} = useParams();
    const dispatch = useDispatch();
    const collection = useSelector(state => state.collections.currentCollection)
    const tasks = useSelector(state => state.tasks.tasks)

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isOpenChart, setIsOpenChart] = useState(false);


    const _editCollection = () => {
        dispatch(setCurrentCollection(collection))
        setIsModalVisible(true)
    }

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible)
    }

    const showDeleteConfirm = () => {
        confirm({
            title: 'Are you sure delete this collection?',
            icon: <ExclamationCircleOutlined/>,
            content: 'This collection will be deleted completely with own tasks .',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                dispatch(deleteCollection(collection.id))
                history.push('/collection')
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }


    useEffect(() => {
        dispatch(fetchCollectionById(id))
        dispatch(fetchTasks(id))
    }, [])

    useEffect(() => {
        if (!collection){
            // collection doesn't exist
            history.push('/collection')
        }
    }, [collection])
    return (
        <div className={'detailContainer'}>
            <div className="detailHeader">
                <div className={'detailHeaderLeft'}>
                    <div className={'customButton backButton'} onClick={() => history.push('/collection')}>
                        <LeftOutlined/>
                    </div>
                    <div className={'title'}>
                        <span>{collection?.name.slice(0, 20)}</span>
                    </div>
                </div>


                <div className={'detailHeaderRight'}>
                    <div className={'customButton button'} onClick={() => setIsOpenChart(!isOpenChart)}>
                        <PieChartOutlined/>
                    </div>
                    <div className={'customButton button'} onClick={() => _editCollection()}>
                        <EditOutlined/>
                    </div>
                    <div className={'customButton button'} onClick={() => showDeleteConfirm()}>
                        <DeleteOutlined/>
                    </div>
                </div>
            </div>
            <DetailCollapse isOpen={isOpenChart} collection={collection} tasks={tasks}/>
            <TaskList tasks={tasks}/>
            {
                collection &&
                <CollectionModal toggle={toggleModal} isModalVisible={isModalVisible} mode={collectionModalModes.edit}
                                 title={'Edit Collection'} submit={updateCollection}/>
            }
        </div>
    );
};

export default Detail;
