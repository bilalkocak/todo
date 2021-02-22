import {collection as type} from "../actionTypes";
import {message} from "antd";


export const fetchCollectionResult = (hasError, collections) => {
    return {type: type.fetchResult, hasError, collections}
}

export const fetchCollection = () => {
    return {type: type.fetch}
}

export const fetchCollectionByIdResult = (hasError, collection) => {
    return {type: type.fetchByIdResult, hasError, collection}
}

export const fetchCollectionById = (id) => {
    return {type: type.fetchById, id}
}

export const addCollectionResult = (hasError, collection) => {
    return {type: type.addResult, hasError, collection}
}

export const addCollection = (data) => {
    return {type: type.add, data}
}
