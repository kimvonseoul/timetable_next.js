import {createStore} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import rootReducer from './index';

const makeStore = () => {
    const store = createStore(rootReducer);
    return store;
}

const wrapper = createWrapper(makeStore);

export default wrapper;