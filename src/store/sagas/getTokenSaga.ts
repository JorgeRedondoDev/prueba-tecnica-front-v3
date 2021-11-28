import { REQUEST_TOKEN, receiveToken } from "store/actions/getTokenAction";
import { call, put, takeEvery } from "redux-saga/effects";

console.log("Saga Token e");

const getToken = async (credencials) => {
  console.log("PretgetToken", credencials.credencials);

  try {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credencials.credencials),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

function* getTokenSaga(credencials) {
  try {
    const response = yield call(getToken, credencials);
    yield put(receiveToken(response));
  } catch (error) {
    console.log(error);
  }
}

function* tokenSaga() {
  yield takeEvery(REQUEST_TOKEN, getTokenSaga);
}

export default tokenSaga;
