import { createStore, applyMiddleware} from "redux";
import rootReducer from '../reducers';
import logger from "../middlewares/logger";
import censure from "../middlewares/censure";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(logger, censure, thunk));
export default store;