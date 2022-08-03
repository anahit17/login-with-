import React, { useEffect } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "../../store/user/action";
import "./Profile.scss";

export default function Profile() {
  const dispatch = useDispatch();
  const { userData, type } = useSelector((state) => state.userData);
  const navigate = useNavigate();

  const logoutGoogle = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const logoutFb = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(setUser(user));
    } else {
      navigate("/");
    }
  }, [dispatch, navigate]);

  return type === "Google" ? (
    <div className="card">
      <img src={userData.imageUrl} alt="img" referrerPolicy="no-referrer" />
      <h1>
        {userData.familyName} {userData.givenName}
      </h1>
      <p className="title">
        <b>email:</b>
        {userData.email}
      </p>
      <GoogleLogout
        clientId="383688485289-lthp9e0384jdbmcimfutthfkn169qgh3.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logoutGoogle}
      ></GoogleLogout>
    </div>
  ) : type === "Facebook" ? (
    <div className="card">
      <img
        src={userData.picture.data.url}
        alt="img"
        referrerPolicy="no-referrer"
      />
      <h1>{userData.name}</h1>
      <p className="title">
        <b>email:</b>
        {userData.email}
      </p>
      <button type="submit" onClick={logoutFb}>
        Logout
      </button>
    </div>
  ):null;
}
