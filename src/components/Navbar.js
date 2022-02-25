import React from "react";
import SearchBox from "./SearchBox";

export default function Navbar() {
  return (
    <div>
        <img className="Bitmap" src="./assets/logo.jpg" alt="logo" />
        <SearchBox/>
    </div>
  );
}
