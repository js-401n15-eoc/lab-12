// This sample code will make a request to LinkedIn's API to retrieve and print out some
// basic profile information for the user whose access token you provide.

// const https = require('https');

// // Replace with access token for the r_liteprofile permission
// const accessToken = 'YOUR_ACCESS_TOKEN';
// const options = {
//   host: 'api.linkedin.com',
//   path: '/v2/me',
//   method: 'GET',
//   headers: {
//     Authorization: `Bearer ${accessToken}`,
//     'cache-control': 'no-cache',
//     'X-Restli-Protocol-Version': '2.0.0',
//   },
// };

// const profileRequest = https.request(options, function(res) {
//   let data = '';
//   res.on('data', chunk => {
//     data += chunk;
//   });

//   res.on('end', () => {
//     const profileData = JSON.parse(data);
//     console.log(JSON.stringify(profileData, 0, 2));
//   });
// });
// profileRequest.end();

'use strict';

const superagent = require('superagent');

const tokenServerURL = 'https://www.linkedin.com/oauth/v2/accessToken';
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const API_SERVER = 'http://localhost:3000/linkedin-auth';

module.exports = async (req, res, next) => {
  try {
    let code = req.query.code;
    console.log('(1) CODE:', code);

    let remoteToken = await exchangeCodeForToken(code);
    console.log('(2) TOKEN:', remoteToken);
  } catch (e) {
    next(`ERROR ${e.message}`);
  }

  next();
};

async function exchangeCodeForToken(code) {
  let tokenServerResponse = await superagent.post(tokenServerURL).send({
    code: code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: API_SERVER,
    grant_type: 'authorization_code',
  });

  console.log(tokenServerResponse.body);
}
