const functions = require('firebase-functions');
const express = require('express');
const consola = require('consola');

const app = express();
const middleware = require("./middleware")

middleware(app) // set all app middleware

/**
 * Retrieve the stored tasks for a particular application user.
 */
app.post('/getTasks', async (req, res) => {
  try {
    let userRef = await res.locals.db.collection('users').doc(res.locals.uid);
    let doc = await userRef.get();
    if(!doc.exists) {
      consola.info("document does not exist for user");
      res.locals.tasks = {tasks: []} // empty doc
      let doc = await userRef.set(res.locals.tasks)
    } else {
      res.locals.tasks = doc.data().tasks;
    }
    res.status(200).json({ok: true, tasks: res.locals.tasks}).end();
  } catch(err) {
    consola.error(err.message);
    res.status(500).json({ok: false}).end();
  }
})

/*
 * Route specific middleware
 */
const setTasksMiddleware = (req, res, next) => {
  if(typeof req.body.data === "undefined")
    res.status(400).json({ok: false, msg: "Insufficient request body paramaters."})
  else 
    res.locals.data = req.body.data;
  
  next();
}

app.post('/setTasks', setTasksMiddleware, async (req, res) => {
  try {
    let userRef = await res.locals.db.collection('users').doc(res.locals.uid);
    let doc = await userRef.set(res.locals.data);
    res.status(200).json({ok: true}).end();
  } catch(err) {
    consola.error(err.message);
    res.status(500).json({ok: false});
  }
})

exports.api = functions.https.onRequest(app);




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
