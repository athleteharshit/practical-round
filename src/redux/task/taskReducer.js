import { ADD_TASK, REMOVE_TASK } from "./taskType"

const initialState = {
    data: [],
}

const taskReducer = (state = initialState, action) => {
    // console.log(state, action)
    switch(action.type) {
        case ADD_TASK: 
        return {
            ...state,
           data: [
               ...state.data,
               {
                   task: action.task,
                   description: action.description,
                   startTime: action.startTime,
                   endTime: action.endTime,
                   id: action.id,
               }
           ]
        }
        case REMOVE_TASK:
            const task = state.data.filter((item) => item.id !== action.id);
        return {
            ...state,
            data: task
        }
        default: return state;
    }
}

export default taskReducer;