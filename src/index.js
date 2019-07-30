import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Person from './main/Person'

ReactDOM.render(
    <div>
        <Person />
    </div>
    , document.getElementById('root'));

serviceWorker.unregister();
