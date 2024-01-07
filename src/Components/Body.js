//import rest_data from "../configs/Restdata";
import RestaurentCards from "./RestaurentCards";
import { useState, useEffect } from "react";
// import Restdata from "../configs/Restdata";
import Shimmer from "./Shimmer";

const Body = (props) =>{
    //ReactHooks
    console.log("props",props);
    const [rest_data, setrest_data] = useState([]); 

    let value =0;
    return props.rest_data.length===0 ? <Shimmer key={value++}/> : (
        <div className="bodycontainer">
            <div className="btn-container">            
                <button onClick={() => {
                    const filtered_restaurents = props.rest_data.filter(
                        (restaurent) => {
                        
                        return restaurent.info.avgRating > 4;
                    })
                    setrest_data(filtered_restaurents)
                }} className="Filter-btn" >Filter</button>
            </div>
    
            <div className="Main-Container">
                {
                    props.rest_data.map((restaurent) => <RestaurentCards key={restaurent.info.id} restdata={restaurent} />)
                }
            </div>
        </div>
    )
}; 

export default Body;
