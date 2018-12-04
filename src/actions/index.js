
export const GET_ACCOUNT = "GET_ACCOUNT";
export const GET_CATEGORY="GET_CATEGORY";
export const GET_ICON = "GET_ICON"; // Get icon category
export const GET_ICON_ACCOUNT="GET_ICON_ACCOUNT";
export const RETURN_TRUE_FALSE = "RETURN_TRUE_FALSE";

export function getAccount(account) {
    return {
        type: GET_ACCOUNT,
        payload:account
    }
}
export function getIcon(icon) {
    return {
        type: GET_ICON,
        icon
    }
}
export function returnTrueFalse(bool) {
    return {
        type: RETURN_TRUE_FALSE,
        bool
    }
}
export function getCategory(category){
    return{
        type:GET_CATEGORY,
        payload:category
    }
}
export function getIconAccount(icon){
    return {
        type:GET_ICON_ACCOUNT,
        icon
    }
}