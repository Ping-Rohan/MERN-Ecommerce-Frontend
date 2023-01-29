import privateInstance from "../Axios/PrivateInstance";
import toast from "react-hot-toast";

const postProduct = (form) => {
  return async (dispatch) => {
    const response = await privateInstance.post("/product", form);
    toast.success(response.data.message);
  };
};

export { postProduct };
