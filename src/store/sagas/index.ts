import { fork, all } from "redux-saga/effects";
import tokenSaga from "./getTokenSaga";

export default function* mySaga() {
  yield all([fork(tokenSaga)]);
}
