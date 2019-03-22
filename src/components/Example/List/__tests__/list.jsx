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
        onSelect: jest.fn(), // eslint-disable-line
        data: [
            {
                score: 123,
                show: {
                    id: 13,
                    name: 'd',
                    image: {
                        medium: 'ads'
                    }
                }
            },
            {
                score: 123,
                id: 14,
                show: {
                    name: 'dd'
                }
            }
        ]
    };

    render(<Component {...props} />);
});
