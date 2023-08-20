import {createStore,applyMiddleware}from "redux";
import rootReducer from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension"; // se instala 
import thunk from "redux-thunk"

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;