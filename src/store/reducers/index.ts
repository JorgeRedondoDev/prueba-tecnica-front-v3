import { combineReducers } from "redux";

import users from "./getUsersReducer";
import token from "./getTokenReducer";
import modal from "./modalReducer";

const rootReducer = combineReducers({
  token: token,
  users: users,
  modal: modal,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
