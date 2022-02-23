import React from "react";
import "./login.css";
import ImgLogin from "../../components/img-login/img-login";
import Input from "../../components/inputs/input";
import Logo from "../../components/logo/logo";
import IconShopLogin from "../../components/icon-shop-login/icon-shop-login";

export default function Login() {
  return (
    <div className="flex Container">
      <div className="info-login">
        <Logo />
        <div className="background">
          <IconShopLogin />
          <Input/>
        </div>
      </div>
      <div className="info-img">
        <ImgLogin />
      </div>
    </div>
  );
}
