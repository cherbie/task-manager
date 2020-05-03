// -- Firebase SDK --
import * as firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCjZZP3FznCDbzNTWTP_OJR0rmXYqYVbvY",
  authDomain: "todo-61039.firebaseapp.com",
  databaseURL: "https://todo-61039.firebaseio.com",
  projectId: "todo-61039",
  storageBucket: "todo-61039.appspot.com",
  messagingSenderId: "289314671520",
  appId: "1:289314671520:web:cc311aafb285ee88ac72c5",
  measurementId: "G-Q5TLW2MZLP"
}

export default () => firebase.initializeApp(firebaseConfig, "Task Tracker")