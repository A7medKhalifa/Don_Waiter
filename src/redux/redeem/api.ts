import { api } from "store/_axios";


const redeemReward = (data: any) => api.get(`redeem-reward`,data);


const TicketsAPI = {
  redeemReward,
};

export default TicketsAPI;
