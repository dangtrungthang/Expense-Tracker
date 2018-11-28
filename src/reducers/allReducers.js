import {combineReducers} from 'redux';
import tanggiam from './tanggiam';
import getAccountID from './Accounts'
const allReducers=combineReducers({
   tanggiam,
   getAccountID
});
export default allReducers;