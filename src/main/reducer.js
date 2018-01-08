import * as actionTypes from "./actionTypes";

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SHOWMENU: return { ...state, isShowMenu: true };
        default: return state;
    }
}