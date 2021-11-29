import { REQUEST_TOKEN, receiveToken } from "store/actions/getTokenAction";
import { call, put, takeEvery } from "redux-saga/effects";

const getToken = async ({ credencials }) => {
  // Fake api call to check if the user and password are correct
  if (
    credencials.email === "eve.holt@reqres.in" &&
    credencials.password === "cityslicka"
  ) {
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credencials),
      });
      const data = await response.json();
      return data;
    } catch (e) {
      const data = { error: "error" };
      return data;
    }
  } else {
    const data = { error: "error" };
    return data;
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
