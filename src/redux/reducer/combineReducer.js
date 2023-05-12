import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import taskReducer from "./taskReducer";
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    loginReducer: loginReducer,
    taskReducer: taskReducer,
    form: formReducer
})


export default reducers;