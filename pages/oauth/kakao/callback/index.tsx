import { useRouter } from "next/router";

const Auth = () => {
    const {
        query: { code },
    } = useRouter();

    return <div>{code}</div>;
};
export default Auth;
