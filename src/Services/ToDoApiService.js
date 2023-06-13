import axios from "axios";
const baseUrl = 'http://localhost:3030/api/'

/*  Get List of Todo task  */
const getToDoList = () => {
    return new Promise(async (resolve, reject) => {
        await axios.get(`${baseUrl}todo/getToDoTask`)
        .then(response => {
            console.log("======>>>>> ", response.data)
            resolve(response?.data)
        })
        .catch(error => {
            console.log("todo get list ", error)
            reject(error)
        })
    })
}

/*  Create Todo task  */
const createToDoTask = (data) => {
    return new Promise(async (resolve, reject) => {
        await axios.post(`${baseUrl}todo/createToDoTask`, {
            task: data.task,
            status: data.status
        })
        .then(response => {
            console.log("======>>>>> ", response.data)
            resolve(response?.data)
        })
        .catch(error => {
            console.log("todo create ", error)
            reject(error)
        })
    })
}

/*  Update the Todo task  */
const updateToDoTask = (data) => {
    return new Promise(async (resolve, reject) => {
        await axios.put(`${baseUrl}todo/updateToDoTask/${data.id}`, {
            task: data.task,
            status: data.status
        })
        .then(response => {
            console.log("======>>>>> ", response.data)
            resolve(response?.data)
        })
        .catch(error => {
            console.log("todo update list ", error)
            reject(error)
        })
    })
}

/*  Delete particular Todo task  */
const deleteToDoTask = (data) => {
    return new Promise(async (resolve, reject) => {
        await axios.delete(`${baseUrl}todo/deleteToDoTask/${data.id}`, {
            task: data.task,
            status: data.status
        })
        .then(response => {
            console.log("======>>>>> ", response.data)
            resolve(response?.data)
        })
        .catch(error => {
            console.log("todo delete ", error)
            reject(error)
        })
    })
}

export {
    getToDoList,
    updateToDoTask,
    deleteToDoTask,
    createToDoTask
}