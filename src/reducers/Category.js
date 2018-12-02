import { GET_ICON } from '../actions/index';

export default function getIconURL(state = require('../asset/iconCategory/gift.png'), action) {
    switch (action.type) {
        case GET_ICON:
            return action.icon

        default:
            return state
    }
}