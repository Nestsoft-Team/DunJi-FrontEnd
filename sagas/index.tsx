import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import roomRegister, { roomRegisterSaga } from "./roomRegister";

const rootReducer = combineReducers({ roomRegister });

// export function* rootSaga() {
//     // all 함수는 여러 사가를 합쳐주는 역할을 합니다.
//     yield all(roomRegisterSaga);
// }

export default rootReducer;
