import RestaurentCards from "./RestaurentCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Food_Carousal from "./Food_Carousal";

const Body = (props) =>{
    // console.log("props called", props);
    //ReactHooks
    const [rest_data, setrest_data] = useState([]);  

    const [filter_rest_data, setfilter_rest_data] = useState([]);
    const [food_data, setfood_data] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])

    useEffect(()=>{  
        console.log("Data is filtering")     
        const search_filter = rest_data.filter((restaurents)=>{
            return restaurents?.info?.name.toLowerCase().includes(props.searchdata.toLowerCase());
        })
        
        setfilter_rest_data(search_filter)      
    },[props.searchdata])

    useEffect(()=>{
        if(props.filterbtnstatus){
            const btn_filter = rest_data.filter((restaurants)=>{
                return restaurants?.info?.avgRating===4.5;
            })
            setfilter_rest_data(btn_filter);
        }
        else{
            console.log("hello world")
            setfilter_rest_data(rest_data);
        }
              
    },[props.filterbtnstatus])

    const fetchData = async () =>{
     
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        const {restaurants} = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle;
        
        // console.log("food", data);
        const {info} = json?.data?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle;
        setfood_data(info);
        // console.log("des", info);
        setrest_data(restaurants);
        setfilter_rest_data(restaurants);
        // console.log("fetched data",restaurants);
    
    }

    return filter_rest_data.length === 0 ? <Shimmer /> : (
        <div className="bodycontainer">
          <div className="Main-Container">

            {food_data.map((food) => (
              <Food_Carousal props={food} />
            ))}

            {filter_rest_data.map((restaurent) => (
              <Link key={restaurent.info.id} id="restaurent_card_link" to={"/restaurentmenu/" + restaurent.info.id}>
                <RestaurentCards restdata={restaurent} />
              </Link>
            ))}

          </div>
        </div>
      );
      
}; 

export default Body;
