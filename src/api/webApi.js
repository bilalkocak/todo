import axios from "axios";

export const fetchTasksApi = () => {
    const fetchAllTasksUrl = 'https://riteg-todo.herokuapp.com/todos';
    return axios.get(fetchAllTasksUrl)
}
