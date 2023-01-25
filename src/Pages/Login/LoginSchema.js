import * as yup from "yup";

export default yup.object({
  email: yup.string().email().required("Please enter email"),
  password: yup.string().required("Please enter password").min(6),
});
