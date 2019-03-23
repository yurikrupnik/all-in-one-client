import { selector } from './config';
// import createLoading from '../../redux/api/Loader/actions';
import { useChangeRedux, useSelectRedux } from '../../dataHelpers';
import api from './api';
// const loading = createLoading(selector);

const FETCH = 'FETCH';

// const PENDING = 'PENDING';
const SUCCESS = 'SUCCESS';

export const SET_SEARCH = 'SET_SEARCH';
export const SET_SELECTED = 'SET_SELECTED';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

// export const FETCH_SHOWS_PENDING = `${FETCH}_${selector}_${PENDING}`;
export const FETCH_SHOWS_SUCCESS = `${FETCH}_${selector}_${SUCCESS}`;


export const setSearch = payload => dispatch => dispatch({
    type: SET_SEARCH,
    payload
});

export const setShows = payload => dispatch => dispatch({
    type: FETCH_SHOWS_SUCCESS,
    payload
});

const toggleModal = () => dispatch => dispatch({ type: TOGGLE_MODAL });

export const setSelected = payload => dispatch => dispatch({
    type: SET_SELECTED,
    payload
});

const handleChange = useChangeRedux(api.fetch, setSearch, setShows);
const handleSelect = useSelectRedux(api.getSelected, null, setSelected, toggleModal);

// const handleChange = event => (dispatch) => {
//     const { value } = event.target;
//     setSearch(value)(dispatch);
//     api.fetch(value)
//         .then((res) => {
//             setShows(res)(dispatch);
//         });
// };

// const handleSelect = event => (dispatch) => {
//     const { dataset } = event.currentTarget;
//     const { id } = dataset;
//     api.getSelected(id)
//         .then((res) => {
//             setSelected(res)(dispatch);
//             toggleModal()(dispatch);
//         });
// };

export {
    toggleModal,
    handleChange,
    handleSelect
};
