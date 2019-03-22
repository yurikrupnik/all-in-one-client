
import React from 'react';
import Provider, { MoviesProviderAsClass } from '../provider';
import { Provider as P } from '../index';
// import api from '../../api';


// jest.mock('../../api'); // eslint-disable-line no-undef

const {
    describe,
    test,
    expect,
    shallow
} = global;

describe('movies provider', () => {
    const Component = () => (
        <div>
            helo
        </div>
    );

    test('renders movies Provider', () => {
        const wrapper = shallow((
            <Provider>
                <Component />
            </Provider>
        ));
        expect(wrapper).toMatchSnapshot();
        // expect(1).toBe(1)
    });

    test('should test fetch', () => {
        // expect(1).toBe(1);
        const wrapper = shallow((
            <MoviesProviderAsClass>
                <Component />
            </MoviesProviderAsClass>
        ));
        const instance = wrapper.instance();
        instance.setSelected({ id: 123 });
        instance.setData([{ id: 123 }]);
        instance.setSearch('oz');
        instance.toggleOpen();
        // expect(api.fetch).toHaveBeenCalledTimes(1);
        // console.log('instance.state', instance.state);
        // return done();
    });

    test('renders P', () => {
        const wrapper = shallow((
            <P>
                <Component />
            </P>
        ));
        expect(wrapper).toMatchSnapshot();
        // expect(1).toBe(1)
    });
});
