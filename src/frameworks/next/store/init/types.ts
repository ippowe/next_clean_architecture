export const SAY_HELLO_TO_REDUX = 'IT/SAY_HELLO_TO_REDUX';

interface SayHelloToRedux {
    type: typeof SAY_HELLO_TO_REDUX;
    payload: {
        name: string;
    };
}

export type InitActionTypes = SayHelloToRedux;

export interface InitStore {
    name: string;
}
