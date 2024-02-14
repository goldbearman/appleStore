import type { T_RootState } from 'store/types'
import {I_LikeReducer} from "./types";
import likeReducer from "./reducer";

export const selectIsLikeArr = (state: T_RootState) => state.likeReducer