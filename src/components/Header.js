import React from "react";
import marvelImage from "./../img/marvel-logo-header-1.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Comic Books</h1>
      <img src={marvelImage} alt="An image of the Marvel Logo" width={"200px"}/>
    </React.Fragment>
  );
}

export default Header;