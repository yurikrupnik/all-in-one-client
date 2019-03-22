import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import configureStore from '../../redux/store';
import Providers from './providers';
import apiProviders from '../../api/providers';
import Layout from './layout';

const App = ({ routes }) => (
    <Provider store={configureStore({})}>
        <Providers providers={apiProviders}>
            <Layout routes={routes} />
        </Providers>
    </Provider>
);

App.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default App;
