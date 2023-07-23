// store.js
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './userReducer';

const store = createStore(userReducer);

export default store;
