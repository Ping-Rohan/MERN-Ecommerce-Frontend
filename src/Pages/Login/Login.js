import "./Login.css";
import { useFormik } from "formik";
import LoginSchema from "./LoginSchema";
import { login } from "../../Store/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiUserCircle, BiKey } from "react-icons/bi";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errors, handleChange, handleSubmit, touched, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value, action) => {
      console.log(value);
      dispatch(login(value, navigate));
      action.resetForm();
    },
    validationSchema: LoginSchema,
  });
  return (
    <section className="login">
      <div className="login-box">
        <div className="left">
          <form action="" onSubmit={handleSubmit}>
            <h2 className="login-heading">Let's shop your favourites</h2>
            <p className="login-subinfo">
              Join our growing ecommerce platform for the value for money
              services
            </p>

            <div className="input-box">
              {errors.email && touched.email && (
                <span className="error-text">{errors.email}</span>
              )}
              <div className="input">
                <span className="input-logo-wrapper">
                  <BiUserCircle className="input-logo" />
                </span>
                <input
                  type="text"
                  placeholder="Your email here"
                  onChange={handleChange}
                  name="email"
                  value={values.email}
                />
              </div>
              {errors.password && touched.password && (
                <span className="error-text">{errors.password}</span>
              )}
              <div className="input">
                <span className="input-logo-wrapper">
                  <BiKey className="input-logo key" />
                </span>

                <input
                  type="password"
                  placeholder="Your password here"
                  onChange={handleChange}
                  name="password"
                  value={values.password}
                />
              </div>
            </div>
            <button className="btn-primary" type="submit">
              Login
            </button>
          </form>
          <div className="create-account">
            <a href="">Create account?</a>
          </div>
        </div>

        <div className="right">
          <img
            src="https://img.freepik.com/free-photo/business-shopping-online-concept_1421-6.jpg?w=900&t=st=1674655712~exp=1674656312~hmac=7b604882d63649895bce74645c27c28e9a9c427b201753114789da9a61062e4c"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
