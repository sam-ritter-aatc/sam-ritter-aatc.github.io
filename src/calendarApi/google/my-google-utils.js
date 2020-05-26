//const { google } = require('googleapis');

const {oauth2} = require('googleapis/build/src/apis/oauth2/v2');
const {googleCalendar}=require('googleapis/build/src/apis/calendar/v3');

require('dotenv').config()


// scopes use for the application
const defaultScope = [
    'https://www.googleapis.com/auth/calendar.events',
]

// google app config
const googleConfig = {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirect: 'http://localhost:3000/auth/success'
}

// // get auth url
// module.exports.urlGoogle = () => {
//     const auth = createConnection();
//     const url = getConnectionUrl(auth);
//     return url;
// }

// // generate authentication url
// const getConnectionUrl = (auth) => {
//     return auth.generateAuthUrl({
//         access_type: 'offline',
//         prompt: 'consent',
//         scope: defaultScope
//     });
// }


// oauth2 client
function createConnection() {
    return new oauth2(
        googleConfig.clientId,
        googleConfig.clientSecret,
        googleConfig.redirect
    );
}
