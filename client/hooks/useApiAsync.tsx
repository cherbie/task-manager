import axios from "axios"

export default () => {
  /**
   * Make POST request to firebasae function "/api/getTasks" (async)
   */
  const updateDbTasks = (param: {uid: string, tasks: any[]}) => {
    let body = {
      "uid": param.uid,
      "data": {
        "tasks": param.tasks
      }
    }
    console.log("updateDb async request made")
    return axios.post("https://us-central1-todo-61039.cloudfunctions.net/api/setTasks", body) // firebase functions: api
  }

  /**
   * Make POST request to firebase function "/api/setTasks"
   */
  const fetchDbTasks = (uid: string) => {
    let body = {
      "uid": uid
    }
    console.log("fetchDb async request made")
    return axios.post("https://us-central1-todo-61039.cloudfunctions.net/api/getTasks", body) // firebase functions: api
  }

  return { fetchDbTasks, updateDbTasks }
}