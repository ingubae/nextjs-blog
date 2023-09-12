// import { AnyAction } from "redux";
// import { HYDRATE } from "next-redux-wrapper";

import { ActionType, createAsyncAction, createReducer } from "typesafe-actions";
import { AxiosResponse, AxiosError } from "axios";
import { PostData } from "../pages/_app";

export interface PostState {
    posts: [];
    isLoading: boolean;
    isLoaded: boolean;
    errorReason: string;
};

interface requestPayloadType {
    id: string;
};
    
interface successPayloadType {
    post: PostData;
}; 

export const LOAD_POSTS_REQUEST = 'posts/LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'posts/LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'posts/LOAD_POSTS_FAILURE';

export const loadPostsAsync = createAsyncAction(LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE)<
                                requestPayloadType, AxiosResponse<successPayloadType>, AxiosError>();

const actions = {
    loadPostsAsync,
};

type PostsAction = ActionType<typeof actions>;


const initialState: PostState = {
    posts: [],
    isLoading: false,
    isLoaded: false,
    errorReason: '',
};

const postsReducer = createReducer<PostState, PostsAction>(initialState, {
    [LOAD_POSTS_REQUEST]: (state) => ({
        ...state,
        isLoading: true,
    }), 
    [LOAD_POSTS_SUCCESS]: (state, { payload }) => ({
        ...state,
        isLoading: false,
        // posts: state.posts.concat(payload.data),
    }), 
    [LOAD_POSTS_FAILURE]: (state, { payload: error }) => ({
        ...state,
        isLoading: false,
        errorReason: 'loading failure',
    }),
});


// const postsReducer = (state = initialState, action: AnyAction) => {
//     switch(action.type) {
//         case HYDRATE: {
//             return {...state, ...action.payload };
//         }
//         case LOAD_POSTS_REQUEST: {
//             return {
//                 ...state,
//                 isLoading: true,
//             };
//         } 
//         case LOAD_POSTS_SUCCESS: {
//             return {
//                 ...state,
//                 isLoading: false,
//                 posts: [],
//             };
//         } 
//         case LOAD_POSTS_FAILURE: {
//             return {
//                 ...state,
//                 isLoading: false,
//                 errorReason: 'loading failure',
//             }
//         }
//         default:
//             return state;
//     }
// }

export default postsReducer;