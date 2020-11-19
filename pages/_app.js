import "../styles/globals.css";
import "../styles/contacts.css";
import "../styles/about.css";
import "../styles/backgroundVideo.css";
import "../styles/button.css";
import "../styles/footer.css";
import "../styles/header.css";
import "../styles/home.css";
import "../styles/modal.css";
import "../styles/order.css";
import "../styles/photo.css";
import "../styles/portfolio.css";
import "../styles/portfolioItem.css";
import "../styles/video.css";
import "../styles/videoSelector.css";
import "../styles/videoCase.css";
import "../styles/privacyPolicy.css";
import "../styles/textField.css";
import Document, { Html, Head, Main, NextScript } from "next/document";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps}>
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
      </Html>
    </Component>
  );
}

export default MyApp;
