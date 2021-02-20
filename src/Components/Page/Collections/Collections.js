import React, {useState} from 'react';
import {Typography} from 'antd';
import './Collections.scss'

const {Title} = Typography;

const addCollectionButton = () =>
    <div className={'addCollectionButton'}>Add Your First Collection</div>

const emptyState = () => {
    return (
        <>
            <Title level={2}>You have no collections.</Title>
            {addCollectionButton()}
        </>
    )
}
const Collections = () => {
    const [collection, setCollection] = useState(0)
    return (
        <div className={'collectionsContainer'}>
            {
                collection ? (
                    <>
                        <Title>Collection</Title>
                        <div className="collections">
                        </div>
                    </>

                ) : emptyState()
            }

        </div>
    );
};

export default Collections;
