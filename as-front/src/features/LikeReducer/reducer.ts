import { createReducer, createAction } from '@reduxjs/toolkit'
import type { AnyAction } from '@reduxjs/toolkit'

import type { I_LikeReducer } from './types'


const initialState: I_LikeReducer = {
    isLike:false
}


const setLikeReducerAction = createAction<I_LikeReducer>('USER_DATA/set')

const LikeReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        setLikeReducerAction,
        (_, action) => action.payload
    )
})


export const setLikeReducer = (userData: I_LikeReducer): AnyAction => (
    setLikeReducerAction(userData)
)


export default LikeReducer