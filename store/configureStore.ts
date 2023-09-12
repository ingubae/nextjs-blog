import { applyMiddleware, legacy_createStore as createStore, compose, AnyAction } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Context, MakeStore, HYDRATE } from 'next-redux-wrapper';

import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    // const middlewares = [sagaMiddleware];
    // const enhancer = process.env.NODE_ENV === 'production' 
    //     ? compose(applyMiddleware(...middlewares)) 
    //     : composeWithDevTools(applyMiddleware(...middlewares));
    // const store = createStore(rootReducer, enhancer);

    const middlewares = process.env.NODE_ENV === 'production' ? [sagaMiddleware] : [sagaMiddleware, logger];  
    const store = configureStore({
        reducer: rootReducer,
        middleware: middlewares,
    });

    sagaMiddleware.run(rootSaga);
    return store;
}

const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV === 'development' });

export default wrapper;

