import { REGISTER, LOGIN, ERROR_LOGIN, ERROR_REGISTER } from "../actions/loginAction"

const initialState = {
    user: {},
    auth: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                user: action.payload.data,
                auth: true
            }
        case REGISTER:
            return {
                user: action.payload.data,
                auth: true
            }
        case ERROR_LOGIN:
            return {
                user: { errorLogin: 'Usuario o contraseña invalidos' }
            }
        case ERROR_REGISTER:
            return {
                user: { errorRegister: 'Usuario o contraseña invalidos' }
            }


        default:
            return state
    }
}

export default loginReducer;