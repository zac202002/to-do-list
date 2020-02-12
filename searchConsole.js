const {google} = require('googleapis');
const sampleClient = require('../sampleclient');



const webmasters = google.webmasters({
  version: 'v3',
  auth: '675380732377-lg7g0rf1r3n5c4lbd9l7389578mhcak6.apps.googleusercontent.com'
});

async function runSample() {
  const res = await webmasters.searchanalytics.query({
    siteUrl: 'http://happycoding.today',
    requestBody: {
      startDate: '2019-12-01',
    
      endDate: '2019-12-02',
    },
  });
  console.log(res.data);
  return res.data;
}

const scopes = [
  'https://www.googleapis.com/auth/webmasters',
  'https://www.googleapis.com/auth/webmasters.readonly',
];

if (module === require.main) {
  sampleClient
    .authenticate(scopes)
    .then(runSample)
    .catch(console.error);
}

module.exports = {
  runSample,
  client: sampleClient.oAuth2Client,
};