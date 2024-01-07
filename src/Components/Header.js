import { useEffect, useState } from "react";
import logo from "../configs/media/food-logo-bg.png"
import searchicon from "../configs/media/searchicon.png"
import Body from "./Body";
const Header = () =>{
   // console.log("outer Header rendered")
    const login ="Login";
    const logout = "Log-out"

    const [rest_data, setrest_data] = useState([]);  

    const [loginstate,setloginstate] = useState(login)

    const [count, setcount] = useState(1);

    const [searchInput, setsearchInput] = useState("");

    
    useEffect(()=>{

        if(count%2===0){
            // console.log("log out",count)
            setloginstate(logout)
        }
        else{
            //console.log("log in",count)
            setloginstate(login);
        }

    },[count])
    
    //console.log("Body called")
    useEffect(()=>{
        fetchData();
        
    },[])

    useEffect(()=>{
        if(searchInput.length===0){
            fetchData();
        }
        else{
            const search_filter = rest_data.filter((restaurents)=>{
                return restaurents?.info?.name.toLowerCase().includes(searchInput.toLowerCase());
            })
            setrest_data(search_filter)
        }
    },[searchInput])

    const fetchData = async () =>{
       // console.log("Fetched data")
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
       
       
        const {restaurants}=json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle;
        
       
       
        setrest_data(restaurants)
        console.log("body",restaurants);
      //  {<Body rest_data ={rest_data}/>}
        // console.log("hello",rest_data);
    }

 


    return (
     <div className="header">
         <div className="header-container">
         <div className="logo-box">
             <img  className ="logo" src={logo} width="150"></img>
         </div>
 
         <div className="searchbar-container">
                 <div className="child-searchbar-div">
                     <input className="searchinput" placeholder="Search for restaurent" type="search" value={searchInput} onChange={
                        (event)=>{
                            setsearchInput(event.target.value);
                            console.log("Search Input")
                         
                        }
                     }></input>
 
                     <button className="search-btn" onClick={()=>{
                        console.log("button clicked")

                        

                     }}><img src={searchicon} width="30" className="search-icon-png" aria-label="Search"></img></button>
 
                 </div>
         </div>
 
         <div className="nav-links">
             <ul className="navlist">
                 <li>Home</li>
                 <li>Cart</li>
                 <li>login</li>
                 <li>About Us</li>
                 <li>Contact Us</li>
                 <button id="login-btn" onClick={()=>{
                    setcount(prevcount => prevcount+1)    
                     
                    console.log("log button clicked ", count)
                 }}   
                 >{loginstate}</button>
             </ul>
         </div>

         </div>
         <div className="Bodycontainer">          
            <Body rest_data={rest_data}/>
         </div>
         
     </div>
     

  

     
    )
 }
 export default Header;