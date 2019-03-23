# All for one and one for all
## Isolated, Framework agnostic, Business logic layer 

### Run Project
```
npm start
```

### Goal
Write same javascript functions as data layer api and event handlers for all major front-end view solutions and state managements.

#### Example

You are working on a screen that has few states you need to save somewhere, either in components's inner state system, in some data managment layer that called state manager like redux or mobX.

```js
// React inner state
const [query, setQuery] = useState('');
const [data, setData] = useState([]);
const [selected, setSelected] = useState({});
const [open, setOpen] = useState(false);

// or react conter provider data layer
this.state = {
    query: '',
    data: [],
    selected: {},
    open: false
};

// or mobx 
@observable search = '';
@observable data = [];
@observable selected = {};
@observable open = false;

// or redux
export default combineReducers({
    data, // redux reducer with default value []
    query, // ''
    selected, // {}
    modal // false
});

// or angular.js 
$scope.query = '';
$scope.data = [];
$scope.search = '';
$scope.open = false;

```

In all the Ways, you gonna need setters and getters for those states, like hooks provider as the second argument in the array destruction.
The pattern of using functions to declare same behaviour on every use is seen by react hooks.
This pattern works with every ui framework as native hooks - they are simply functions that return other functions.

```js
// this function use setter and getter to toggle bool state
const toggleBool = (setter, getter) => () => {
    setter(!getter);
};
```
```js
// usage with react state
const [open, setOpen] = useState(false);

const toggle = toggleBool(setOpen, open)
toggle()
```
React, Vue and Angular.js examples as routes are provided.

The app is made from 6 routes...
 - Example with react local component state management, hookway and classway
 - Example with react context api state management, hookway and classway
 - Example with react and redux state management
 - Example with react and mobX state management
 - Example with vue.js local component data
 - Example with angular.js local controller scope

#### Bugs
- Vue and angular.js onChange event works onBlur - new to vue and moved to react from angular 3 years ago.
- Vue example does not have modal.
- Angular example contains basic modal with the name and the id of the show.
- On route change to redux, the screen does now update, refresh solves this. 

#### Notes
- This is React app, it runs react router to handle the urls. Angular.js and Vue mount into React.
- Debounce for the input is not supported
- The pattern of putting every state in redux or mobx should not be used - it is poc to handle state in many places. If none of the routes use the query state, it should not be global state!.
- The ui and the api usage inspired by https://github.com/ShavitCohen/redux-middleware-dev-pattern
- Very easy to test and achieve 100% coverage
- Maximize Code Reuse
## License
Copyright © Yuri Krupnik  |  The MIT License
