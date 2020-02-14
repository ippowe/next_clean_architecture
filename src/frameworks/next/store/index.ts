import { createStore, applyMiddleware, combineReducers, StoreEnhancer, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const bindMiddleware = (middleware): StoreEnhancer => {
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middleware));
    } else {
        return applyMiddleware(...middleware);
    }
};

export const appReducer = combineReducers({});

export const store = (): Store => {
    return createStore(appReducer, bindMiddleware([]));
};
