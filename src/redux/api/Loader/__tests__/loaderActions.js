import createLoading, { getActionType } from '../actions';
import createLoadingWithNamedType from '../reducer';

const { describe, test } = global;

const feature = 'users';
describe('return function with name as closure', () => {
    describe('reducer', () => {
        test('return function default', () => {
            createLoadingWithNamedType();
        });
        test('return function with name as closure', () => {
            createLoadingWithNamedType(feature);
        });
        test('reducer default value and action type', () => {
            createLoadingWithNamedType(feature)(undefined, { type: '' });
        });
        test('reducer type', () => {
            createLoadingWithNamedType(feature)(true, { type: getActionType(feature) });
        });
    });

    describe('actions', () => {
        test('test createLoading', () => {
            const ob = createLoading(feature);
            ob.toggle();
        });
    });
});
