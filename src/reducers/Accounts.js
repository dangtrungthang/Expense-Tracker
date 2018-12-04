import { GET_ACCOUNT} from '../actions/index';

export default function Account(state = 0, action) {
    switch (action.type) {
        case GET_ACCOUNT:
            return action.payload
        default:
            return state
    }
}