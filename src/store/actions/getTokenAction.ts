import { Credencials } from "../../types/users";

export const REQUEST_TOKEN = "REQUEST_TOKEN";
export const RECEIVE_TOKEN = "RECEIVE_TOKEN";

export const requestToken = (credencials: Credencials) => ({
  type: REQUEST_TOKEN,
  credencials: credencials,
});
export const receiveToken = (token: String) => ({
  type: RECEIVE_TOKEN,
  token: token,
});
