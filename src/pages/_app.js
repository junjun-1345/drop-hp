import { ApolloProvider } from "@apollo/client";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import client from "../../lib/apollo";
import { store } from "../../redux/store";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <CookiesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CookiesProvider>
    </ApolloProvider>
  );
}

export default MyApp;
