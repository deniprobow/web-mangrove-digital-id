import Document, { Html, Main, NextScript } from 'next/document'
import Head from 'next/head'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Mangrove Digital</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
