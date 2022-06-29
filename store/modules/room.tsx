import { createSlice } from "@reduxjs/toolkit";

type initialStateTypes = {
    ROOM_LIST: { [id: string]: listTypes };
    MAP_ROOM_LIST: { [id: string]: listTypes }; // 지도 상에 보이는 매물 정보
    ROOM_ID: string;
};

type listTypes = {
    address: string;
    aircon: boolean;
    availPeriodConsul: boolean;
    availPeriodFrom: string;
    availPeriodTo: string;
    bed: boolean;
    car: boolean;
    closet: boolean;
    dealType: string;
    deposit: number;
    desk: boolean;
    detailAddress: string;
    dong: string;
    elevator: boolean;
    entireFloor: number;
    explain: string;
    floor: number;
    fullOption: false;
    gas: boolean;
    induc: boolean;
    jibun: string;
    latitude: number;
    loan: boolean;
    longitude: number;
    manage: boolean;
    manageCost: number;
    manageElec: boolean;
    manageGas: boolean;
    manageInternet: boolean;
    manageTV: boolean;
    manageWater: boolean;
    micro: boolean;
    pet: boolean;
    price: number;
    priceUnit: string;
    refri: boolean;
    ri: string;
    roomID: string;
    roomSize: number;
    roomType: string;
    shelf: boolean;
    shoe: boolean;
    sido: string;
    sigungu: string;
    sink: boolean;
    struct: string;
    title: string;
    washer: boolean;
    ROOM_ID: string;
};

const initialState: initialStateTypes = {
    ROOM_LIST: {},
    MAP_ROOM_LIST: {},
    ROOM_ID: "312312123",
};

type itemTypes = { [id: string]: listTypes };

const room = createSlice({
    name: "room",
    initialState,
    reducers: {
        dispatchRoomList: (state, action) => {
            let list: itemTypes = {};
            for (const item of action.payload) {
                list[item.roomID] = item;
            }
            state.ROOM_LIST = { ...state.ROOM_LIST, ...list };
        },
        dispatchMapRoomList: (state, action) => {
            let list: itemTypes = {};
            for (const item of action.payload.data) {
                list[item.roomID] = item;
            }
            state.MAP_ROOM_LIST = list;
        },
        dispatchRoomId: (state, action) => {
            state.ROOM_ID = action.payload;
        },
    },
});

export default room.reducer;

const { dispatchRoomList, dispatchMapRoomList, dispatchRoomId } = room.actions;

export { dispatchRoomList, dispatchMapRoomList, dispatchRoomId };
export type { listTypes };
