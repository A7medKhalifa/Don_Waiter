import { api } from "store/_axios";

const signIn = (data: any) => api.post('waiter-login', data);


const UserAPI = {
  signIn,
};

export default UserAPI;
