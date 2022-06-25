import axios from "axios";

const api = axios.create({
    baseURL: "http://3.39.129.136:8090/DungziProject",
});

export const roomApi = {
    postRoom: (data: any) => api.post("/room/registerAction", data),
};
