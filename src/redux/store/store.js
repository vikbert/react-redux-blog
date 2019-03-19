import {createStore} from 'redux';
import rootReducer from '../reducers/index';
import configureEnhancer from '../containers/Enhancer';

const enhancer = configureEnhancer();
const initialState = {};

export default function configureStore() {
  return createStore(rootReducer, initialState, enhancer);
}
