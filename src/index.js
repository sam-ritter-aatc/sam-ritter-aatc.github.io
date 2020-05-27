import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import EventCalendar from "./components/EventCalendar";

ReactDOM.render(<EventCalendar />, document.getElementById('root'));
registerServiceWorker();
