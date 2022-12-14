import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleare from "redux-thunk";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    usersPage : usersReducer,
    auth : authReducer,
})


let store = createStore(reducers, applyMiddleware(thunkMiddleare))
window.store = store
export default store