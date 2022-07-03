import {legacy_createStore as createStore, combineReducers} from 'redux';
import { todoReducer } from './reducer.js';

const rootReducer = combineReducers({
    todos:todoReducer
});
export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())