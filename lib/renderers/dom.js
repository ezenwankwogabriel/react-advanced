import ReactDOM from 'react-dom';
import React from 'react';

import StateApi from 'state-api';
import App from '../components/App';

const store = new StateApi(window.initialData);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
