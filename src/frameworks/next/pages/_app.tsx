import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import { store } from '../store';

const MyApp = (props): JSX.Element => {
    const { Component, pageProps, store } = props;
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default withRedux(store)(MyApp);
