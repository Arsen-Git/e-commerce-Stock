import "./Page404.scss";
import "../../global.scss";

import error from "../../imgs/404.png";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

export default function Page404() {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
        className="error"
      >
        <img src={error} alt="error" />
        <h1 className="error__title">Упс! Сторінку не знайдено</h1>
        <h2 className="error__subtitle">
          Сторінка яку ви шукаєте була видалена або тимчасово недоступна
        </h2>
        <button onClick={() => navigate("/")} className="btn-purple">
          Повернутися на Головну сторінку
        </button>
      </motion.div>
    </>
  );
}
