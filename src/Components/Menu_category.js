import { IMAGE_URL, NON_VEG_IMAGE_URL, ALT_FOOD_IMAGE } from "../configs/constants";
import Menu from "./Menu";
const Menu_category = (props) =>{
    // console.log("props", props?.data?.card?.card?.itemCards, props.index )

    let j=0
    const categories =props?.data?.card?.card?.categories || undefined ;
    console.log("I'm category", categories)
    
    //console.log("menu arr", menu_array)
    
   
    if(categories===undefined){
        const menu_array = props?.data?.card?.card?.itemCards ||  [];
        
        return  (
            menu_array.map((menu)=>{

                const { name , price , description, imageId, defaultPrice, finalPrice } = menu?.card?.info || undefined;

                const { vegClassifier } = menu?.card?.info?.itemAttribute || undefined;
                console.log("classifier", vegClassifier);

                const menuprops = {name, price, description, imageId, defaultPrice, finalPrice}
                console.log(props.btn_status);
                if(props.btn_status && vegClassifier==="VEG"){
                    return(
                            
                        <Menu {...menuprops} />
                    )
               }
               else if(!props.btn_status){
                    return(
                                
                        <Menu {...menuprops} />
                    )
               }
            })
        )
    }
    else{
        return categories.map(()=>{
            
             
            // console.log("i:",j)
            const menu_array =  props?.data?.card?.card?.categories?.[j]?.itemCards 
            j++
           return menu_array.map((menu)=>{
             
                const { name,price, description, imageId , defaultPrice, finalPrice} = menu?.card?.info;
                const menuprops = {name, price, description, imageId, defaultPrice, finalPrice}

                const { vegClassifier } = menu?.card?.info?.itemAttribute || undefined;
                console.log("classifier", vegClassifier);
                
                if(props.btn_status){
                    if(vegClassifier==="VEG"){
                        return(
                            
                            <Menu {...menuprops} />
                        )
                    }
               }
               else if(!props.btn_status){
                    return(
                                
                        <Menu {...menuprops} />
                    )
               }
            })

        })

    }
}
export default Menu_category;