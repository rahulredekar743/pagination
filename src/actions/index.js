import {
    FETCH_PAYLOADS,
    FETCH_HISTORY
} from "./types";
import axios from 'axios';
import history from '../history';

export const fetchPayloads = () => {
    return async (dispatch) => {
        const response = await axios.get('https://api.spacexdata.com/v3/payloads');
        dispatch({
            type: FETCH_PAYLOADS,
            payload: response.data
        });
        // console.log(response);
        history.push('/spacepayloads')
    }
};

export const fetchHistory = () => {
    return async (dispatch) => {
        const response = await axios.get('https://api.spacexdata.com/v3/history');
        dispatch({
            type: FETCH_HISTORY,
            payload: response.data
        });
        history.push('/spacehistory')
    }
};