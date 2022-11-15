import React from "react";
import { render } from "react-dom";
import Rating from "./Rating";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () =>
  <div style={styles}>
    <Rating rating={5} />
  </div>;

render(<App />, document.getElementById("root"));
