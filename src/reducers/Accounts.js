import { GET_ACCOUNT_ID } from '../actions/index';

export default function getAccountID(state = 0, action) {
    switch (action.type) {
        case GET_ACCOUNT_ID:
            return action.id
        default:
            return state
    }
}