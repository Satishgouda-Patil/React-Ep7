import Cards from "./Cards";
import dataLists from "../utils/swiggyApi"; 
import { useState,useEffect } from "react";


const Body=()=>{
  const [dataListsUseStates, setdataLists]=useState(dataLists);

  if(dataListsUseStates.length===0){
    return(
      <div className="con">
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
      </div>
    )
  }
    return(
        <div className="body container">
            <div className="search">
                <label className="search-icon">&#128270;</label>
                <input placeholder="Search your dish"></input>
                <label className="search-icon">filter by ratings</label>
                <button onClick={()=>{
                  let filteredData=dataListsUseStates.filter(x=>x.info.avgRating>=4.8)
                  setdataLists(filteredData);
                }} type="click">Click to filter</button>

            </div>
           <div className="row col">
              {
                dataListsUseStates.map(resto=>(
                  <Cards key={resto.info.id} resData={resto} />
                ))
              }
           </div>
        </div>
    )
}

export default Body;