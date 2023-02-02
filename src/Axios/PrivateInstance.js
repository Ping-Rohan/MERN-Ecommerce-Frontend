import store from "../Store";
import axios from "axios";

const privateInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

privateInstance.defaults.withCredentials = true;

privateInstance.interceptors.request.use((request) => {
  let accessToken = store.getState().User.accessToken;
  request.headers.authorization = `Bearer ${accessToken}`;
  return request;
});
export default privateInstance;
