import { Reducer } from 'redux';

import { InitStore, InitActionTypes, SAY_HELLO_TO_REDUX } from './types';
import {} from './actions';

const initialState: InitStore = {
    name: '',
};

export const reducer: Reducer<InitStore, InitActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case SAY_HELLO_TO_REDUX: {
            const { name } = action.payload;
            return { ...state, name };
        }
        default: {
            return { ...state };
        }
    }
};
