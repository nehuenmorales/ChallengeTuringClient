import { GET_ALL_TASKS, POST_TASK } from "../actions/taskAction"

const initialState = {
    tasks: []
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TASKS:
            return {
                ...state,
                tasks: action.payload.data
            }
        case POST_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload.data]
            }

        default:
            return state
    }
}

export default taskReducer;