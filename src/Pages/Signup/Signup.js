import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { signup } from "../../Store/UserActions";
import "./Signup.css";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  address: "",
  city: "",
  phone: "",
  isAdmin: "",
};

export default function Signup() {
  const dispatch = useDispatch();
  const { handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    onSubmit: (value) => {
      dispatch(signup(value));
    },
  });
  return (
    <section className="signup">
      <form action="" onSubmit={handleSubmit}>
        <div className="signup-box">
          <div className="input">
            <div className="col">
              <label htmlFor="">Fullname</label>
              <input type="text" onChange={handleChange} id="fullName" />
            </div>
            <div className="col">
              <label htmlFor="">Email</label>
              <input type="email" onChange={handleChange} id="email" />
            </div>
          </div>

          <div className="input">
            <div className="col">
              <label htmlFor="">Password</label>
              <input type="password" onChange={handleChange} id="password" />
            </div>
            <div className="col">
              <label htmlFor="">Confirm password</label>
              <input
                type="password"
                onChange={handleChange}
                id="confirmPassword"
              />
            </div>
          </div>

          <div className="input">
            <div className="col">
              <label htmlFor="">Address</label>
              <input type="text" onChange={handleChange} id="address" />
            </div>
            <div className="col">
              <label htmlFor="">City</label>
              <input type="text" onChange={handleChange} id="city" />
            </div>
          </div>
          <div className=" row">
            <label htmlFor="">Phone</label>
            <input type="text" name="" id="phone" onChange={handleChange} />
          </div>
          <div className="input admin-radio">
            <label htmlFor="admin" id="admin">
              Want admin account ?{" "}
            </label>
            <span>
              <label htmlFor="">Yes</label>
              <input
                type="radio"
                name="admin"
                id="isAdmin"
                onChange={() => setFieldValue("isAdmin", true)}
              />
            </span>
            <span>
              <label htmlFor="">No</label>
              <input
                type="radio"
                name="admin"
                id="isAdmin"
                onChange={() => setFieldValue("isAdmin", false)}
              />
            </span>
          </div>

          <button className="btn-primary">Create Account</button>
        </div>
      </form>
    </section>
  );
}
