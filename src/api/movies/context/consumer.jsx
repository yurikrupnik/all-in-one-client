import React from 'react';
import PropTypes from 'prop-types';
import Context from './context';

const MoviesConsumer = ({ render }) => (
    <Context.Consumer>
        {props => render(props)}
    </Context.Consumer>
);

MoviesConsumer.propTypes = {
    render: PropTypes.func.isRequired
};

export default MoviesConsumer;
