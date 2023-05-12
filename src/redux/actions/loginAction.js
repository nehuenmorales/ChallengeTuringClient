import axios from "axios";

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const ERROR_LOGIN = 'ERROR_LOGIN'
export const ERROR_REGISTER = 'ERROR_REGISTER'

export function loginAction(user) {
    return async (dispatch) => {
        try {
            const data = await axios.post(`https://github-challengeturing-production.up.railway.app/auth/login`, user)
            dispatch({
                type: LOGIN,
                payload: data,
            })
        } catch (err) {
            const error = 'usuario o contraceña invalido'
            dispatch({
                type: ERROR_LOGIN,
                payload: error
            })
        }

    }
}

export function registerAction(user) {
    return async (dispatch) => {

        const data = await axios.post(`https://github-challengeturing-production.up.railway.app/auth/register`, user)
        dispatch({
            type: REGISTER,
            payload: data,
        })

    }
}