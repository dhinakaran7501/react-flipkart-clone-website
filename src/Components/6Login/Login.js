import React, { useState } from "react";
import "./Login.scss";
import Footer from "../1StaticPages/2footer/Footer";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";

const Login = () => {
  // Router
  const navigate = useNavigate();

  // State
  const [modalShow, setModalShow] = useState(false);
  let [emailState, SetemailState] = useState("");
  let [passwordState, SetPasswordState] = useState("");

  // Get from Material ui
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  // Alertbox open / close
  const handleClose = () => {
    setModalShow(false);
  };

  // Login Main Function
  function handleLogin() {
    const local_storage_Email = localStorage.getItem("Email");
    const local_storage_Password = localStorage.getItem("Password");

    if (
      emailState === local_storage_Email &&
      passwordState === local_storage_Password
    )
      navigate("/Flipkart");
    else {
      setModalShow(true);
    }
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

      <div className="Login">
        <div className="img-sec">
          <img src="../../images/login/Login.png" alt="Login" />
        </div>
        <div className="login-form-sec">
          <div className="login-details">
            <TextField
              id="standard-basic"
              label="Enter your Email address"
              variant="standard"
              onChange={(e) => SetemailState(e.target.value)}
            />

            <div className="login-password-details">
              <TextField
                id="standard-basic"
                label="Enter your Password"
                variant="standard"
                onChange={(e) => SetPasswordState(e.target.value)}
              />
            </div>

            <div className="terms-policy">
              <p>By continuing, you agree to Flipkart's</p>
              <p>Terms of Use</p>
              and
              <p>Privacy Policy</p>.
            </div>

            <button onClick={handleLogin}>Login</button>
          </div>

          <div className="create-acc-details">
            <p onClick={() => navigate("/")}>
              New to Flipkart? Create an account
            </p>
          </div>
        </div>
      </div>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={modalShow}
        style={{ top: "-15%", padding: "10%" }}
      >
        <DialogContent style={{ padding: "24px 43px" }}>
          <Typography gutterBottom>Incorrect Email id or Password</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>

      <Footer />
    </>
  );
};

export default Login;
