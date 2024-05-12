import React from "react";
// import Card from "./card";
import "./App.css"
function Tile({ flag, name, alt }) {
  return (
    <div
      
      className="countryCard"
    >
      <img src={flag} alt={alt} style={{ height: "100px", width: "100px" }} />
      <h2>{name}</h2>
    </div>
  );
}
export default Tile;
