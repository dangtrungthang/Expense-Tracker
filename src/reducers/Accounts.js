import { GET_ACCOUNT,GET_ICON_ACCOUNT} from '../actions/index';

export default function Account(state = 0, action) {
    switch (action.type) {
        case GET_ACCOUNT:
            return action.payload
        default:
            return state
    }
}
export function getIconAccount(state = require('../asset/iconAccount/1.png'), action) {
    switch (action.type) {
        case GET_ICON_ACCOUNT:
            return action.icon
       
        default:
            return state
    }
}