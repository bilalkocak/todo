import {task as type} from "../actionTypes";


export const setCurrentTask = (task) => {
    return {type: type.setCurrent, task}
}
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

export const updateTaskResult = (hasError, task) => {
    return {type: type.updateResult, hasError, task}
}

export const updateTask = (data) => {
    return {type: type.update, data}
}

export const deleteTaskResult = (hasError, id) => {
    return {type: type.deleteResult, hasError, id}
}

export const deleteTask = (id) => {
    return {type: type.delete, id}
}

