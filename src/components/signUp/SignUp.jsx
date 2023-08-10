import "../signIn/style.scss";
import "../../global.scss";
import "./style.scss";

import { motion } from "framer-motion";

import girls from "../../imgs/Sign/and-machines-vqTWfa4DjEk-unsplash 1.png";
import hide from "../../imgs/Sign/Hide view.svg";
import google from "../../imgs/Sign/Google.svg";

export default function SignUp({ handleChangeSign }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
      className="main"
    >
      <img className="main-left" src={girls} alt="girls" />
      <div className="main-right">
        <div className="main-right__titles">
          <h1 className="main-right__title">Сторінка реєстрації</h1>
          <p className="main-right__subtitle">
            Безкоштовно зареєструйтеся,щоб отримати доступ до всіх наших товарів
          </p>
        </div>
        <button className="btn-login">
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
            <p className="warning">Сталася помилка, спробуйте ще раз</p>
          </div>
          <div className="main-right__input">
            <div className="main-right__input-labels">
              <p className="text18">Ваш пароль</p>
              <div className="main-right__input-chars">
                <img src={hide} alt="hide" />
                <p className="text16 text16-weak">Показати</p>
              </div>
            </div>
            <input id="password" name="password" type="password" />
            <p className="text16 text16-weak">
              Використайте 8 або більше символів з буквами\цифрами\знаками
            </p>
          </div>
          <button
            id="register"
            onClick={handleChangeSign}
            className="btn btn-purple"
          >
            Зареєструватися
          </button>
          <button
            id="login"
            onClick={handleChangeSign}
            className="btn btn-white ml15"
          >
            Увійти
          </button>
        </form>
      </div>
    </motion.main>
  );
}
