import { useRouter } from "next/router";
import { useEffect } from "react";
import Nav from "./Nav";

type AppLayoutProps = {
    children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
    const router = useRouter();
    useEffect(() => {
        const handleResize = function () {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return <div>{children}</div>;
}

export default AppLayout;
