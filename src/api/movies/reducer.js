import { combineReducers } from 'redux';

import {
    FETCH_SHOWS_SUCCESS,
    SET_SEARCH,
    SET_SELECTED,
    TOGGLE_MODAL
} from './actions';

const data = (state = [], action) => {
    switch (action.type) {
    case FETCH_SHOWS_SUCCESS:
        return action.payload;
    default:
        return state;
    }
};

const query = (state = '', action) => {
    switch (action.type) {
    case SET_SEARCH:
        return action.payload;
    default:
        return state;
    }
};

const selected = (state = {}, action) => {
    switch (action.type) {
    case SET_SELECTED:
        return action.payload;
    default:
        return state;
    }
};

const modal = (state = false, action) => {
    switch (action.type) {
    case TOGGLE_MODAL:
        return !state;
    default:
        return state;
    }
};

export default combineReducers({
    data,
    query,
    selected,
    modal
});
