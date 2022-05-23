import { createAction, handleActions } from "redux-actions";
import { call, put, take, takeLatest } from "redux-saga/effects";
import createRequestSaga from "utils/createRequestSaga";

// 액션 타입들을 선언합니다.
const MAIN_ADDRESS = "roomRegister/MAIN_ADDRESS";
const DETAIL_ADDRESS = "roomRegister/DETAIL_ADDRESS";

export const dispatchMainAddress = createAction(
    MAIN_ADDRESS,
    (address: string) => address
);

export function* roomRegisterSaga() {}

const initialState = {};

const roomRegister = handleActions(
    {
        [MAIN_ADDRESS]: (state, action) => ({
            ...state,
            MAIN_ADDRESS: action.payload,
        }),
    },
    initialState
);

export default roomRegister;
