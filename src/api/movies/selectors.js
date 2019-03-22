import { bindActionCreators } from 'redux';
import { selector } from './config';
import * as actions from './actions';

function mapToProps(state) {
    return { [selector]: state[selector] };
}

const dispatchActions = dispatch => bindActionCreators(actions, dispatch);

export {
    mapToProps,
    dispatchActions,
    actions
};
