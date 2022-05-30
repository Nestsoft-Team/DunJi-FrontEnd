import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import roomRegister from "./roomRegister";

const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload,
        };
    }
    return combineReducers({
        roomRegister,
    })(state, action);
};
export type RootState = ReturnType<typeof reducer>;

export default reducer;
