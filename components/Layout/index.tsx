import { useRouter } from "next/router";
import Nav from "./Nav";

type AppLayoutProps = {
    children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
    const router = useRouter();
    return (
        <div>
            {children}
            {router.pathname !== "/room/register" && <Nav />}
        </div>
    );
}

export default AppLayout;
