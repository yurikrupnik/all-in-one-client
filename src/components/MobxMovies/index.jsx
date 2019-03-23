import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Header from '../Example/Header';
import List from '../Example/List';
import Dialog from '../Example/Dialog';
import { useChange, useSelect } from '../../dataHelpers';
import api from '../../api/movies/api';

class AppState {
    @observable search = '';

    @observable data = [];

    @observable selected = {};

    @observable open = false;

    @action.bound
    setSelected(value) {
        this.selected = value;
    }

    @action.bound
    setData(value) {
        this.data = value;
    }

    @action.bound
    toggleOpen() {
        this.open = !this.open;
    }

    @action.bound
    setSearch(value) {
        this.search = value;
    }

    @action.bound
    handleChange = useChange(api.fetch, this.setSearch, this.setData);

    @action.bound
    handleSelect = useSelect(api.getSelected, null, this.setSelected, this.toggleOpen);
}

const TimerView = observer(props => (
    <div>
        <Header title="Mobx way" value={props.state.search} onChange={props.state.handleChange} />
        <List data={props.state.data} onSelect={props.state.handleSelect} />
        <Dialog
            isOpen={props.state.open}
            handleDialogClose={(props.state.toggleOpen)}
            showInfo={props.state.selected}
        />
    </div>
));


@observer
class MobxMovies extends React.Component {
    render() {
        return (
            <div>
                <TimerView state={new AppState()} />
                <DevTools />
            </div>
        );
    }
}

export default MobxMovies;
export { AppState };
