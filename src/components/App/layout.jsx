import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Nav from './nav';
import Router from '../Router/index';

const Layout = ({ routes }) => (
    <Fragment>
        <Nav routes={routes} />
        <Router routes={routes} />
    </Fragment>
);

Layout.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Layout;
