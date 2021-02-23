import {collection as type} from "../actionTypes";

export const setCurrentCollection = (collection) => {
    return {type: type.setCurrent, collection}
}

export const fetchCollectionResult = (hasError, collections) => {
    return {type: type.fetchResult, hasError, collections}
}

export const fetchCollection = () => {
    return {type: type.fetch}
}

export const updateCollectionResult = (hasError, collection) => {
    return {type: type.updateResult, hasError, collection}
}

export const updateCollection = (data) => {
    return {type: type.update, data}
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

export const deleteCollectionResult = (hasError, id) => {
    return {type: type.deleteResult, hasError, id}
}

export const deleteCollection = (id) => {
    return {type: type.delete, id}
}
