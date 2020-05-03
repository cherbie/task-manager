const express = require('express')
const admin = require('firebase-admin')

// Fetch Private Admin Key
var serviceAccount = require("./.service_account_key.json");

// Initialse firebase-admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://todo-61039.firebaseio.com"
});

let firestoreDB = admin.firestore(); // database instance

/*
 * Middleware that populates res.locals with the user-identifier
 */
const setUidMiddleware = (req, res, next) => {
  if(typeof req.body.uid === "undefined")
    return res.status(400).json({ok: false, msg: "Invalid request body parameters."}).end();
  
  res.locals.uid = req.body.uid;
  next()
}

/*
 * Middleware that populates res.locals with the firestore database instance
 */
const setDbMiddleware = (req, res, next) => {
  res.locals.db = firestoreDB;
  next();
}


module.exports = (app) => {
  app.use(express.json()) // parse text/json request body

  app.use(setUidMiddleware) // check for uid in request body
  app.use(setDbMiddleware) // sets firestore database object
}