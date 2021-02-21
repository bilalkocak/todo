import {collection as type} from "../actionTypes";


export const fetchCollectionResult = (hasError, collections) => {
    return {type: type.fetchResult, hasError, collections}
}

export const fetchCollection = () => {
    return {type: type.fetch}
}
