import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Init react app 
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// Add class on load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
