import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/FontAwesome";
import { wrapper } from "../store";
import Layout from "components/layout";

function app({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default wrapper.withRedux(app);
