import React, {useEffect, useState} from 'react';
import {Empty, Typography} from 'antd';
import CollectionItem from "../../CollectionItem/CollectionItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchCollection, addCollection} from "../../../store/actions/collections";
import CollectionModal from "../../Modal/CollectionModal";

import './Collections.scss'
import {collectionModalModes} from "../../../constant";

const {Title} = Typography;

const Collections = () => {
    const dispatch = useDispatch();
    const collections = useSelector(state => state.collections.collections)
    const currentCollection = useSelector(state => state.collections.currentCollection)
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible)
    }
    useEffect(() => {
        dispatch(fetchCollection())
    }, [])

    return (
        <div className={'collectionsContainer'}>
            {
                collections.length > 0 ? (
                    <>
                        <Title>Collections</Title>
                        <div className="collections">
                            {
                                collections.map(collection =>
                                    <CollectionItem key={`collection-${collection.id}`} collection={collection}/>
                                )
                            }
                        </div>
                    </>

                ) : (
                    <div className={'emptyArea'}>
                        <Empty description={''}/>
                        <Title level={2}>You have no collections.</Title>
                    </div>

                )
            }

            <CollectionModal collection={currentCollection} title={'Add Collection'} isModalVisible={isModalVisible}
                             toggle={toggleModal}
                             mode={collectionModalModes.add} submit={addCollection}/>


        </div>
    );
};

export default Collections;
