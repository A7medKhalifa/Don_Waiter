import { api } from "store/_axios";


const redeemReward = (data: any) => api.post(`redeem-reward`,data);
const reducePoints = (data: any) => api.post(`reduce-points`,data);


const TicketsAPI = {
  redeemReward,
  reducePoints
};

export default TicketsAPI;
