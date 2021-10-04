import { actionsTypes } from "./actionsTypes";

export const setData = (data) => {
    return({
        type: actionsTypes.ADD_USER,
        payload: data,
    });
};

export const saveChangesData = (user) => {
    return({
        type: actionsTypes.SAVE_CHANGES_USER,
        payload: user,
    });
};

export const deleteData = (data) => {
    return({
        type: actionsTypes.DELETE_USER,
        payload: data,
    });
};