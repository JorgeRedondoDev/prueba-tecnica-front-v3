export const REQUEST_USER = "REQUEST_USER";
export const RECEIVE_USER = "RECEIVE_USER";

export const requestUser = (page) => ({ type: REQUEST_USER, page });
export const receiveUser = (users) => ({ type: RECEIVE_USER, users });
