import axios from "axios";
const api = axios.create({
    baseURL: "http://218.235.241.107:8090",
});

export const logInApi = {
    postPermissionCode: (code: any) =>
        api.get("/login/oauth_kakao", { params: { code: code } }),
};
