import {createStore, combineReducers} from 'redux';
import topic from './reducers/topic';
import article from "./reducers/article";


const store = createStore(combineReducers({topic, article}));

export default store;