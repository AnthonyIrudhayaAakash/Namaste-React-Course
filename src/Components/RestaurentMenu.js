import { useEffect,useState } from "react";
import { json } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMAGE_URL } from "../configs/constants";
import Offer_Timing from "./Offer_Timing";
import Menu_category from "./Menu_category";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../configs/constants";
import Category from "./Category";



const RestaurentMenu = () =>{
    const i=2;
    const [menulist, setmenulist] = useState(null);

    const { resid } = useParams()

     const [filterbtnstatus, setfilterbtnstatus] =useState(false)

    const [filtermenulist, setfiltermenulist]= useState(null);
    
    const [veg_nonveg, set_veg_noneveg] = useState("Filter")

    
    
    useEffect(()=>{

        fetchMenu();
      


    },[])
    // useEffect(()=>{

    //     if(filterbtnstatus==true){
    //         filter();
    //     }

    // }, [filterbtnstatus])
    
    // const filter = () => {
    //     console.log("helo",menulist)
    //     console.log("fil list", filtermenulist)
    //     const vegrestaurent = menulist.cards.filter((menu)=>{
    //         return menu?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.card?.info?.isVeg == 1;
    //     })
    //     console.log("veg",vegrestaurent)
    //     setfiltermenulist(vegrestaurent);
    // }
   


    const fetchMenu = async() =>{
        const menudata = await fetch(MENU_API_URL+resid);

        const menujson = await menudata.json();

        setmenulist(menujson.data);
        setfiltermenulist(menujson.data);
        console.log(menulist)
        
        
    }
    console.log("menu",menulist)


    const large_array =  filtermenulist?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || {};

    console.log("Larger array", large_array);


    // const isVeg = filtermenulist?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.card?.info || undefined;

    const { name:resname, cuisines , avgRating , areaName, costForTwoMessage, key } = filtermenulist?.cards?.[0]?.card?.card?.info || {};
    const  { lastMileTravelString , slaString } = filtermenulist?.cards?.[0]?.card?.card?.info?.sla || {};
   

    const offertimingprops = {
        slaString,
        costForTwoMessage
    }
    console.log("usestate", useState())


    // console.log("check", check);
    
return menulist === null ? <Shimmer /> : (
    <div className="menu-container">
     
           <div className="title-container">
                <div className="title-section-one">
                    <h3 className="rest-name">{resname}</h3>
                    <p className="rest-cuisines">{cuisines}</p>
                    <p className="rest-area-distance">{areaName}, {lastMileTravelString}</p>
                </div>
                <div className="title-section-two">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 24 24">    
                        <polygon points="12 2 15.1 8.5 22 9.3 17 14.5 18.2 21 12 17.8 5.8 21 7 14.5 2 9.3 8.9 8.5 12 2" fill="#ffd700" className="star"/>                   
                    </svg>
                    <p className="rest-avgrating">{avgRating}</p>
                
                    
                </div>

           </div>
           
           
           <Offer_Timing {...offertimingprops} key={key}/>
            <div className="menu-filter-btn-div">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3996 5.99897C13.3996 6.66172 12.8623 7.19897 12.1996 7.19897C11.5368 7.19897 10.9996 6.66172 10.9996 5.99897C10.9996 5.33623 11.5368 4.79897 12.1996 4.79897C12.8623 4.79897 13.3996 5.33623 13.3996 5.99897ZM14.9996 5.99897C14.9996 7.54537 13.746 8.79897 12.1996 8.79897C10.9311 8.79897 9.85962 7.95547 9.51546 6.79878L1.80875 6.79878C1.36692 6.79878 1.00875 6.44061 1.00875 5.99878C1.00875 5.55695 1.36692 5.19878 1.80875 5.19878L9.51558 5.19878C9.85986 4.04228 10.9312 3.19897 12.1996 3.19897C13.746 3.19897 14.9996 4.45258 14.9996 5.99897ZM3.8 13.4527C3.13726 13.4527 2.6 12.9154 2.6 12.2527C2.6 11.59 3.13726 11.0527 3.8 11.0527C4.46274 11.0527 5 11.59 5 12.2527C5 12.9154 4.46274 13.4527 3.8 13.4527ZM3.8 15.0527C2.2536 15.0527 1 13.7991 1 12.2527C1 10.7063 2.2536 9.45271 3.8 9.45271C5.0683 9.45271 6.13964 10.296 6.48396 11.4524H14.1953C14.6372 11.4524 14.9953 11.8106 14.9953 12.2524C14.9953 12.6942 14.6372 13.0524 14.1953 13.0524H6.48414C6.14001 14.2092 5.06852 15.0527 3.8 15.0527Z" fill="rgba(2, 6, 12, 0.92)" fill-opacity="0.92">
                    </path>
                </svg>
                <span className="cost-two" onClick={
                    ()=>{
                        if(filterbtnstatus==false){
                            setfilterbtnstatus(true);
                            set_veg_noneveg("Veg");
                            
                        }
                        else{
                            setfilterbtnstatus(false);
                            set_veg_noneveg("Filter");
                        }
                    }
                }>&nbsp;{veg_nonveg}</span>
                

            </div> 
           
           {/* <div className="gap-column"></div> */}
            
           {
                large_array.map((menu,index)=>{
                    console.log("larger array map", menu);
                    // 
                  
                    if(index>=2){
                        let i=0, j=0;
                        const id = menu?.card?.card?.itemCards?.[i]?.card?.info?.id || menu?.card?.card?.categories?.[i]?.itemCards?.[j]?.card?.info?.id || i+j || undefined;
                        console.log("id", id);
                        return (
                            <>
                            <Category data={menu}/>
                            <Menu_category key={id} data={menu} index={index} btn_status={filterbtnstatus}/>
                            
                            {/* <div className="gap-column"></div> */}
                            </>
                        )
                    }
                })
            
           }
        
    </div>
);
}

export default RestaurentMenu;