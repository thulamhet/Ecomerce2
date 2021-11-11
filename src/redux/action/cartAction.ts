import { Dispatch } from "@reduxjs/toolkit";

export const CHANGE_ITEM = 'CHANGE_ITEM';

export const changeItem = (data: any) => (dispatch: Dispatch) => {
    dispatch ({
        type: CHANGE_ITEM,
        payload: data
    })
};
