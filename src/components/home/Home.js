import React, { useEffect } from "react";
import "./Home.scss";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { useNavigate } from "react-router";
import { gapi } from "gapi-script";
import { useDispatch } from "react-redux";
import { setAppType, setUser } from "../../store/user/action";
export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const responseFacebook = (response) => {
    localStorage.setItem("user", JSON.stringify(response));
    dispatch(setAppType("Facebook"));
    dispatch(setUser(response));
    navigate("/profile");
  };

  const onFailure = (response) => {
    alert(response);
  };

  const onSuccess = (response) => {
    dispatch(setUser(response.profileObj));
    dispatch(setAppType("Google"));
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    navigate("/profile");
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "383688485289-lthp9e0384jdbmcimfutthfkn169qgh3.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <form>
      <div className="imgcontainer">
        <img src="https://i.imgur.com/dGo8DOk.png" alt="avatar" />
      </div>
      <div className="container">
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
        <button type="submit">Login</button>
        <GoogleLogin
          clientId="383688485289-lthp9e0384jdbmcimfutthfkn169qgh3.apps.googleusercontent.com"
          buttonText="LogIn with Google Account"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
        <FacebookLogin
          appId="715215383073814"
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </div>
    </form>
  );
}
