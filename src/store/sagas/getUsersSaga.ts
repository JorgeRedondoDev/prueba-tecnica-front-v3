import { REQUEST_USER, receiveUser } from "store/actions/getUsersAction";
import { call, put, takeEvery } from "redux-saga/effects";

const getUsers = async ({ page }) => {
  try {
    const response = await fetch("https://reqres.in/api/users?page=" + page, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

function* getUsersSaga(page) {
  try {
    const response = yield call(getUsers, page);
    yield put(receiveUser(response));
  } catch (error) {
    console.log(error);
  }
}

function* userSaga() {
  yield takeEvery(REQUEST_USER, getUsersSaga);
}

export default userSaga;
