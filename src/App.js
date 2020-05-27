import React, {Component} from 'react';
import './App.css';
import EventCalendar from "./EventCalendar";

export default class App extends Component {

    render() {
        return (
            <div className="App">
                <EventCalendar/>
            </div>
        );
    }

    // redirectLogin = () => {
    //     window.location.href = 'http://localhost:5000/login';
    //     return null;
    // }
}
