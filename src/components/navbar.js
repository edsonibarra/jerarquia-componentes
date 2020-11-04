import React from "react";
import SearchBar from "./search-bar";
import Logo from "./logo";
import Icon from "./icon";
import Login from "./login";
/* Importar los componentes */

/* Importar los iconos */

export default function Navbar(props) {
  return (
    <div className="navbar">
      <Logo />
      <SearchBar />
      <Icon />
      <Icon />
      <Icon />
      <Login />
    </div>
  );
}
