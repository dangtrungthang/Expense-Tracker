import { combineReducers } from 'redux';
import Account,{getIconAccount} from './Accounts';
import getIconURL from './Category';
import { getCategory } from './Category';

const allReducers = combineReducers({
   Account,
   getCategory,
   getIconURL,
   getIconAccount
});
export default allReducers;