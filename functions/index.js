const functions = require('firebase-functions');
const admin = require('firebase-admin')
const express = require('express')
const app = express()
admin.initializeApp();

const firebaseConfig = {
    apiKey: "AIzaSyCtm4xycvUlTEhvQkyflHCUOkCZ6QCuPd8",
    authDomain: "certificate-generator-69a8b.firebaseapp.com",
    databaseURL: "https://certificate-generator-69a8b.firebaseio.com",
    projectId: "certificate-generator-69a8b",
    storageBucket: "certificate-generator-69a8b.appspot.com",
    messagingSenderId: "934758987690",
    appId: "1:934758987690:web:7aeab45b12c5dedaef1dd3",
    measurementId: "G-9TYMG7QLG6"
};

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
