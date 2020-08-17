import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer
})

let store = createStore(reducers)

export default store