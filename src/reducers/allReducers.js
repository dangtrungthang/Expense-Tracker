import {combineReducers} from 'redux';
import tanggiam from './tanggiam';
import getAccountID from './Accounts';
import getIconURL from './Category';
import {getCategory} from './Category';
const allReducers=combineReducers({
   tanggiam,
   getAccountID,
   getIconURL,
   getCategory
});
export default allReducers;