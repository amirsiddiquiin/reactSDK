import { useState, useEffect } from "react";
import { restaurentList } from "./config";
import { RestaurentCard } from "./RestaurentCard";

function filterData(searchTxt, updateResList) {
  const newFilterRes = updateResList.filter((restaurent) =>
    restaurent.data.name.includes(searchTxt)
  );
  return newFilterRes;
}

const Body = () => {
  const [searchTxt, setSearchTxt] = useState();
  const [newResData, setNewResData] = useState(restaurentList);

  useEffect( () =>{
    console.log("RENDER")
  }, [])
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="search"
          className="search-container"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(searchTxt, newResData);
            setNewResData(data);
          }}
        >
          Search Me
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {newResData.map((restaurent) => {
          return (
            <RestaurentCard key={restaurent.data.id} {...restaurent.data} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
//   const searchTxt = "amir";  we are suning in js
// we make variable in react
// e.target.value ===>> whatever you write in input
//   const [searchTxt, setSearchTxt] = useState(); //RETURNS==> [Variable name, fn to update the variable]

{
  /* <ReastaurentCard {...restaurentList[1]?.data} />
          <ReastaurentCard {...restaurentList[2]?.data} />
          <ReastaurentCard />
          <ReastaurentCard {...restaurentList[3]?.data} />
          <ReastaurentCard {...restaurentList[4]?.data} />
          <ReastaurentCard {...restaurentList[5]?.data} />
          <ReastaurentCard {...restaurentList[6]?.data} />
          <ReastaurentCard {...restaurentList[7]?.data} />
          <ReastaurentCard {...restaurentList[8]?.data} /> */
}

// name={restaurentList[0].data.name}
// cuisines={restaurentList[0].data.cuisines}
// deliveryTime={restaurentList[0].data.deliveryTime}
// cloudinaryImageId={restaurentList[0].data.cloudinaryImageId}

// onClick={ ()=> {
//   // we are searching the text inside the updateres give a filte data
//     const filterResData =  filterData(searchTxt, updateResList );
//     //update the state of the restaurent
//     setUpdateResList(filterResData) }}
