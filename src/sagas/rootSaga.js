import * as storage from './storage';

export default function* rootSaga() {
  yield [
    storage.storeExpenseSaga(),
  ]
}