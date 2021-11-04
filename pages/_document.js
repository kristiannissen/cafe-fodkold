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
                </body>
            </Html>
        )
}

export default MyDoc
