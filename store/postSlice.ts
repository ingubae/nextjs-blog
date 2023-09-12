import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface PostsState {
    posts: [];
    isLoading: boolean;
    isLoaded: boolean;
    errorReason: string;
}

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';


const initialState: PostsState = {
    posts: [],
    isLoading: false,
    isLoaded: false,
    errorReason: '',
};


export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // postsReq(state, action) {
        //     case LOAD_POSTS_REQUEST: {
        //         return {
        //             ...state,
        //             isLoading: true,
        //         };
        //     } 
        //     case LOAD_POSTS_SUCCESS: {
        //         return {
        //             ...state,
        //             isLoading: false,
        //             posts: [],
        //         };
        //     } 
        //     case LOAD_POSTS_FAILURE: {
        //         return {
        //             ...state,
        //             isLoading: false,
        //             errorReason: 'loading failure',
        //         }
        //     }
        //     default:
        //         return state;
        //     }
        // },
    }
});