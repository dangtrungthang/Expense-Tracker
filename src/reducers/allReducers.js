import {combineReducers} from 'redux';
import tanggiam from './tanggiam';
import getAccountID from './Accounts';
import getIconURL from './Category';
const allReducers=combineReducers({
   tanggiam,
   getAccountID,
   getIconURL
});
export default allReducers;