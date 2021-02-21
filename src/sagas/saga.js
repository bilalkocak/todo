import {all} from 'redux-saga/effects'
import tasks from './tasks';
import collections from "./collections";

export default function* rootSaga() {
    yield all([
        ...tasks,
        ...collections
    ])
}

