import {
    useSelectRedux,
    useSelect,
    useChange,
    useChangeRedux,
    useToggle,
    useResponse,
    useResponseRedux
} from '../dataHelpers';

import api from '../api/movies/api';

const {
    test,
    expect
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
    useChange(api.fetch, jest.fn(), jest.fn())('oz'); // eslint-disable-line
    useChange(api.fetch, jest.fn(), jest.fn())(changeEvent); // eslint-disable-line
    useChange(api.fetch, null, jest.fn())(changeEvent); // eslint-disable-line

    useSelect(api.getSelected, jest.fn(), jest.fn())(clickEvent); // eslint-disable-line
    useSelectRedux(api.getSelected, jest.fn())(clickEvent)(jest.fn()); // eslint-disable-line
    useSelectRedux(api.getSelected, null)(clickEvent)(jest.fn()); // eslint-disable-line

    useChangeRedux(api.fetch, jest.fn(), jest.fn())('as')(jest.fn()); // eslint-disable-line
    useChangeRedux(api.fetch, jest.fn(), jest.fn())(changeEvent)(jest.fn()); // eslint-disable-line
    useChangeRedux(api.fetch, null, jest.fn(), jest.fn())(changeEvent)(jest.fn()); // eslint-disable-line
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

    useResponse(jest.fn(), jest.fn())('as'); // eslint-disable-line
    useResponse(null, 'as')('as');

    const stud = jest.fn(); // eslint-disable-line
    const stud1 = jest.fn(); // eslint-disable-line
    const disp = jest.fn(); // eslint-disable-line
    const response = { name: 'a' };

    useResponseRedux(stud, stud1, null, 's')(disp)(response);
    expect(disp).toHaveBeenCalledTimes(2);
    expect(stud).toHaveBeenCalledTimes(1);
    expect(stud1).toHaveBeenCalledTimes(1);
    expect(stud).toHaveBeenCalledWith(response);
    expect(stud1).toHaveBeenCalledWith(response);
});
