import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Component from '../index';

const {
    test,
    afterEach
} = global;

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    const props = {
        onChange: jest.fn(), // eslint-disable-line
        value: 'asd',
        title: 'asdd'
    };

    const { rerender } = render(<Component {...props} />);
    const propsWith = {
        onChange: jest.fn(), // eslint-disable-line
        title: 'asdd',
        value: 'd',
    };
    rerender(<Component {...propsWith} />);
    rerender(<Component {...propsWith} />);
});
