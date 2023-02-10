import { combineReducers, legacy_createStore as createStore } from "redux";
import PostReducer from "./postReducer";

const store = createStore(
    combineReducers({
        post: PostReducer,
    }));

export default store;
