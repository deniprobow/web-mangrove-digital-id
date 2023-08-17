import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Font+Awesome+6+Free%3A900"/>
          <Link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Font+Awesome+6+Brands%3A400"/>
          <Link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Manrope%3A400%2C700%2C800"/>
          <Link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C700%2C800%2C900"/>
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
