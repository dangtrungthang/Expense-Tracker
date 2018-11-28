import { TANG } from '../actions/index';

export default function tanggiam(state = 0, action) {
    switch (action.type) {
        case TANG:
            return state+action.step
        default:
            return state
    }
}