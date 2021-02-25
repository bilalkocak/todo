import axios from "axios";

const BASE_API_URL = 'https://riteg-todo-be.herokuapp.com'

export const fetchTasksApi = (id) => {
    const url = `${BASE_API_URL}/collections/${id}/todos`;
    return axios.get(url)
}

export const fetchAllTasksApi = () => {
    const url = `${BASE_API_URL}/todos/`;
    return axios.get(url)
}

export const addTasksApi = (data) => {
    const url = `${BASE_API_URL}/todos`;
    return axios.post(url, data)
}

export const updateTaskApi = (data) => {
    const url = `${BASE_API_URL}/todos/${data.id}`;
    return axios.put(url, data)
}

export const deleteTaskApi = (id) => {
    const url = `${BASE_API_URL}/todos/${id}`;
    return axios.delete(url)
}

export const fetchCollectionsApi = () => {
    const url = `${BASE_API_URL}/collections`;
    return axios.get(url)
}

export const fetchCollectionByIdApi = (id) => {
    const url = `${BASE_API_URL}/collections/${id}`;
    return axios.get(url)
}

export const addCollectionsApi = (data) => {
    const url = `${BASE_API_URL}/collections`;
    return axios.post(url, data)
}

export const updateCollectionApi = (data) => {
    const url = `${BASE_API_URL}/collections/${data.id}`;
    return axios.put(url, data)
}

export const deleteCollectionApi = (id) => {
    const url = `${BASE_API_URL}/collections/${id}`;
    return axios.delete(url)
}
