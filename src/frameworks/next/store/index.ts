import { createStore, applyMiddleware, combineReducers, StoreEnhancer, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as init, InitStore } from './init';

const bindMiddleware = (middleware): StoreEnhancer => {
    return composeWithDevTools(applyMiddleware(...middleware));
};

export interface TAppStore {
    init: InitStore;
}

export const appReducer = combineReducers({ init });

export const store = (): Store => {
    return createStore(appReducer, bindMiddleware([]));
};
