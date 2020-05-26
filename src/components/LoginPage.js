import React, {  Component } from 'react';
import {Redirect} from 'react-router';

//import apiCalendar from "react-google-calendar-api/ApiCalendar";
const googleUtils = require('../calendarApi/google/my-google-utils');

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1>login</h1>
            </div>
            // <Redirect to={googleUtils.urlGoogle()} />
        );
    }
};