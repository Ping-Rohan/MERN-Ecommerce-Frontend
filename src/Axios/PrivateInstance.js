import store from "../Store";
import axios from "axios";

console.log();

const privateInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

privateInstance.interceptors.request.use((request) => {
  const accessToken = store.getState().User.accessToken;
  request.headers.authorization = `Bearer ${accessToken}`;
  return request;
});
export default privateInstance;
