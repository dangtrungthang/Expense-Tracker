export const TANG = "TANG";
export const GET_ACCOUNT_ID = "GET_ACCOUNT_ID";
export const GET_ICON = "GET_ICON";
export const RETURN_TRUE_FALSE = "RETURN_TRUE_FALSE";
export const GET_CATEGORY="GET_CATEGORY";
export function tang(step) {
    return {
        type: TANG,
        step
    }
}
export function getAccountID(id) {
    return {
        type: GET_ACCOUNT_ID,
        id
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