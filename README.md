# Ui is Dumb - Everything Is The Same

## Isolated Business logic layer for all view packages
### Run Project
```
npm start
```

### Goal
Write same javascript functions as data layer api for all major front-end view solutions and state managements.
```js
const useChange = (setSearch, setData, apiMethod) => (e) => {
    let value;
    if (typeof e === 'string') {
        value = e;
    } else {
        value = e.target.value; // eslint-disable-line
        setSearch(value);
    }
    apiMethod(value)
        .then(setData);
};

const useChangeRedux = (setSearch, setData, apiMethod) => e => (dispatch) => {
    let value;
    if (typeof e === 'string') {
        value = e;
    } else {
        value = e.target.value; // eslint-disable-line
        dispatch(setSearch(value));
    }
    apiMethod(value)
        .then((res) => {
            setData(res)(dispatch);
        });
};

const useSelect = (setSelected, toggleOpen, apiMethod) => (e) => {
    const { dataset } = e.currentTarget;
    const { id } = dataset;
    apiMethod(id)
        .then((res) => {
            setSelected(res);
            toggleOpen();
        });
};

const useSelectRedux = (setSelected, toggleOpen, apiMethod) => e => (dispatch) => {
    const { dataset } = e.currentTarget;
    const { id } = dataset;
    apiMethod(id)
        .then((res) => {
            setSelected(res)(dispatch);
            toggleOpen()(dispatch);
        });
};


function useToggle(toggle, value) {
    return function toggleCallback() {
        toggle(!value);
    };
}
```

React, Vue and Angular.js examples as routes a provided.

The app is made from 6 routes...
 - React Example with local component state management, hookway and classway
 - React Example with context api state management
 - React Example with redux state management
 - React Example with mobX state management
 - React Example with vue.js local component data
 - React Example with angular.js local controller scope

### Ground rules
- Webpack4
- Babel7
- Eslint
- React - context api as state manager
- React-router 4
- Server side rendering
- Sass
- Express - Express
- MongoDB - Users and projects demo api's
- Server side rendering
- Dynamic imports
- MongoDB - Api
- Socket.io - chat example
- Auth - oAuth - Auth - session storage via mongodb
- Jest testing - Jest
- Eslint checking - Docker integration
