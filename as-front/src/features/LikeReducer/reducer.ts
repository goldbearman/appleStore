import {createReducer, createAction, PayloadAction} from '@reduxjs/toolkit'
import type { AnyAction } from '@reduxjs/toolkit'

import type { I_LikeReducer,I_SetLikePayload } from './types'

const initialState: I_LikeReducer  = {
    isLikeArr:[]
}

const setLikeReducerAction = createAction<number>('LIKE')

const LikeReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        setLikeReducerAction,
        (state, action: PayloadAction<number>) => {
            const payload = action.payload;
            const indexOfItemInArr = state.isLikeArr.findIndex((id) => id === payload);
            if (indexOfItemInArr !== -1) {
                state.isLikeArr.splice(indexOfItemInArr, 1);
            } else {
                state.isLikeArr.push(payload);
            }
        }
    );
});

export const setLikeReducer = (likeData: number): AnyAction => (
    setLikeReducerAction(likeData)
)

export default LikeReducer

