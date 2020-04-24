import React, { Component } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events"

import "./App.css";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick


export default class App extends React.Component {
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
                {/*<div className='aatc-events-calendar-top'>*/}
                {/*    <button onClick={ this.toggleWeekends }>toggle weekends</button>&nbsp;*/}
                {/*    <button onClick={ this.gotoPast }>go to a date in the past</button>&nbsp;*/}
                {/*    (also, click a date/time to add an event)*/}
                {/*</div>*/}
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
                        // dateClick={ this.handleDateClick }
                    />
                </div>
            </div>
        )
    }

    // handleDateClick = (arg) => {
    //     if ( confirm('Would you like to add an event to ' + arg.dateStr + ' ?') ){
    //         this.setState({  // add new event data
    //             calendarEvents: this.state.calendarEvents.concat({ // creates a new array
    //                 title: 'New Event',
    //                 start: arg.date,
    //                 allDay: arg.allDay
    //             })
    //         })
    //     }
    // }
}

// how to retrieve events from API --> https://medium.com/@sajclarke/how-to-populate-react-big-calendar-with-data-from-api-b89dc7362d8

// // set first day of week
// moment.updateLocale('en', {
//   week: {
//     dow: 1,
//     doy: 1
//   },
// });

// const localizer = momentLocalizer(moment);
//
// class App extends Component {
//   // state = {
//   //   events: [
//   //     {
//   //       start: moment().toDate(),
//   //       end: moment()
//   //         .add(1, "days")
//   //         .toDate(),
//   //       title: "Some title"
//   //     }
//   //   ]
//   // };
//   constructor(...args) {
//     super(...args);
//
//     this.state = { events }
//   }
//   handleSelect = ({start, end}) => {
//     const title = window.prompt('New Event name');
//     if (title)
//       this.setState({
//         events: [
//           ...this.state.events,
//           {
//             start,
//             end,
//             title,
//           },
//         ],
//       })
//   };
//
//   render() {
//     return (
//       <div className="App" >
//         <Calendar
//             selectable
//             events={this.state.events}
//           localizer={localizer}
//           defaultDate={new Date()}
//           defaultView="month"
//           events={this.state.events}
//           views={['month','week']}
//             onSelectEvent={event => alert(event.title)}
//             onSelectSlot={this.handleSelect}
//         />
//       </div>
//     );
//   }
// }
//
// export default App;
