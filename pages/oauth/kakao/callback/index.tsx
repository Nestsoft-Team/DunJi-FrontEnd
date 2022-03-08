import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { logInApi } from "_api";
export default function Auth() {
    const getCode = () => {
        const id = window.location.href.split("callback?code=")[1];
        return id;
    };

    useEffect(() => {
        async function postCode() {
            const code = getCode();
            console.log(code);
            try {
                console.log("start");
                let result = await logInApi.postPermissionCode(code);
                console.log(result);
                console.log("end");
            } catch {
                alert("로그인을 실패하였습니다. 다시 시도해 주세요.");
            } finally {
            }
        }
        postCode();
    }, []);

    return <div></div>;
}
