import {combineReducers} from "redux";

import spaceHistory from './spaceHistory';
import spacePayload from './spacePayload';

export default combineReducers({
    spaceHistory: spaceHistory,
    spacePayload: spacePayload
})