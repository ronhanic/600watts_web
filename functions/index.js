
const functions = require("firebase-functions");
const admin = require('firebase-admin');
const server = require("./src/server");


admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://watts-dev.firebaseio.com"
});


const api = functions.runWith({memory:"2GB",timeoutSeconds:120})
.https.onRequest(server);

module.exports = {
  api
}
