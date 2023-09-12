import { AnyAction, CombinedState } from "redux";
import { combineReducers } from '@reduxjs/toolkit';

import postsReducer from './posts';

const rootReducer = (state: CombinedState<{ postsReducer: any; }>, action: AnyAction) => {
    const combinedReducers = combineReducers({
        postsReducer,
    });

    return combinedReducers(state, action);
};

export default rootReducer;