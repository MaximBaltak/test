import {combineReducers, createStore} from "redux";
import windowReducer from "./reducers/windowReducer";

const reducers=combineReducers({
   window: windowReducer
})

const store=createStore(reducers)
export default store