const fs = require('fs');
const { google } = require('googleapis')

const SCOPES = ['https://www.googleapis.com/auth/calendar.events'];

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

