import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Component from '../index';
import { Provider } from '../../../api/movies/context';

const {
    test,
    afterEach
} = global;

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    const tree = (
        <Provider>
            <Component />
        </Provider>
    );
    render(tree);
});
