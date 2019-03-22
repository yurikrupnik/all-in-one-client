const LOADING = 'LOADING';

function getActionType(feature) {
    return `${LOADING}_${feature.toUpperCase()}`;
}

function toggleLoading(feature) {
    return { type: getActionType(feature) };
}

function createLoading(feature) {
    return {
        toggle: () => toggleLoading(feature)
    };
}

export default createLoading;
export { getActionType };
