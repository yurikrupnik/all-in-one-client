import reducer from '../reducer';
import {
    SET_SEARCH,
    TOGGLE_MODAL,
    FETCH_SHOWS_SUCCESS,
    SET_SELECTED,
    setSelected,
    setSearch,
    setShows,
    handleSelect,
    handleChange,
    toggleModal
} from '../actions';

const { test, expect } = global;

test('reducer', () => {
    expect(reducer(undefined, {}))
        .toEqual(
            {
                data: [],
                selected: {},
                modal: false,
                query: ''
            }
        );

    expect(reducer(undefined, {
        type: TOGGLE_MODAL
    }))
        .toEqual(
            {
                data: [],
                selected: {},
                modal: true,
                query: ''
            }
        );

    expect(reducer(undefined, {
        type: SET_SELECTED,
        payload: { id: 1, name: 'a' }
    }))
        .toEqual(
            {
                data: [],
                selected: {
                    id: 1,
                    name: 'a'
                },
                modal: false,
                query: ''
            }
        );

    expect(reducer(undefined, {
        type: SET_SEARCH,
        payload: 'oz'
    }))
        .toEqual(
            {
                data: [],
                selected: {},
                modal: false,
                query: 'oz'
            }
        );


    const mockData = [
        {
            score: 1233,
            show: { id: 1, name: 'a' }
        }
    ];

    expect(reducer(undefined, {
        type: FETCH_SHOWS_SUCCESS,
        payload: mockData
    }))
        .toEqual(
            {
                data: mockData,
                selected: {},
                modal: false,
                query: ''
            }
        );

    toggleModal()(jest.fn);
    setSearch()(jest.fn);
    setShows()(jest.fn);
    setSelected()(jest.fn);
    handleSelect();
    handleChange();
});
