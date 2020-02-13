/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Document, { Main, NextScript, DocumentInitialProps, Head } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document<{ styleTags: any }> {
    static getInitialProps({ renderPage }): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => (props): any => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();

        // Returns an object like: { html, head, errorHtml, chunks, styles }
        return { ...page, styleTags };
    }

    render(): JSX.Element {
        return (
            <html>
                <Head>{this.props.styleTags}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
