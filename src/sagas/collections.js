import {call, put, takeLatest, delay} from "redux-saga/effects";
import {collection as type} from "../store/actionTypes";
import {fetchCollectionsApi, addCollectionsApi} from "../api/webApi";
import {fetchCollectionResult, addCollectionResult} from "../store/actions/collections"
import {message} from "antd";

export function* fetchCollections() {
    try {
        const response = yield call(fetchCollectionsApi);
        yield put(fetchCollectionResult(false, response.data));
    } catch (e) {
        yield put(fetchCollectionResult(true));

    }
}

export function* addCollections(action) {
    message.loading({content: 'Creating collection', key: type.add});
    try {
        const {data} = action;
        const response = yield call(addCollectionsApi, data);
        yield put(addCollectionResult(false, response.data));
    } catch (e) {
        yield put(addCollectionResult(true));
    }
}

export default [
    takeLatest(type.fetch, fetchCollections),
    takeLatest(type.add, addCollections),
]
