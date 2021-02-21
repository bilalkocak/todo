import {all} from 'redux-saga/effects'
import tasks from './tasks';

export default function* rootSaga() {
    yield all([
        ...tasks
    ])
}

