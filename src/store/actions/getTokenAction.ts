export const REQUEST_TOKEN = "REQUEST_TOKEN";
export const RECEIVE_TOKEN = "RECEIVE_TOKEN";

export const requestToken = (credencials) => ({
  type: REQUEST_TOKEN,
  credencials,
});
export const receiveToken = (token) => ({ type: RECEIVE_TOKEN, token });
