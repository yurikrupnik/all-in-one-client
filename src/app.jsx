import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import routes from './components/routes';
import './styles/_index.scss';

render(
    <BrowserRouter>
        <App routes={routes} />
    </BrowserRouter>, global.document.getElementById('root')
);
