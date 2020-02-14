import { InitActionTypes, SAY_HELLO_TO_REDUX } from './types';

export const sayHelloToNext = (): InitActionTypes => {
    return {
        type: SAY_HELLO_TO_REDUX,
        payload: {
            name: 'Next.tsx with Redux',
        },
    };
};
