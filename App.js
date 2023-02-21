import React from "react";
import ReactDOM from "react-dom/client";

const style = {
  border: "1px solid grey",
};

// react component
// functional component
const Header = () => {
  return (
    <div>
      <div style={style}>Header</div>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <div>Footer</div>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div>Body</div>
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
