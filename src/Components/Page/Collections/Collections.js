import React, {useEffect, useState} from 'react';
import {Typography} from 'antd';
import CollectionItem from "../../CollectionItem/CollectionItem";
import AddCollectionButton from "../../Common/Buttons/AddCollectionButton/AddCollectionButton";
import {useDispatch, useSelector} from "react-redux";
import {fetchCollection} from "../../../store/actions/collections";

import './Collections.scss'

const {Title} = Typography;


const emptyState = () => {
    return (
        <>
            <Title level={2}>You have no collections.</Title>
            <AddCollectionButton text={'Add Your First Collection'}/>
        </>
    )
}
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
                                    <CollectionItem collection={collection}/>
                                )
                            }
                            <AddCollectionButton text={'+ Add Collection'} width={330}/>
                        </div>
                    </>

                ) : emptyState()
            }

        </div>
    );
};

export default Collections;
