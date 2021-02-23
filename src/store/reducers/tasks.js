import {task as type} from "../actionTypes";
import {message} from "antd";

const initialState = {
    tasks: [],
    currentTask: null
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
        case type.updateResult:
            if (action.hasError) {
                message.error({content: 'Task could not be updated.', key: type.update, duration: 2});
                return state;
            }
            message.success({content: 'Task updated.', key: type.update, duration: 2});

            let taskList = [...state.tasks]
            let filtered = taskList.filter((task) => task.id !== action.task.id);
            taskList = [...filtered, action.task]
            return {
                ...state,
                tasks: taskList,
            };
        case type.deleteResult:
            if (action.hasError) {
                message.error({content: 'Task could not be deleted.', key: type.delete, duration: 2});
                return state;
            }
            message.success({content: 'Task deleted.', key: type.delete, duration: 2});

            let undeletedTasks = state.tasks.filter((task) => task.id !== action.id);

            return {
                ...state,
                tasks: undeletedTasks,
            };
        case type.setCurrent:
            return {
                ...state,
                currentTask: action.task,
            };
        default:
            return state;
    }
}
