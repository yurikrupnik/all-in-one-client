import React, { useContext } from 'react';
import { Context as MoviesContext } from '../../api/movies/context';
import Header from '../Example/Header';
import List from '../Example/List';
import Dialog from '../Example/Dialog';

const ContextMovies = () => {
    const shows = useContext(MoviesContext);
    return (
        <div>
            lol
            <Header title="React Context Api" value={shows.search} onChange={shows.handleChange} />
            <List data={shows.shows} onSelect={shows.handleSelect} />
            <Dialog
                isOpen={shows.open}
                handleDialogClose={shows.toggleOpen}
                showInfo={shows.selected}
            />
        </div>
    );
};

export default ContextMovies;
