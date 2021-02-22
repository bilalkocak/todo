import {task as type} from "../store/actionTypes";
import {put, call, takeLatest} from 'redux-saga/effects'
import {addTasksApi, fetchTasksApi} from "../api/webApi";
import {fetchTasksResult, addTaskResult} from "../store/actions/tasks";
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

export default [
    takeLatest(type.fetch, fetchTask),
    takeLatest(type.add, addTask),
]
