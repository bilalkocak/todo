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
                return {
                    ...state,
                    currentCollection: null
                }
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
        case type.setCurrent:
            return {
                ...state,
                currentCollection: action.collection,
            };
        case type.updateResult:
            if (action.hasError) {
                message.error({content: 'Collection could not be updated.', key: type.update, duration: 2});
                return state;
            }
            message.success({content: 'Collection updated.', key: type.update, duration: 2});

            let collectionList = [...state.collections]
            let filtered = collectionList.filter((collection) => collection.id !== action.collection.id);
            collectionList = [...filtered, action.collection]
            return {
                ...state,
                collections: collectionList,
                currentCollection: action.collection
            };
        case type.deleteResult:
            if (action.hasError) {
                message.error({content: 'Collection could not be deleted.', key: type.delete, duration: 2});
                return state;
            }
            message.success({content: 'Collection deleted.', key: type.delete, duration: 2});

            let undeletedCollections = state.collections.filter((collection) => collection.id !== action.id);

            return {
                ...state,
                collections: undeletedCollections
            };
        default:
            return state;
    }
}
