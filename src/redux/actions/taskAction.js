import axios from "axios";


export const GET_ALL_TASKS = "GET_ALL_TASKS";
export const POST_TASK = "POST_TASK";


export function getAllTasks(email) {
    return async (dispatch) => {

        const data = await axios.get(`https://github-challengeturing-production.up.railway.app/task/alltasks/${email}`)
        console.log('----------------> dataaa', data.data)
        dispatch({
            type: GET_ALL_TASKS,
            payload: data,
        })
        console.log('action---------------------------')
    }
}

export function postTask(task, email) {
    return async (dispatch) => {

        const data = await axios.post(`https://github-challengeturing-production.up.railway.app/task/createtask/${email}`, task)
        console.log('----------------> dataaa', data)
        dispatch({
            type: POST_TASK,
            payload: data,
        })

    }
}