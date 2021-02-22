import {task as type} from "../actionTypes";
import {message} from "antd";

const initialState = {
    tasks: [],
    currentTask: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case type.fetchResult:
            if (action.hasError) {
                return state;
            }
            return {
                ...state,
                tasks: action.tasks,
            };
        case type.addResult:
            if (action.hasError) {
                message.error({content: 'Task could not be created.', key: type.add, duration: 2});
                return state;
            }
            message.success({content: 'Task created.', key: type.add, duration: 2});
            let _tasks = [...state.tasks, action.task]

            return {
                ...state,
                tasks: _tasks,
            };
        default:
            return state;
    }
}
