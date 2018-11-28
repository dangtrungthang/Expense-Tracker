export const TANG="TANG";
export const GET_ACCOUNT_ID="GET_ACCOUNT_ID";
export function tang(step){
    return{
        type:TANG,
        step
    }
}
export function getAccountID(id){
    return{
        type:GET_ACCOUNT_ID,
        id
    }
}