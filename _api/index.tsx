import axios from "axios";

const api = axios.create({
    baseURL: "http://3.39.129.136:8090/DungziProject",
});

export const roomApi = {
    postRoom: (data: any) => api.post("/room/registerAction", data),
};

export const mapApi = {
    getRoom: (coordinate: Array<number>) =>
        api.get("/room/map", {
            params: {
                startLongitude: coordinate[0],
                startLatitude: coordinate[1],
                endLongitude: coordinate[2],
                endLatitude: coordinate[3],
            },
        }),
    getRoomDetail: (ROOMID: string) =>
        api.get("/room/detail", { params: { ROOMID } }),
};
