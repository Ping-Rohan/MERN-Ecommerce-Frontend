import App from "./App";
import { Provider } from "react-redux";
import "./index.css";
import ReactDOM from "react-dom/client";
import store from "./Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
