import { createSlice } from "@reduxjs/toolkit";

type initialStateTypes = {
    COMPONENT_HANDLER: number;
    POSTCODE_OPEN: boolean;
    ADDRESS_OPEN: boolean;
    MAIN_ADDRESS: null | string;
    DETAIL_ADDRESS: null | string;
    DETAIL_COMPONENT_OPEN: boolean;
    ROOM_TYPE: string;
    TRANSACTION_TYPE: string;
    PRICE_UNIT: string;
    DEPOSIT: number | string;
    MONTHLY: number | string;
    MANAGE: 0 | 1;
    MANAGE_COST: number | string;
    MANAGE_SELECT: Array<number>;
    ENTIRE_FLOOR: number | string;
    CURRENT_FLOOR: number | string;
    STRUCTURE: string;
    ELEVATOR: 0 | 1;
    SIZE: number | string;
    PERIOD_FROM: string;
    PERIOD_TO: string;
    PERIOD_NEGOTIABLE: 0;
    OPTION: Array<number>;
    CAR: 0 | 1 | 2;
    PET: 0 | 1 | 2;
    LOAN: 0 | 1 | 2;
    TITLE: string;
    EXPLAIN: string;
};

const initialState: initialStateTypes = {
    COMPONENT_HANDLER: 0,
    POSTCODE_OPEN: false,
    ADDRESS_OPEN: true,
    MAIN_ADDRESS: null,
    DETAIL_ADDRESS: null,
    DETAIL_COMPONENT_OPEN: false,
    ROOM_TYPE: "",
    TRANSACTION_TYPE: "",
    PRICE_UNIT: "",
    DEPOSIT: "",
    MONTHLY: "",
    MANAGE: 1,
    MANAGE_COST: "",
    MANAGE_SELECT: [0, 0, 0, 0, 0],
    ENTIRE_FLOOR: "전체층",
    CURRENT_FLOOR: "현재층",
    STRUCTURE: "구조",
    ELEVATOR: 0,
    SIZE: "",
    PERIOD_FROM: "",
    PERIOD_TO: "",
    PERIOD_NEGOTIABLE: 0,
    OPTION: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    CAR: 2,
    PET: 2,
    LOAN: 2,
    TITLE: "",
    EXPLAIN: "",
};

const roomRegister = createSlice({
    name: "roomRegister",
    initialState,
    reducers: {
        componentHandle: (state, action) => {
            state.COMPONENT_HANDLER = action.payload;
        },
        dispatchRoomType: (state, action) => {
            state.ROOM_TYPE = action.payload;
        },
        dispatchPostCodeOpen: (state, action) => {
            state.POSTCODE_OPEN = action.payload;
        }, // postcode 컴포넌트 열고 닫기
        dispatchAddressOpen: (state, action) => {
            state.ADDRESS_OPEN = action.payload;
        },
        dispatchMainAddress: (state, action) => {
            state.MAIN_ADDRESS = action.payload;
        },
        dispatchDetailAddress: (state, action) => {
            state.DETAIL_ADDRESS = action.payload;
        },
        detailComponentHandle: (state, action) => {
            state.DETAIL_COMPONENT_OPEN = action.payload;
        },
        dispatchTransactionType: (state, action) => {
            state.TRANSACTION_TYPE = action.payload;
        },
        dispatchPriceUnit: (state, action) => {
            state.PRICE_UNIT = action.payload;
        },
        dispatchDeposit: (state, action) => {
            state.DEPOSIT = action.payload;
        },
        dispatchMonthly: (state, action) => {
            state.MONTHLY = action.payload;
        },
        dispatchManage: (state, action) => {
            state.MANAGE = action.payload;
        },
        dispatchManageCost: (state, action) => {
            state.MANAGE_COST = action.payload;
        },
        dispatchManageSelect: (state, action) => {
            state.MANAGE_SELECT = action.payload;
        },
        dispatchEntireFloor: (state, action) => {
            state.ENTIRE_FLOOR = action.payload;
        },
        dispatchCurrentFloor: (state, action) => {
            state.CURRENT_FLOOR = action.payload;
        },
        dispatchStructure: (state, action) => {
            state.STRUCTURE = action.payload;
        },
        dispatchElevator: (state, action) => {
            state.ELEVATOR = action.payload;
        },
        dispatchSize: (state, action) => {
            state.SIZE = action.payload;
        },
        dispatchPeriodFrom: (state, action) => {
            state.PERIOD_FROM = action.payload;
        },
        dispatchPeriodTo: (state, action) => {
            state.PERIOD_TO = action.payload;
        },
        dispatchPeriodNegotiable: (state, action) => {
            state.PERIOD_NEGOTIABLE = action.payload;
        },
        dispatchOptionSelect: (state, action) => {
            state.OPTION = action.payload;
        },
        dispatchCar: (state, action) => {
            state.CAR = action.payload;
        },
        dispatchPet: (state, action) => {
            state.PET = action.payload;
        },
        dispatchLoan: (state, action) => {
            state.LOAN = action.payload;
        },
        dispatchTitle: (state, action) => {
            state.TITLE = action.payload;
        },
        dispatchExplain: (state, action) => {
            state.EXPLAIN = action.payload;
        },
    },
});

export default roomRegister.reducer;

export const {
    componentHandle,
    dispatchRoomType,
    dispatchPostCodeOpen,
    dispatchAddressOpen,
    dispatchMainAddress,
    dispatchDetailAddress,
    detailComponentHandle,
    dispatchTransactionType,
    dispatchPriceUnit,
    dispatchDeposit,
    dispatchMonthly,
    dispatchManage,
    dispatchManageCost,
    dispatchManageSelect,
    dispatchEntireFloor,
    dispatchCurrentFloor,
    dispatchStructure,
    dispatchElevator,
    dispatchSize,
    dispatchPeriodFrom,
    dispatchPeriodTo,
    dispatchOptionSelect,
    dispatchPeriodNegotiable,
    dispatchCar,
    dispatchPet,
    dispatchLoan,
    dispatchTitle,
    dispatchExplain,
} = roomRegister.actions;
