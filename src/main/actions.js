import * as actionTypes from "./actionTypes";

export const showMmenu = () => ({
    type: actionTypes.SHOWMENU
})

export const showTool = (url) => ({
    type:actionTypes.SHOWTOOL,
    url:url,
})