import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/remixicon.css";
import "../styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/apollo";
// Navbar CSS
import "../styles/navbar.css";
// Footer CSS
import "../styles/footer.css";
// Globals CSS
import "../styles/globals.css";
// Responsive CSS
import "../styles/responsive.css";

import Head from "next/head";
import ScrollToTop from "@/components/Layout/ScrollToTop";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Grayling - Content First, Digital Agency</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:description" content="Grayling - Content First, Digital Agency"/>
  <meta property="og:title" content="Grayling - Content First, Digital Agency"/>
  <meta property="og:image" content="https://dev.graylingagency.co/sites/grayling-v2/wp-content/uploads/2022/10/social-media-for-business-1024x576-1.jpeg"/>
      </Head>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      <ScrollToTop />
    </>
  );
}

export default MyApp;