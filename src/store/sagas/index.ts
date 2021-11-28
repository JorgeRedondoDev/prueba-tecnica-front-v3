import { fork, all } from "redux-saga/effects";
import tokenSaga from "./getTokenSaga";
import userSaga from "./getUsersSaga";

export default function* mySaga() {
  yield all([fork(tokenSaga), fork(userSaga)]);
}
