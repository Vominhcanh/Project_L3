import React, { useState } from "react";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { IoLogoGoogleplus } from "react-icons/io";
// import "../../../style/login.scss";
const Login = () => {
  const [state, setstate] = useState(false);
  return (
    <div className="container-login">
      <div
        class={`container ${state ? " right-panel-active" : ""}`}
        id="container"
      >
        <div class="form-container sign-up-container">
          <form action="#">
            <h1>Đăng Ký Tài Khoản</h1>
            <div class="social-container">
              <a href="#" class="social">
                <FiFacebook />
              </a>
              <a href="#" class="social">
                <FiGithub />
              </a>
              <a href="#" class="social">
                <IoLogoGoogleplus />
              </a>
            </div>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="">ĐĂNG KÝ</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Đăng Ký</h1>
            <div class="social-container">
              <a href="#" class="social">
                <FiFacebook />
              </a>
              <a href="#" class="social">
                <FiGithub />
              </a>
              <a href="#" class="social">
                <IoLogoGoogleplus />
              </a>
            </div>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>SIGN IN</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button onClick={() => setstate(!state)}>SIGN IN</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Bắt đầu đăng ký để trải nghiệm Website</p>
              <button onClick={() => setstate(!state)}>SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
