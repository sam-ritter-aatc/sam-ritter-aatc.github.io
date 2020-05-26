import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import EventCalendar from "./components/EventCalendar";

export default class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/aatc-events-calendar" component={EventCalendar}/>
                        <Route exact path="/" component={EventCalendar}/>
                        <Route exact path="/doLogin" render={() => this.redirectLogin()}/>
                    </Switch>
                </div>
            </Router>
        );
    }

    redirectLogin = () => {
        window.location.href = 'http://localhost:5000/login';
        return null;
    }
}
