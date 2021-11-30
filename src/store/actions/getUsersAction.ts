import { User } from "../../types/users";
export const REQUEST_USER = "REQUEST_USER";
export const RECEIVE_USER = "RECEIVE_USER";

export const requestUser = (page: Number) => ({
  type: REQUEST_USER,
  page: page,
});
export const receiveUser = (users: User) => ({
  type: RECEIVE_USER,
  users: users,
});
