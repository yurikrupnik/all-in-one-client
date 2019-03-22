import createStore from '../store';

const { test } = global;

test('store', () => {
    createStore();
    createStore({});
});
