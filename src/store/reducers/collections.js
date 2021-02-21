import {collection as type} from "../actionTypes";

const initialState = {
    collections: []
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
        default:
            return state;
    }
}
