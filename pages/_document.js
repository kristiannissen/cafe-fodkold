/**
 * @file pages/_document.js
 *
 */
import Document, { Html, Head, Main, NextScript } from "next/document";

const MyDoc = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id="dialog-mount" />
        <div id="toast-mount" />
      </body>
    </Html>
  );
};

export default MyDoc;
