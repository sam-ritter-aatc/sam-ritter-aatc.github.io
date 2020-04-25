const googleCalendar = require('./googleCalendar');

const newEvent = {
    summary: 'test event from api',
    description: 'a test event for api dev',
    start: {
        dateTime: new Date().toISOString(),
    },
    end: {
        dateTime: new Date().toISOString()
    }

}
googleCalendar.insertEvent(newEvent);
// googleCalendar.listEvents((events)=>{
//     console.log('got events'+ events);
// })