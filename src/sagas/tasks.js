import {task} from "../store/actionTypes";
import {put, call, takeLatest} from 'redux-saga/effects'
import {fetchTasksApi} from "../api/webApi";
import {fetchTasksResult} from "../store/actions/tasks";


export function* fetchTask(action) {
    try {
        const {id} = action;
        const response = yield call(fetchTasksApi, id);
        yield put(fetchTasksResult(false, response.data));
    } catch (e) {
        yield put(fetchTasksResult(true));

    }
}

export default [
    takeLatest(task.fetch, fetchTask)
]
