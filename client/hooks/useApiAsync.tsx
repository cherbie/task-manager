import axios from "axios"
import { ITask } from "../schema/state"

export default () => {

  const updateDbAsync = (param: {uid: string, tasks: any[]}) => {
    let body = {
      "uid": param.uid,
      "data": {
        "tasks": param.tasks
      }
    }
    console.log("updateDb async request made")
    return axios.post("https://us-central1-todo-61039.cloudfunctions.net/api/setTasks", body) // firebase functions: api
  }

  const fetchDbTasksAsync = (uid: string) => {
    let body = {
      "uid": uid
    }
    console.log("fetchDb async request made")
    return axios.post("https://us-central1-todo-61039.cloudfunctions.net/api/getTasks", body) // firebase functions: api
  }

  return { fetchDbTasks: fetchDbTasksAsync, updateDbTasks: updateDbAsync }
}