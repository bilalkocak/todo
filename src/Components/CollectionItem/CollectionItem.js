import React from 'react';
import {Typography} from 'antd';
import PropTypes from 'prop-types';
import {FolderFilled} from "@ant-design/icons";
import {useHistory} from 'react-router-dom'


import './CollectionItem.scss'

const {Title, Text} = Typography;

const CollectionItem = ({collection}) => {
    const history = useHistory()

    return (
        <div onClick={() => history.push(`/collection/detail/${collection.id}`)} className={'collectionContainer'}>
            <div className={'collectionIcon'} style={{backgroundColor: collection.color}}>
                <FolderFilled/>
            </div>
            <div className={'collectionInfo'}>
                <Title level={4}>{collection.name.slice(0, 30)}</Title>
                <Text type="secondary">{collection.desc.slice(0, 40)}</Text>
            </div>
        </div>
    );
};

CollectionItem.propTypes = {
    collection: PropTypes.object.isRequired
}

export default CollectionItem;
