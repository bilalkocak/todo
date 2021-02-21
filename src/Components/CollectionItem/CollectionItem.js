import React from 'react';
import {Typography} from 'antd';
import PropTypes from 'prop-types';

import './CollectionItem.scss'

const {Title, Text} = Typography;

const CollectionItem = ({collection}) => {
    return (
        <div className={'collectionContainer'}>
            <div className={'collectionIcon'}></div>
            <div className={'collectionInfo'}>
                <Title level={4}>{collection.name}</Title>
                <Text type="secondary">{collection.desc}</Text>
            </div>
        </div>
    );
};

CollectionItem.propTypes = {
    collection: PropTypes.object.isRequired
}

export default CollectionItem;
