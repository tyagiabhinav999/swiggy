import { useState } from "react";
import Card from "./CardComponent";
import { dataObj } from "../utils/data";

//!     TASK - If filter button clicked again, then remove the filter.

const Body = () => {
  let [data, setData] = useState([dataObj]);

  if (!data[0].restaurants) 
    data = [{restaurants: data}];

  return (
    <div className="body-container">
      <button onClick={() => {
        const filteredData =  data[0].restaurants.filter((res) => res.info.avgRating > 4);
        setData(filteredData);
      }} className="filter-btn">Filter</button>
      <div className="container">
        {data[0].restaurants.map((res) => (
          <Card key={res.info.id} data={res.info} />
        ))}
      </div>
    </div>
  );
};


export default Body;
