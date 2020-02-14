const express = require('express');
const firebase = require("firebase/app");
require('firebase/auth');
require('firebase/database');

var firebaseConfig = {
    apiKey: "AIzaSyAmpYcoRasnQ2PIuhrUsWT5gzS-uvIL-70",
    authDomain: "todolist-72f6d.firebaseapp.com",
    databaseURL: "https://todolist-72f6d.firebaseio.com",
    projectId: "todolist-72f6d",
    storageBucket: "todolist-72f6d.appspot.com",
    messagingSenderId: "806075941076",
    appId: "1:806075941076:web:5432cbd5774c6d3e9bfb41",
    measurementId: "G-C61NM483PG"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const ref = database.ref('task');

module.exports = {ref, database ,firebaseConfig}
