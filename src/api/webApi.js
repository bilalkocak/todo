import axios from "axios";

export const fetchTasksApi = (id) => {
    const url = `https://riteg-todo.herokuapp.com/collections/${id}/todos`;
    return axios.get(url)
}

export const deleteTaskApi = (id) => {
    const url = `https://riteg-todo.herokuapp.com/collections/${id}`;
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
