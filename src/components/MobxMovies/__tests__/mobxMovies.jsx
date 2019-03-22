import React from 'react';
import { cleanup, render } from 'react-testing-library';
import Component, { AppState } from '../index';

const {
    test,
    afterEach
} = global;

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    const tree = (
        <Component />
    );

    render(tree);
});

test('AppState', () => {
    const state = new AppState();
    state.setSelected('das');
    state.setData('ds');
    state.toggleOpen();
    state.setSearch({
        target: {
            value: 'oz'
        }
    });
    state.handleSelect({
        currentTarget: {
            dataset: {
                id: 18494
            }
        }
    });
});
