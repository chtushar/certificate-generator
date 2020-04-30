const functions = require('firebase-functions');
const express = require('express')
const app = express()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

app.get('/users', (req, res) => {
    let ok = 'ok';
    return res.json({ok})
})


exports.api = functions.https.onRequest(app);
