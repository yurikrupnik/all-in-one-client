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
        const wrapper = mount( // notice render here
            <Consumer render={(props) => {
                const { fetch } = props;
                // fetch();
                console.log('props', props);

                return (
                    <div>
                        asd
                    </div>
                );
            }}
            />
        );
        expect(wrapper).toMatchSnapshot();
        // expect(1).toBe(1);
    });
});
