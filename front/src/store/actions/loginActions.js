import * as socketConnection from "../../utils/connectSocket";

export const loginAction = (data) => {
  socketConnection.login(data);
};
