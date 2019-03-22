import { cleanup } from 'react-testing-library';
import React from 'react';
import MainNav from '../nav';
import routes from '../../routes';

jest.mock('../../routes'); // eslint-disable-line no-undef

const {
    test,
    expect,
    shallow,
    afterEach
} = global;

afterEach(cleanup);

test('renders <Nav /> component', () => {
    const wrapper = shallow(<MainNav routes={routes} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').length).toBe(2);
});
