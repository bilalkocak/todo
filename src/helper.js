export const isTimeUp = (_date) => {
    const today = new Date();

    return _date < today
}

export const filteredTasks = (taskList) => {
    let tasks = {
        completed: [],
        unCompleted: [],
    }
    taskList.forEach(task => {
        if (task.isDone === true) {
            tasks.completed.push(task)
        } else {
            tasks.unCompleted.push(task)
        }
    })
    return tasks;
}
