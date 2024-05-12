import React from "react";
// import Card from "./card";
function Tile({ flag, name, alt }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        flexDirection: "column",
        width: "200px",
        height: "200px",
        padding: "1.5px",
        margin: "10px",
        objectFit: "cover",
      }}
    >
      <img src={flag} alt={alt} style={{ height: "100px", width: "100px" }} />
      <h2>{name}</h2>
    </div>
  );
}
export default Tile;
