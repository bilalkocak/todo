import axios from "axios";

export const fetchTasksApi = (id) => {
    const url = `https://riteg-todo.herokuapp.com/collections/${id}/todos`;
    return axios.get(url)
}

export const fetchAllTasksApi = () => {
    const url = `https://riteg-todo.herokuapp.com/todos/`;
    return axios.get(url)
}

export const addTasksApi = (data) => {
    const url = `https://riteg-todo.herokuapp.com/todos`;
    return axios.post(url, data)
}

export const updateTaskApi = (data) => {
    const url = `https://riteg-todo.herokuapp.com/todos/${data.id}`;
    return axios.put(url, data)
}

export const deleteTaskApi = (id) => {
    const url = `https://riteg-todo.herokuapp.com/todos/${id}`;
    return axios.delete(url)
}

export const fetchCollectionsApi = () => {
    const url = 'https://riteg-todo.herokuapp.com/collections';
    return axios.get(url)
}

export const fetchCollectionByIdApi = (id) => {
    const url = `https://riteg-todo.herokuapp.com/collections/${id}`;
    return axios.get(url)
}

export const addCollectionsApi = (data) => {
    const url = 'https://riteg-todo.herokuapp.com/collections';
    return axios.post(url, data)
}

export const updateCollectionApi = (data) => {
    const url = `https://riteg-todo.herokuapp.com/collections/${data.id}`;
    return axios.put(url, data)
}

export const deleteCollectionApi = (id) => {
    const url = `https://riteg-todo.herokuapp.com/collections/${id}`;
    return axios.delete(url)
}
