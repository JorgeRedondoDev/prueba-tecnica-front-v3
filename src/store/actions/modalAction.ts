import { User } from "../../types/users";
export const REQUEST_MODAL = "REQUEST_MODAL";

export const requestModal = (user: User | {}) => ({
  type: REQUEST_MODAL,
  user: user,
});
