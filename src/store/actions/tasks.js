import {task as type} from "../actionTypes";


export const fetchTasksResult = (hasError, tasks) => {
    return {type: type.fetchResult, hasError, tasks}
}

export const fetchTasks = (id) => {
    return {type: type.fetch, id}
}
