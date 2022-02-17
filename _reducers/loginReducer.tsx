import types from "../_actions/types";

const defaultLoginValue = {
    isLogin: false,
};

const loginReducer = (
    state = { authData: null, isLogin: false },
    action: any
) => {
    switch (action.type) {
        case types.LOGIN:
            console.log(action?.data);
            sessionStorage.setItem(
                "webToken",
                JSON.stringify({ ...action?.data.data })
            );
            sessionStorage.setItem("userId", action?.data.userId);

            return (state = {
                ...state,
                authData: action?.data,
                isLogin: action.isLogin,
            });

        default:
            return state;
    }
};

export default loginReducer;
