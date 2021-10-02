import { actionsTypes } from "./actionsTypes";

export const setData = (data) => {
    return({
        type: actionsTypes.ADD_USER,
        payload: data,
    });
};