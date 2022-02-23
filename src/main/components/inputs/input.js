import React from "react";
import "./input.css";
import Button from "../button/button";
import { FaUser } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";

export default function Input() {
  return (
    <div className="input-login">
      <form className="form-login">
        <input type="text" />
        <FaUser className="icon"/>        
      </form>
      <form className="form-login">
        <input type="text" />
        <AiFillLock className="icon"/>        
      </form>
      <Button />
    </div>
  );
}
