import store from "../Store";
import axios from "axios";

axios.defaults.withCredentials = true;

const privateInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

privateInstance.interceptors.request.use((request) => {
  let accessToken = store.getState().User.accessToken;
  request.headers.authorization = `Bearer ${accessToken}`;
  return request;
});
export default privateInstance;
