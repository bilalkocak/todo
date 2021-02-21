import {call, put, takeLatest} from "redux-saga/effects";
import {collection} from "../store/actionTypes";
import {fetchCollectionsApi} from "../api/webApi";
import {fetchCollectionResult} from "../store/actions/collections"

export function* fetchCollections() {
    try {
        const response = yield call(fetchCollectionsApi);
        yield put(fetchCollectionResult(false, response.data));
    } catch (e) {
        yield put(fetchCollectionResult(true));

    }
}

export default [
    takeLatest(collection.fetch, fetchCollections),
]
