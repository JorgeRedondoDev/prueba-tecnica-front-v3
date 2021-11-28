import { RECEIVE_TOKEN } from "../actions/getTokenAction";

export default (state = {}, { type, token }) => {
  switch (type) {
    case RECEIVE_TOKEN:
      return token;
    default:
      return state;
  }
};
