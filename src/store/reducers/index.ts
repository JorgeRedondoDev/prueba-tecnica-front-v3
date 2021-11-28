import { combineReducers } from "redux";

import users from "./getUsersReducer";
import token from "./getTokenReducer";

const rootReducer = combineReducers({
  token: token,
  users,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
