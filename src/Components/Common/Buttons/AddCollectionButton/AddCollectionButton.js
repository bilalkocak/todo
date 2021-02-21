import React from 'react';
import PropTypes from 'prop-types';

import './AddCollectionButton.scss'

const AddCollectionButton = ({text, width}) => {
    return (
        <div className={'customButton addCollectionButton'} style={{width: width ? width : ''}}>
            {text}
        </div>
    );
};
AddCollectionButton.propTypes = {
    text: PropTypes.string.isRequired,
    width: PropTypes.number
};
export default AddCollectionButton;
