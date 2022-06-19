import { createSlice } from "@reduxjs/toolkit";

type initialStateTypes = {
    START_LOADING: any;
    FINISH_LOADING: any;
};

const initialState: initialStateTypes = {
    START_LOADING: {},
    FINISH_LOADING: {},
};

const loading = createSlice({
    name: "loading",
    initialState,
    reducers: {
        startLoading: (state, action) => {
            state.START_LOADING = true;
        },
        finishLoading: (state, action) => {
            state.FINISH_LOADING = true;
        },
    },
});

export default loading.reducer;

export const { startLoading, finishLoading } = loading.actions;
