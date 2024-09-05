import Cards from "./Cards";
import dataLists from "../utils/swiggyApi";
const Body=()=>{
    return(
        <div className="body container">
            <div className="search">
                <label className="search-icon">&#128270;</label>
                <input placeholder="Search your dish" ></input>
            </div>
           <div className="row col">
              {
                dataLists.map(resto=>(
                  <Cards key={resto.info.id} resData={resto} />
                ))
              }
           </div>
        </div>
    )
}

export default Body;