import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import reducer, { rootSaga } from "./modules";

const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer,
        devTools: process.env.NODE_ENV !== "production",
        middleware: [sagaMiddleware],
    });

    sagaMiddleware.run(rootSaga);
    return store;
};

export const wrapper = createWrapper(makeStore, {
    debug: process.env.NODE_ENV !== "production",
});
