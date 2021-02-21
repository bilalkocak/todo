import {combineReducers} from "redux";

import tasks from './tasks';
import collections from './collections';

export default combineReducers({
    tasks,
    collections
})
