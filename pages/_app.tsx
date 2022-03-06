import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/FontAwesome";

function app({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default app;
