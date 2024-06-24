import reducer from "./reducer";
import { combineReducers } from "redux";

const rootreducer = combineReducers({
    crud : reducer
})

export default rootreducer