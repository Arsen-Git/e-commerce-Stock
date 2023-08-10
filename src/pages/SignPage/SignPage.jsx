import "./style.scss";

import { useState } from "react";

import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signUp/SignUp";

export default function SignPage() {
  const [signStatus, setSignStatus] = useState("login");

  const handleChangeSign = (e) => {
    if (signStatus !== e.target.getAttribute("id")) {
      setSignStatus(e.target.getAttribute("id"));
      const btns = document.querySelectorAll(".btn-white");
      btns.forEach((btn) => btn.classList.remove("btn-white-active"));
      e.target.classList.add("btn-white-active");
    }
  };
  return (
    <>
      {signStatus === "login" ? (
        <SignIn handleChangeSign={handleChangeSign} />
      ) : (
        <SignUp handleChangeSign={handleChangeSign} />
      )}
    </>
  );
}
