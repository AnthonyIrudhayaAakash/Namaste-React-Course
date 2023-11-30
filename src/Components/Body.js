//import rest_data from "../configs/Restdata";
import RestaurentCards from "./RestaurentCards";
import { useState } from "react";
import Restdata from "../configs/Restdata";

const Body = () =>{
    const [rest_data, setrest_data] = useState(Restdata);  
    return (
        <div>
            <div className="btn-container">            
                <button onClick={() => {
                    const filtered_restaurents = rest_data.filter((restaurent) => {
                        
                        return restaurent.info.avgRating > 4;
                    })
                    setrest_data(filtered_restaurents)
                }} className="Filter-btn" data-check="true">Filter</button>
            </div>
    
            <div className="Main-Container">
                {
                    rest_data.map((restaurent) => <RestaurentCards key={restaurent.info.id} restdata={restaurent} />)
                }
            </div>
        </div>
    )
};  
export default Body;
