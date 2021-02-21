import axios from "axios";

export const fetchTasksApi = (id) => {
    const fetchAllTasksUrl = `https://riteg-todo.herokuapp.com/collections/${id}`;
    return axios.get(fetchAllTasksUrl)
}

export const fetchCollectionsApi = () => {
    const fetchAllTasksUrl = 'https://riteg-todo.herokuapp.com/collections';
    return axios.get(fetchAllTasksUrl)
}
