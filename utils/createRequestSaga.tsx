import { call, put } from "redux-saga/effects";
import { startLoading, finishLoading } from "store/modules/loading";

export default function createRequestSaga(type: any, request: any) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function* (action: any) {
        yield put(startLoading(type)); // 로딩 시작
        try {
            const response: responseTypes = yield call(request, action.payload);
            yield put({
                type: SUCCESS,
                payload: response.data,
            });
            console.log(response);
        } catch (e) {
            console.log(e);
            yield put({
                type: FAILURE,
                payload: e,
                error: true,
            });
        }
        yield put(finishLoading(type)); // 로딩 끝
    };
}

type responseTypes = {
    data: any;
};
