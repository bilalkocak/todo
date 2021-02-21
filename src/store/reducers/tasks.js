import {task as type} from "../actionTypes";

const initialState = {
    tasks: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case type.fetchResult:
            if (action.hasError){
                return state;
            }
            return {
                ...state,
                tasks: action.tasks,
            };
        default:
            return state;
    }
}
