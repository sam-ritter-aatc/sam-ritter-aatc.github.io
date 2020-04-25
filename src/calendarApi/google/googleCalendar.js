const fs = require('fs');
const { google } = require('googleapis')

const SCOPES = ['https://www.googleapis.com/auth/calendar.events'];

const GOOGLE_CALENDAR_ID = 'aatriclub.org_i0u6gmv2ged0sm131ei7k49590@group.calendar.google.com';
const GOOGLE_PROJECT_NUMBER = "359407272999"
const TOKEN_PATH = './token.json';

const clientjson = require('./client-secret.json');

const oAuth2Client = new google.auth.OAuth2(
    clientjson.installed.client_id,
    clientjson.installed.client_secret,
    clientjson.installed.redirect_uris[0]
);

const connectionUrl = () => {
    return oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
    })
}
module.exports.listEvents = (auth, callback) => {
    const calendar = google.calendar({version: 'v3', auth})
    calendar.events.list({
        calendarId: GOOGLE_CALENDAR_ID,
        timeMin: (new Date()).toISOString(),
        maxResults: 50,
        singleEvents: true,
        orderBy: 'startTime'
    }, (err,res) => {
        if (err) return console.log('The API return an error: '+ JSON.stringify({error:err}));
        const events = res.data.items;
        if( events.length ) {
            callback(events);
        } else {
            console.log('No upcoming events found.');
        }
    });
    console.log("doin' the thing");
}

// module.exports.insertEvent = (theEvent) => {
//     calendar.events.insert({
//         auth: jwtClient,
//         calendarId: GOOGLE_CALENDAR_ID,
//         resource: theEvent
//     }, (err, event) => {
//         if( err ) {
//             console.log('oops, something went wrong: '+err);
//             return;
//         }
//         console.log('Event created: %s', event.htmlLink);
//     })
// }
