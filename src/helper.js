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
        if (task.motivation) {
            total += task.motivation
            count++
        }

    })
    return count === 0 ? 0 : (total / count).toFixed(2);
}


