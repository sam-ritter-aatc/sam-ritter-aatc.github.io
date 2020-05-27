import React, { Component } from "react";
// import moment from "moment";
// import events from "./events"

import "./App.css";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick


export default class App extends Component {
  calendarComponentRef = React.createRef()
  state = {
    calendarWeekends: true,
    calendarEvents: [
      {
        title: 'Event Now',
        start: new Date()
      }
    ]
  }

    render() {
        return (
            <div className='aatc-events-calendar-app'>
                 <div className='aatc-events-calendar'>
                    <FullCalendar
                        defaultView="dayGridMonth"
                        firstDay={ 1 }
                        fixedWeekCount={ false }
                        header={{
                            left: 'prev,next today',
                            center: 'title',
                            right: ''
                            // right: 'dayGridMonth,timeGridWeek,listWeek'
                        }}
                        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                        ref={ this.calendarComponentRef }
                        weekends={ this.state.calendarWeekends }
                        events={ this.state.calendarEvents }
                        dateClick={ this.handleDateClick }
                    />
                </div>
            </div>
        )
    }

    handleDateClick = (arg) => {
        // eslint-disable-next-line no-restricted-globals
        if ( confirm('Would you like to add an event to ' + arg.dateStr + ' ?') ){
            this.setState({  // add new event data
                calendarEvents: this.state.calendarEvents.concat({ // creates a new array
                    title: 'New Event Now',
                    start: arg.date,
                    allDay: arg.allDay
                })
            })
        }
    }
}

