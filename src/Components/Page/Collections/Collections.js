import React, {useEffect, useState} from 'react';
import {Typography} from 'antd';
import CollectionItem from "../../CollectionItem/CollectionItem";
import AddCollectionButton from "../../Common/Buttons/AddCollectionButton/AddCollectionButton";
import {useDispatch, useSelector} from "react-redux";
import {fetchCollection, addCollection} from "../../../store/actions/collections";
import CollectionModal from "../../Modal/CollectionModal";

import './Collections.scss'

const {Title} = Typography;

const Collections = () => {
    const dispatch = useDispatch();
    const collections = useSelector(state => state.collections.collections)

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
                    <Title level={2}>You have no collections.</Title>
                )
            }
            <CollectionModal title={'Add Collection'} submit={addCollection}/>

        </div>
    );
};

export default Collections;
