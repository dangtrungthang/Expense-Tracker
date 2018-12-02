import { call, apply, put, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/index';
import * as allSchemas from '../databases/allSchemas'

function* getCategory(){
    alert('Ok ok ok')
}
export function* storeExpenseSaga() {
    yield takeEvery( actions.GET_ICON, getCategory );
  }
  