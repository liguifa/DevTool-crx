import * as actionTypes from "./actionTypes";

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SHOWMENU: return { ...state, isShowMenu: !state.isShowMenu };
        case actionTypes.SHOWTOOL: return { ...state, tool: action.url };
        default: return state;
    }
}