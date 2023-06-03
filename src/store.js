import {createStore} from 'redux';
import employeReducer from './reducer/employeReducer'

const store = createStore(employeReducer);
export default store;