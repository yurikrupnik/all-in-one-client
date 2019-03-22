
const useChange = (setSearch, setData, apiMethod) => (e) => {
    let value;
    if (typeof e === 'string') {
        value = e;
    } else {
        value = e.target.value; // eslint-disable-line
        setSearch(value);
    }
    apiMethod(value)
        .then(setData);
};

const useChangeRedux = (setSearch, setData, apiMethod) => e => (dispatch) => {
    let value;
    if (typeof e === 'string') {
        value = e;
    } else {
        value = e.target.value; // eslint-disable-line
        dispatch(setSearch(value));
    }
    apiMethod(value)
        .then((res) => {
            setData(res)(dispatch);
        });
};

const useSelect = (setSelected, toggleOpen, apiMethod) => (e) => {
    const { dataset } = e.currentTarget;
    const { id } = dataset;
    apiMethod(id)
        .then((res) => {
            setSelected(res);
            toggleOpen();
        });
};

const useSelectRedux = (setSelected, toggleOpen, apiMethod) => e => (dispatch) => {
    const { dataset } = e.currentTarget;
    const { id } = dataset;
    apiMethod(id)
        .then((res) => {
            setSelected(res)(dispatch);
            toggleOpen()(dispatch);
        });
};


function useToggle(toggle, value) {
    return function toggleCallback() {
        toggle(!value);
    };
}

export {
    useChange,
    useChangeRedux,
    useSelect,
    useSelectRedux,
    useToggle
};
