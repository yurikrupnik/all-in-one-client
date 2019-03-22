/* eslint react/jsx-filename-extension: 0 */

// import React from 'react';
import Shows from '../Shows';
import MobxMovies from '../MobxMovies';

const routes = [
    {
        path: '/',
        component: Shows,
        key: 'shows'
    },
    {
        path: '/mobx',
        component: MobxMovies,
        key: 'mobx'
    }
];

export default routes;
