import { RECEIVE_USER } from "../actions/getUsersAction";

export default (state = {}, { type, users }) => {
  switch (type) {
    case RECEIVE_USER:
      return users;
    default:
      return state;
  }
};
