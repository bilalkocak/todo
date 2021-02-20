import React, {useState} from 'react';
import {Typography} from 'antd';
import CollectionItem from "../../CollectionItem/CollectionItem";
import './Collections.scss'
import AddCollectionButton from "../../Common/Buttons/AddCollectionButton/AddCollectionButton";

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
    const [collection, setCollection] = useState(1)
    return (
        <div className={'collectionsContainer'}>
            {
                collection ? (
                    <>
                        <Title>Collections</Title>
                        <div className="collections">
                            <CollectionItem/>
                            <AddCollectionButton text={'+ Add Collection'} width={330}/>
                        </div>
                    </>

                ) : emptyState()
            }

        </div>
    );
};

export default Collections;
