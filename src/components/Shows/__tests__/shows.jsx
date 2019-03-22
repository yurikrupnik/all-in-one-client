import React from 'react';
import { cleanup, render } from 'react-testing-library';
import Component, { ShowsAsClass } from '../index';

const {
    test,
    afterEach,
    shallow
} = global;

afterEach(cleanup);

test('render movies with hooks', () => {
    const props = {};
    render(<Component {...props} />);
});

test('render movies with class', () => {
    const wrapper = shallow((
        <ShowsAsClass />
    ));
    const instance = wrapper.instance();
    instance.setSelected({});
    instance.setData([]);
    instance.setSearch('oz');
    instance.toggleOpen();
});
