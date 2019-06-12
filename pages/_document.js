import Document, { Html, Head, Main, NextScript } from 'next/document'
 
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
 
  render() {
    return (
      <Html >
        <Head>
          <meta charSet="UTF-8" />
        </Head>
        <body className="white-vertion black-bg">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
 
export default MyDocument