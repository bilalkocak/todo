import {task as type} from "../actionTypes";


export const fetchTasksResult = (hasError, tasks) => {
    return {type: type.fetchResult, hasError, tasks}
}

export const fetchTasks = (id) => {
    return {type: type.fetch, id}
}

export const addTaskResult = (hasError, task) => {
    return {type: type.addResult, hasError, task}
}

export const addTask = (data) => {
    return {type: type.add, data}
}

