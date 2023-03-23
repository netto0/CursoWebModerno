import "./Logo.css";
import logo from "../../assets/imgs/logo.png";
import React from "react";
import { Link } from "react-router-dom";

export default function Logo(props) {
  return (
    <aside className="logo">
      <Link to="" className="logo">
        <img src={logo} alt="logo" />
      </Link>
    </aside>
  );
}
