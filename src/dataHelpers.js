const useResponse = (...rest) => (response) => {
    rest.forEach((cb) => {
        if (typeof cb === 'function') {
            cb(response);
        }
    });
};

const useResponseRedux = (...rest) => dispatch => (response) => {
    rest.forEach((cb) => {
        if (typeof cb === 'function') {
            dispatch(cb(response));
        }
    });
};

const useToggle = (toggle, value) => () => {
    toggle(!value);
};

const useChange = (apiMethod, preApiCb, ...rest) => (e) => {
    let value;
    if (typeof e === 'string') { // angular onchange sends the value
        value = e;
    } else {
        value = e.target.value; // eslint-disable-line
    }
    preApiCb(value);
    apiMethod(value)
        .then(useResponse(...rest));
};

const useChangeRedux = (apiMethod, preApiCb, ...rest) => e => (dispatch) => {
    let value;
    if (typeof e === 'string') {
        value = e;
    } else {
        value = e.target.value; // eslint-disable-line
        dispatch(preApiCb(value));
    }
    apiMethod(value)
        .then(useResponseRedux(...rest)(dispatch));
};

const useSelect = (apiMethod, preApiCb, ...rest) => (e) => {
    const { dataset } = e.currentTarget;
    const { id } = dataset;
    if (typeof preApiCb === 'function') {
        preApiCb();
    }
    apiMethod(id)
        .then(useResponse(...rest));
};

const useSelectRedux = (apiMethod, preApiCb, ...rest) => e => (dispatch) => {
    const { dataset } = e.currentTarget;
    const { id } = dataset;
    if (typeof preApiCb === 'function') {
        preApiCb();
    }
    apiMethod(id)
        .then(useResponseRedux(...rest)(dispatch));
};

export {
    useChange,
    useChangeRedux,
    useSelect,
    useSelectRedux,
    useToggle,
    useResponse,
    useResponseRedux
};
