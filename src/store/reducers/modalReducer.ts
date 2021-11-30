import { REQUEST_MODAL } from "../actions/modalAction";

export default (state = {}, { type, user }) => {
  switch (type) {
    case REQUEST_MODAL:
      return user;
    default:
      return state;
  }
};
