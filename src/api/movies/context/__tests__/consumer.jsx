import React from 'react';
import Consumer from '../consumer';

const {
    describe,
    test,
    expect,
    mount
} = global;

describe('currency consumer', () => {
    test('render consumer with render props', () => {
        const wrapper = mount(
            <Consumer render={() => (
                <div>
                    asd
                </div>
            )}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
