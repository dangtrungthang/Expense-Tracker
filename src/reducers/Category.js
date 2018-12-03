import { GET_ICON,GET_CATEGORY } from '../actions/index';

export default function getIconURL(state = require('../asset/iconCategory/gift.png'), action) {
    switch (action.type) {
        case GET_ICON:
            return action.icon
       
        default:
            return state
    }
}

export  function getCategory(state = {id:'0',name:'Category',icon:require('../asset/iconCategory/gift.png'),isExpense:true}, action) {
    switch (action.type) {
       
        case GET_CATEGORY:
            return action.payload
        default:
            return state
    }
}