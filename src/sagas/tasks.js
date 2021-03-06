import {task as type} from "../store/actionTypes";
import {put, call, takeLatest} from 'redux-saga/effects'
import {addTasksApi, deleteTaskApi, fetchTasksApi, updateTaskApi, fetchAllTasksApi} from "../api/webApi";
import {
    fetchTasksResult,
    addTaskResult,
    updateTaskResult,
    deleteTaskResult,
    fetchAllTasksResult
} from "../store/actions/tasks";
import {message} from "antd";


export function* fetchTask(action) {
    try {
        const {id} = action;
        const response = yield call(fetchTasksApi, id);
        yield put(fetchTasksResult(false, response.data));
    } catch (e) {
        yield put(fetchTasksResult(true));

    }
}

export function* fetchAllTasks() {
    try {
        const response = yield call(fetchAllTasksApi);
        yield put(fetchAllTasksResult(false, response.data));
    } catch (e) {
        yield put(fetchAllTasksResult(true));

    }
}

export function* addTask(action) {
    message.loading({content: 'Creating task', key: type.add});
    try {
        const {data} = action;
        const response = yield call(addTasksApi, data);
        yield put(addTaskResult(false, response.data));
    } catch (e) {
        console.log(e);
        yield put(addTaskResult(true));
    }
}

export function* updateTask(action) {
    message.loading({content: 'Updating task', key: type.update});
    try {
        const {data} = action;
        const response = yield call(updateTaskApi, data);
        yield put(updateTaskResult(false, response.data));
    } catch (e) {
        console.log(e);
        yield put(updateTaskResult(true));
    }
}

export function* deleteTask(action) {
    message.loading({content: 'Deleting task', key: type.delete});
    try {
        const {id} = action;
        yield call(deleteTaskApi, id);
        yield put(deleteTaskResult(false, id));
    } catch (e) {
        console.log(e);
        yield put(deleteTaskResult(true));
    }
}

export default [
    takeLatest(type.fetch, fetchTask),
    takeLatest(type.add, addTask),
    takeLatest(type.update, updateTask),
    takeLatest(type.delete, deleteTask),
    takeLatest(type.fetchAll, fetchAllTasks),
]
