import "./style.scss";
import "../../global.scss";

import girls from "../../imgs/Sign/bert-b-rhNff6hB41s-unsplash 1.png";
import hide from "../../imgs/Sign/Hide view.svg";
import google from "../../imgs/Sign/Google.svg";
import API from "../../utils/API";

import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { setUserProfile } from "../../pages/SignPage/userSlice";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useGoogleLogin } from "@react-oauth/google";

export default function SignIn({ handleChangeSign }) {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getGoogleUser } = new API();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const fetchingUser = async () => {
    const fetchedUser = await getGoogleUser(user.access_token);
    dispatch(setUserProfile(fetchedUser));
    navigate("/home");
  };

  useEffect(() => {
    if (user) {
      fetchingUser();
    }
  }, [user]);
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
      className="main"
    >
      <img className="main-left" src={girls} alt="girls" />
      <div className="main-right">
        <h1 className="main-right__title">Сторінка входу</h1>
        <button onClick={() => login()} className="btn-login">
          <img src={google} alt="google" />
          Продовжити з Google
        </button>
        <div className="divider">
          <div className="divider__line"></div>
          <p className="text18">АБО</p>
          <div className="divider__line"></div>
        </div>
        <form className="form" action="#">
          <div className="main-right__input">
            <p className="text18">Ваш логін або електронна пошта</p>
            <input id="username" name="username" type="text" />
          </div>
          <div className="main-right__input">
            <div className="main-right__input-labels">
              <p className="text18">Ваш пароль</p>
              <div className="main-right__input-chars">
                <img src={hide} alt="hide" />
                <p className="text16">Показати</p>
              </div>
            </div>
            <input id="password" name="password" type="password" />
            <p className="text16 underline text-right">Забули пароль</p>
          </div>
          <button
            id="login"
            onClick={handleChangeSign}
            className="btn btn-purple"
          >
            Увійти
          </button>
          <button
            id="register"
            onClick={handleChangeSign}
            className="btn btn-white ml15"
          >
            Реєстрація
          </button>
        </form>
      </div>
    </motion.main>
  );
}
