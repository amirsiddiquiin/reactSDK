import { IMAGE_CDN } from "./config";

export const RestaurentCard = ({
    name,
    cuisines,
    deliveryTime,
    cloudinaryImageId,
  }) => {
    return (
      <>
        <div
          style={{
            width: 300,
            padding: 10,
            border: "1px solid black",
            borderRadius: 10,
            margin: 10,
          }}
        >
          <img
            src={
              IMAGE_CDN +
              cloudinaryImageId
            }
            style={{ height: 300, width: 300 }}
          />
          <h1>{name}</h1>
          <h4>{cuisines && cuisines.join(",")}</h4>
          <p>{deliveryTime} km</p>
        </div>
      </>
    );
  };