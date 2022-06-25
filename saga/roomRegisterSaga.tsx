import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "utils/createRequestSaga";
import { roomApi } from "_api";

const POST_ROOM = "roomRegister/postRoom";
const POST_ROOM_SUCCESS = "roomRegister/POST_SUCCESS";

const getPostSaga = createRequestSaga(POST_ROOM, roomApi.postRoom);

export function* roomRegisterSaga() {
    yield takeLatest(POST_ROOM, getPostSaga);
}
