import React from 'react';
import { Typography } from 'antd';

import './CollectionItem.scss'
const { Title,Text } = Typography;

const CollectionItem = () => {
    return (
        <div className={'collectionContainer'}>
            <div className={'collectionIcon'}></div>
            <div className={'collectionInfo'}>
                <Title level={4}>Collection Name</Title>
                <Text type="secondary">Description</Text>
            </div>
        </div>
    );
};

export default CollectionItem;
