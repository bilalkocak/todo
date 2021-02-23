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

export const motivationRate = (taskList) => {
    let total = 0;
    let count = 0;
    taskList.forEach(task => {
        total += task.motivation ? task.motivation : 0
        count++
    })
    return (total / count * 5).toFixed(2);
}


