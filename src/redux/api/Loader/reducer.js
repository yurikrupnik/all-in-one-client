import { getActionType } from './actions';

function createLoadingWithNamedType(name = '') {
    return function loading(state = false, action) {
        switch (action.type) {
        case getActionType(name):
            return !state;
        default:
            return state;
        }
    };
}

export default createLoadingWithNamedType;
