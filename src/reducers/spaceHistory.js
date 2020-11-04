import {
    FETCH_HISTORY,
    FETCH_PAYLOADS
} from "../actions/types";

import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_HISTORY:
            return {...state, ..._.mapKeys(action.payload, 'id')};

        // case FETCH_PAYLOADS:
        //     return {...state, ..._.mapKeys(action.payload, 'payload_id')};

        default:
            return state;
    }
}