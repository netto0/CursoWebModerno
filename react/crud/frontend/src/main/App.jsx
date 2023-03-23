import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import React from "react";

import Routes from "./Routes";
import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
import Footer from "../components/template/Footer";

export default function App(props) {
  return (
      <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
  );
}
