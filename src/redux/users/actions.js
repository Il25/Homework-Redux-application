import { actionsTypes } from "./actionsTypes";

export const setData = (data) => {
    return({
        type: actionsTypes.ADD_USER,
        payload: data,
    });
};

export const editData = (data) => {
    return({
        type: actionsTypes.EDIT_USER,
        payload: data,
    });
};

export const deleteData = (data) => {
    return({
        type: actionsTypes.DELETE_USER,
        payload: data,
    });
};