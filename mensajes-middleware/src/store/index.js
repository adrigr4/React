import { createStore, applyMiddleware} from "redux";
import rootReducer from '../reducers';
import logger from "../middlewares/logger";
import censure from "../middlewares/censure";


const store = createStore(rootReducer, applyMiddleware(logger, censure));
export default store;