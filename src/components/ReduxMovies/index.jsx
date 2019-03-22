import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Example/Header';
import List from '../Example/List';
import Dialog from '../Example/Dialog';
import { mapToProps as showsMapToProps, dispatchActions as showsActions } from '../../api/movies/selectors';

const ReduxMovies = (props) => {
    const {
        shows, toggleModal, handleChange, handleSelect // eslint-disable-line
    } = props;

    return (
        <div>
            <Header title="Redux way" value={shows.query} onChange={handleChange} />
            <List data={shows.data} onSelect={handleSelect} />
            <Dialog
                isOpen={shows.modal}
                handleDialogClose={toggleModal}
                showInfo={shows.selected}
            />
        </div>
    );
};

ReduxMovies.propsTypes = {
    shows: PropTypes.shape({}).isRequired,
    toggleModal: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default connect(showsMapToProps, showsActions)(ReduxMovies);
