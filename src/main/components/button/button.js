import React from "react";
import './button.css'
import {BiExit} from 'react-icons/bi'

export default function Button() {
  return (
    <form className="button-login">
      <button type="submit">Enviar <BiExit className="icon-button"/></button>
    </form>
  );
}
