import {
    useSelectRedux, useSelect, useChange, useChangeRedux, useToggle
} from '../dataHelpers';

import api from '../api/movies/api';

const {
    test
} = global;

const changeEvent = {
    target: {
        value: 'oz'
    }
};

const clickEvent = {
    currentTarget: {
        dataset: {
            id: '1234'
        }
    }
};

test('utils', () => {
    useChange(jest.fn(), jest.fn(), api.fetch)('oz'); // eslint-disable-line
    useChange(jest.fn(), jest.fn(), api.fetch)(changeEvent); // eslint-disable-line
    useSelect(jest.fn(), jest.fn(), api.getSelected)(clickEvent); // eslint-disable-line
    useSelectRedux(jest.fn(), jest.fn(), api.getSelected)(clickEvent)(jest.fn()); // eslint-disable-line
    useChangeRedux(jest.fn(), jest.fn(), api.fetch)('as')(jest.fn()); // eslint-disable-line
    useChangeRedux(jest.fn(), jest.fn(), api.fetch)(changeEvent)(jest.fn()); // eslint-disable-line
    class Toggle {
        constructor() {
            this.state = false;
        }

        toggle() {
            this.state = !this.state;
        }
    }

    const toggle = new Toggle();

    useToggle(toggle.toggle.bind(toggle), toggle.state)();
});
