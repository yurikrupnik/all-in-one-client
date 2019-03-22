import React, { useMemo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Movies from './context';
import {
    useChange, useSelect, useToggle
} from '../../../dataHelpers';
import api from '../api';

const MoviesProvider = (props) => {
    const [search, setSearch] = useState('');
    const [shows, setData] = useState([]);
    const [selected, setSelected] = useState({});
    const [open, setOpen] = useState(false);

    const toggleOpen = useCallback(useToggle(setOpen, open), [open]);

    const handleChange = useCallback(useChange(api.fetch, setSearch, setData), []);
    const handleSelect = useCallback(
        useSelect(api.getSelected, null, setSelected, toggleOpen)
    );
    const value = useMemo(() => ({
        search,
        shows,
        selected,
        open,
        toggleOpen,
        handleChange,
        handleSelect,
        setData
    }), [setData, handleChange, handleSelect, toggleOpen, open, shows, search, selected]);

    const { children } = props;

    return (
        <Movies.Provider value={value}>
            {children}
        </Movies.Provider>
    );
};

MoviesProvider.propTypes = {
    children: PropTypes.element.isRequired
};

class MoviesProviderAsClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            shows: [],
            selected: {},
            open: false
        };
        this.setSelected = this.setSelected.bind(this);
        this.setData = this.setData.bind(this);
        this.setSearch = this.setSearch.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);

        this.handleChange = useChange(
            api.fetch, this.setSearch, this.setData
        );
        this.handleSelect = useSelect(
            api.getSelected, null, this.setSelected, this.toggleOpen
        );
    }

    setSelected(val) {
        this.setState(({ selected: val }));
    }

    setData(val) {
        this.setState(({ shows: val }));
    }

    setSearch(val) {
        this.setState(({ search: val }));
    }

    toggleOpen() {
        this.setState(prevState => ({ open: !prevState.open }));
    }

    render() {
        const val = {
            ...this.state,
            toggleOpen: this.toggleOpen,
            handleChange: this.handleChange,
            handleSelect: this.handleSelect,
            setData: this.setData
        };

        const { children } = this.props;

        return (
            <Movies.Provider value={val}>
                {children}
            </Movies.Provider>
        );
    }
}

MoviesProviderAsClass.propTypes = {
    children: PropTypes.element.isRequired
};
export default MoviesProvider;
export { MoviesProviderAsClass };
