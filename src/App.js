import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

// how to retrieve events from API --> https://medium.com/@sajclarke/how-to-populate-react-big-calendar-with-data-from-api-b89dc7362d8

// set first day of week
moment.updateLocale('en', {
  week: {
    dow: 1,
    doy: 1
  },
});

const localizer = momentLocalizer(moment);

class App extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "Some title"
      }
    ]
  };

  handleSelect = ({start, end}) => {
    const title = window.prompt('New Event name');
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  };

  render() {
    return (
      <div className="App" >
        <Calendar
            selectable
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          views={['month','week']}
            onSelectEvent={event => alert(event.title)}
            onSelectSlot={this.handleSelect}
        />
      </div>
    );
  }
}

export default App;
