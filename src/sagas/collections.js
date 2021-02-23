import {call, put, takeLatest} from "redux-saga/effects";
import {collection as type} from "../store/actionTypes";
import {
    fetchCollectionsApi,
    addCollectionsApi,
    fetchCollectionByIdApi,
    updateCollectionApi,
    deleteCollectionApi
} from "../api/webApi";
import {
    fetchCollectionResult,
    addCollectionResult,
    fetchCollectionByIdResult,
    updateCollectionResult,
    deleteCollectionResult
} from "../store/actions/collections"
import {message} from "antd";
import {useHistory} from "react-router-dom";

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
        console.log(e)
        yield put(fetchCollectionByIdResult(true));
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

export function* updateCollection(action) {
    message.loading({content: 'Updating collection', key: type.update});
    try {
        const {data} = action;
        const response = yield call(updateCollectionApi, data);
        yield put(updateCollectionResult(false, response.data));
    } catch (e) {
        console.log(e);
        yield put(updateCollectionResult(true));
    }
}


export function* deleteCollection(action) {
    message.loading({content: 'Deleting collection', key: type.delete});
    try {
        const {id} = action;
        yield call(deleteCollectionApi, id);
        yield put(deleteCollectionResult(false, id));
    } catch (e) {
        console.log(e);
        yield put(deleteCollectionResult(true));
    }
}

export default [
    takeLatest(type.fetch, fetchCollections),
    takeLatest(type.add, addCollections),
    takeLatest(type.fetchById, fetchCollectionById),
    takeLatest(type.update, updateCollection),
    takeLatest(type.delete, deleteCollection),
]
