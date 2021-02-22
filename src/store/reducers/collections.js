import {collection as type} from "../actionTypes";
import {message} from "antd";

const initialState = {
    collections: [],
    currentCollection: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case type.fetchResult:
            if (action.hasError) {
                return state;
            }
            return {
                ...state,
                collections: action.collections,
            };
        case type.fetchByIdResult:
            if (action.hasError) {
                return state;
            }
            return {
                ...state,
                currentCollection: action.collection,
            };
        case type.addResult:
            if (action.hasError) {
                message.error({content: 'Collection could not be created.', key: type.add, duration: 2});
                return state;
            }
            message.success({content: 'Collection created.', key: type.add, duration: 2});
            let _collections = [...state.collections, action.collection]
            return {
                ...state,
                collections: _collections,
            };
        default:
            return state;
    }
}
