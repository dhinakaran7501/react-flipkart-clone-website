import React from "react";
import "./Signup.scss";
import { useNavigate } from "react-router";
import { TextField } from "@mui/material";
import Footer from "../1StaticPages/2footer/Footer";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required("Username is a required field"),

  email: yup
    .string()
    .required("Email is a required field")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/, "Email is not valid."),

  password: yup
    .string()
    .required("Password is a required field")
    .matches(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,16}$/,
      "Password should contain atleast One upper case and One lower case and one digit and one Special Character Maximum 16 characters."
    ),
});

const Signup = () => {
  const navigate = useNavigate();

  let {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSignup() {
    const username = getValues().username;
    const email = getValues().email;
    const password = getValues().password;

    if (username) localStorage.setItem("Username", username);
    if (email) localStorage.setItem("Email", email);
    if (password) localStorage.setItem("Password", password);

    username && email && password ? navigate("/Login") : navigate("");
  }
  return (
    <>
      <div className="Dynamic-Navbar">
        <div className="content-sec">
          <div className="img-sec">
            <img src="../../images/0subnavbar/logo.png" alt="Flipkart Logo" />
          </div>
          <div className="col-1">
            <div className="input">
              <input
                type="text"
                placeholder="Search for Products, Brands and More"
              />
              <IoSearch />
            </div>
          </div>
          <div className="col-2">
            <li className="login" onClick={() => navigate("/Login")}>
              <span>Login</span>
            </li>
            <li>
              <span>Wishlist</span>
            </li>
            <li>
              <span>More</span>
              <MdOutlineKeyboardArrowDown />
            </li>
            <li>
              <FaShoppingCart />
              <span>Cart</span>
            </li>
          </div>
        </div>
      </div>

      <div className="Signup">
        <div className="img-sec">
          <img src="../../images/login/signup.png" alt="Sign-up" />
        </div>
        <form className="login-form-sec" onSubmit={handleSubmit()}>
          <div className="login-details">
            <TextField
              id="standard-basic"
              label="Enter your Username"
              variant="standard"
              {...register("username")}
            />
            <span className="error-msg">{errors.username?.message}</span>

            <div className="login-email-details">
              <TextField
                id="standard-basic"
                label="Enter your Email address"
                variant="standard"
                {...register("email")}
              />
              <span className="error-msg">{errors.email?.message}</span>
            </div>

            <div className="login-password-details">
              <TextField
                id="standard-basic"
                label="Enter your Password"
                variant="standard"
                {...register("password")}
              />
              <span className="error-msg">{errors.password?.message}</span>
            </div>

            <div className="terms-policy">
              <p>By continuing, you agree to Flipkart's</p>
              <p>Terms of Use</p>
              and
              <p>Privacy Policy</p>.
            </div>

            <button onClick={handleSignup}>Signup</button>
          </div>

          <div className="create-acc-details">
            <button onClick={() => navigate("/Login")}>
              Existing User? Log in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
