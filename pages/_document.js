/**
 * @file pages/_document.js
 *
 */
import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

const MyDoc = () => {
  return (
    <Html>
      <Head />
      <body>
        <input type="checkbox" id="swipe" />
        <label htmlFor="swipe">Menu</label>
        <aside>
          <nav>
            <ul>
              <li>
                <Link href="/">Hjem</Link>
              </li>
              <li>
                <Link href="/">Om Cafe Fodkold</Link>
              </li>
              <li>
                <Link href="/">Pølsevognens historie</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <header>
          <h1>Cafe Fodkold</h1>
        </header>
        <main>
          <Main />
          <NextScript />
          <div id="dialog-mount" />
          <div id="toast-mount" />
        </main>
        <footer></footer>
      </body>
    </Html>
  );
};

export default MyDoc;
