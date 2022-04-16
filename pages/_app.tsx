import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/FontAwesome";
import { wrapper } from "../store";
import { useEffect } from "react";

function app({ Component, pageProps }: AppProps) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = function () {
                let vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty("--vh", `${vh}px`);
            };

            window.addEventListener("resize", handleResize);

            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    return <Component {...pageProps} />;
}

export default wrapper.withRedux(app);
