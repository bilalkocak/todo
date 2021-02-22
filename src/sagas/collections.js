import {call, put, takeLatest, delay} from "redux-saga/effects";
import {collection as type} from "../store/actionTypes";
import {fetchCollectionsApi, addCollectionsApi, fetchCollectionByIdApi, updateCollectionApi} from "../api/webApi";
import {
    fetchCollectionResult,
    addCollectionResult,
    fetchCollectionByIdResult,
    updateCollectionResult
} from "../store/actions/collections"
import {message} from "antd";
import {updateTaskResult} from "../store/actions/tasks";

export function* fetchCollections() {
    try {
        const response = yield call(fetchCollectionsApi);
        yield put(fetchCollectionResult(false, response.data));
    } catch (e) {
        yield put(fetchCollectionResult(true));

    }
}

export function* fetchCollectionById(action) {
    try {
        const {id} = action;
        const response = yield call(fetchCollectionByIdApi, id);
        yield put(fetchCollectionByIdResult(false, response.data));
    } catch (e) {
        yield put(fetchCollectionByIdResult(true));

    }
}

export function* addCollections(action) {
    yield message.loading({content: 'Creating collection', key: type.add});
    try {
        const {data} = action;
        const response = yield call(addCollectionsApi, data);
        yield put(addCollectionResult(false, response.data));
    } catch (e) {
        yield put(addCollectionResult(true));
    }
}

export function* updateCollection(action) {
    yield message.loading({content: 'Updating collection', key: type.update});
    try {
        const {data} = action;
        const response = yield call(updateCollectionApi, data);
        yield put(updateCollectionResult(false, response.data));
    } catch (e) {
        console.log(e);
        yield put(updateCollectionResult(true));
    }
}

export default [
    takeLatest(type.fetch, fetchCollections),
    takeLatest(type.add, addCollections),
    takeLatest(type.fetchById, fetchCollectionById),
    takeLatest(type.update, updateCollection),
]
