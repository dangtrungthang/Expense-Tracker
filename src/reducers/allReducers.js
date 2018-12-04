import { combineReducers } from 'redux';
import Account from './Accounts';
import getIconURL from './Category';
import { getCategory } from './Category';

const allReducers = combineReducers({
   Account,
   getCategory,
   getIconURL,
});
export default allReducers;