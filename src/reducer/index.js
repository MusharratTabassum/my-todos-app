import todoReducers from "./todo_reducters";
import { combineReducers } from 'redux'

const rootReducer = combineReducers(
    {
        todoReducers
    }
)
export default rootReducer;