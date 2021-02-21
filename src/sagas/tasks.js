import {task} from "../store/actionTypes";
import {put, call, takeLatest,delay} from 'redux-saga/effects'
import {fetchTasksApi} from "../api/webApi";
import {fetchTasksResult} from "../store/actions/task";


export function* fetchTask() {
    try {
        const response = yield call(fetchTasksApi);
        yield put(fetchTasksResult(false, response.data));
    } catch (e) {
        yield put(fetchTasksResult(true));

    }
}

export default [
    takeLatest(task.fetch, fetchTask)
]
