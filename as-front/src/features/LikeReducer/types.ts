import store from "../../store";

export interface I_LikeReducer  {
    isLikeArr:number[]
}

export interface I_SetLikePayload{
    payload: number;
}

export type T_RootState = ReturnType<typeof store.getState>

