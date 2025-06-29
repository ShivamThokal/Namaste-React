import React from "react";
import ReactDOM from "react-dom/client";

const Title =() => <h1 className="head">This is Title </h1>;

const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <h1 className="heading">Namaste React Functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
