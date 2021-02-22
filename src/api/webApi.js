import axios from "axios";

export const fetchTasksApi = (id) => {
    const fetchAllTasksUrl = `https://riteg-todo.herokuapp.com/collections/${id}/todos`;
    return axios.get(fetchAllTasksUrl)
}

export const deleteTaskApi = (id) => {
    const fetchAllTasksUrl = `https://riteg-todo.herokuapp.com/collections/${id}`;
    return axios.delete(fetchAllTasksUrl)
}

export const fetchCollectionsApi = () => {
    const fetchAllTasksUrl = 'https://riteg-todo.herokuapp.com/collections';
    return axios.get(fetchAllTasksUrl)
}

export const addCollectionsApi = (data) => {
    const fetchAllTasksUrl = 'https://riteg-todo.herokuapp.com/collections';
    return axios.post(fetchAllTasksUrl, data)
}
