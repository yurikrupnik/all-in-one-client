import { createStore } from 'redux';
import reducer from './reducers';
import composed from './composed';

export default (initialState = {}) => createStore(reducer, initialState, composed);
