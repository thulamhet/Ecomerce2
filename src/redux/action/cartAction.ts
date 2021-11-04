import { Dispatch } from "@reduxjs/toolkit";

export const ADD_ITEM = 'ADD_ITEM';

export const addItem = (data: any) => (dispatch: Dispatch) => {
    dispatch ({
        type: ADD_ITEM,
        payload: data
    })
};