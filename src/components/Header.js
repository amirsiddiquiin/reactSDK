import { useState } from "react";

//Name Import 
export const Title = () => {
  return (
    <img
      src="https://s3.amazonaws.com/ionic-marketplace/food-ordering-restaurant-delivery-app/icon.png"
      style={{ height: 60, width: 60 }}
    />
  );
};

//Deafault Import
const Header = () => {
  return (
    <div>
      <div
        className="headerWrapper"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <div>
          <Title />
        </div>

        <div>
          <ul style={{ display: "flex", listStyleType: "none" }}>
            <li style={{ padding: 10 }}>offer</li>
            <li style={{ padding: 10 }}>Help</li>
            <li style={{ padding: 10 }}>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
