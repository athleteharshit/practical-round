import { ADD_TASK, REMOVE_TASK } from "./taskType"


export const addTask = ({task, description, startTime, endTime}) => {
    // console.log(task, description)
    return {
        type: ADD_TASK,
        task,
        description,
        startTime,
        endTime,
        id: Math.random(),
    }
}

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
       id,
    }
}