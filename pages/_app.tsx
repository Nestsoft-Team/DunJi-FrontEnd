import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/FontAwesome";
import { wrapper } from "store/index";
import Layout from "components/layout";
import { QueryClient, QueryClientProvider } from "react-query";

function App({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </QueryClientProvider>
    );
}

export default wrapper.withRedux(App);
