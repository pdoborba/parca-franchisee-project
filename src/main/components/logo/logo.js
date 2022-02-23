import React from "react";
import "./logo.css";
import LogoHeader from "../../img/logo.png";

export default function Logo() {
  return (
    <div className="img-logo">
      <img src={LogoHeader} alt="logo" />
    </div>
  );
}
