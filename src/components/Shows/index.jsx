import React, { useState, useCallback } from 'react';
import Header from '../Example/Header';
import List from '../Example/List';
import Dialog from '../Example/Dialog';
import { useChange, useSelect, useToggle } from '../../dataHelpers';
import api from '../../api/movies/api';

class MoviesAsClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            data: [],
            selected: {},
            open: false
        };

        this.setSelected = this.setSelected.bind(this);
        this.setData = this.setData.bind(this);
        this.setSearch = this.setSearch.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);

        this.handleChange = useChange(
            this.setSearch, this.setData, api.fetch
        );
        this.handleSelect = useSelect(
            this.setSelected, this.toggleOpen, api.getSelected
        );
    }

    setSelected(val) {
        this.setState(({ selected: val }));
    }

    setData(val) {
        this.setState(({ data: val }));
    }

    setSearch(val) {
        this.setState(({ search: val }));
    }

    toggleOpen() {
        this.setState(prevState => ({ open: !prevState.open }));
    }

    // handleChange(e) {
    //     const { value } = e.target;
    //     this.setSearch(value);
    //     api.fetch(value)
    //         .then(this.setData);
    // }

    // handleSelect(e) {
    //     const { dataset } = e.currentTarget;
    //     const { id } = dataset;
    //     api.getSelected(id)
    //         .then((res) => {
    //             this.setSelected(res);
    //             this.toggleOpen();
    //         });
    // }

    render() {
        const {
            search, data, open, selected
        } = this.state;
        return (
            <div>
                <Header title="Class way" value={search} onChange={this.handleChange} />
                <List data={data} onSelect={this.handleSelect} />
                <Dialog
                    isOpen={open}
                    handleDialogClose={this.toggleOpen}
                    showInfo={selected}
                />
            </div>
        );
    }
}

const Shows = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState({});
    const [open, setOpen] = useState(false);

    // function toggleOpen() {
    //     setOpen(!open);
    // }

    const toggleOpen = useCallback(useToggle(setOpen, open), [open]);
    const handleChange = useCallback(useChange(setQuery, setData, api.fetch));
    const handleSelect = useCallback(useSelect(setSelected, toggleOpen, api.getSelected));

    // const handleChange = useCallback(
    //     (e) => {
    //         const { value } = e.target;
    //         setQuery(value);
    //         return api.fetch(value)
    //             .then((res) => {
    //                 setData(res);
    //             });
    //     }, [setQuery, setData, shows.active]
    // );

    // const handleSelect = useCallback(
    //     (e) => {
    //         const { dataset } = e.currentTarget;
    //         const { id } = dataset;
    //         return api.getSelected(id)
    //             .then((res) => {
    //                 setSelected(res);
    //                 toggleOpen();
    //             });
    //     }, []
    // );

    // console.log('loading', loading);

    return (
        <div>
            <Header title="Hooks useState way" value={query} onChange={handleChange} />
            <List data={data} onSelect={handleSelect} />
            <Dialog
                isOpen={open}
                handleDialogClose={toggleOpen}
                showInfo={selected}
            />
        </div>
    );
};

export default Shows;
export { MoviesAsClass };
// export default Movies;
