const functions = require('firebase-functions');
const admin = require('firebase-admin')
const express = require('express')
const firebaseConfig = require('./firebaseConfig')
const app = express()
admin.initializeApp();



const firebase = require('firebase')
firebase.initializeApp(firebaseConfig)


const db = admin.firestore()
app.get('/users', (req, res) => {
    db
    .collection('users')
    .get()
    .then((data) => {
        let users = []
        data.forEach(doc => {
            users.push(doc.data())
        })
        return res.json(users)
    })
    .catch(err => console.log(err))
})


exports.api = functions.https.onRequest(app);
