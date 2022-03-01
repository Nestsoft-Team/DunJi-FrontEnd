import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import roomRegister from "./roomRegister";

const rootReducer = combineReducers({
    roomRegister,
});

// ? 합쳐진 리듀서에 next reddux wrapper hydrate 타입 리듀서를 추가한다.
// ? hydrate는 서버에서 생성된 리덕스 스토어를 클라이언트에서 사용할 수 있도록 전달해 주는 역할을 한다.
const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        return nextState;
    }
    return rootReducer(state, action);
};

//useSelector 타입 에러 방지
export type RootState = ReturnType<typeof rootReducer>;

//? middleware 적용을 위한 store enhancer
//? 리덕스 미들웨어는 액션이 디스패치 되어 리듀서에서 처리하기 전에 사전에 지정된 작업들을 의미한다.
//? 리덕스 데브툴즈 확장 프로그램을 사용하기 위해 미들웨어에 리덕스 데브툴즈를 사용하도록 하는 코드.
const bindMiddleware = (middleware: any) => {
    if (process.env.NODE_ENV !== "production") {
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const initStore = () => {
    return createStore(reducer, bindMiddleware([]));
};

export const wrapper = createWrapper(initStore);
