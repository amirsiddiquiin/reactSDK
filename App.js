import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", { id: "title" }, "headng 1");
const heading2 = React.createElement("h2", { id: "title" }, "heading 2");

const Santa = () => ( <h1>aamir</h1>);

// react component
// functional component
const MyFunction = () => {
  return (
    <div>
      <Santa />
      <span>Ki gaand</span>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyFunction />);
