const admin = require("firebase-admin");

const serviceAccount = require("./google-console-key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const firestoreDB = admin.firestore();

module.exports = { firestoreDB };
