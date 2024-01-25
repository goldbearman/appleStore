import { createReducer, createAction } from '@reduxjs/toolkit'
import type { AnyAction } from '@reduxjs/toolkit'

import type { I_LikeReducer } from './types'


const initialState: I_LikeReducer  = {
    isLikeArr:[]
}


const setLikeReducerAction = createAction<I_LikeReducer>('LIKE')

const LikeReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        setLikeReducerAction,
        (state, action) => {

            action.payload
            state.isLikeArr =  state.isLikeArr.filter(el => {

            })
        }
    )
})


export const setLikeReducer = (likeData: I_LikeReducer): AnyAction => (
    setLikeReducerAction(likeData)
)


export default LikeReducer

function compareArr(el){

}