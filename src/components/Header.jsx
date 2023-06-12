import React, { useEffect, useState } from "react";
import "./Header.css";
import MainText from "../text/MainText";

function Header() {
  return (
    <>
      <h1>Snowflake growth simulation</h1>
      <div className="main-text">
        <MainText/>
      </div>
    </>
  );
}

export default Header;
