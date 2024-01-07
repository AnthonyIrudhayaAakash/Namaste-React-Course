import {IMAGE_URL} from "../configs/constants"
const RestaurentCards = (props) =>{
    //const {restdata}=props;
    const { name, cloudinaryImageId, cuisines, avgRating} = props.restdata?.info || {};
    const { slaString } = props.restdata?.info?.sla || { slaString: 'Default Value' };  
    //console.log(avgRating)
    return (
        <div className="Restaurent-Cards">
            
                <img src={IMAGE_URL+cloudinaryImageId} width="250" className="card-image"></img>
                <h3>{name}</h3>
                <p>{cuisines.join(", ")}</p>
          
            <div className="rating">

                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 24 24">    
                    <polygon points="12 2 15.1 8.5 22 9.3 17 14.5 18.2 21 12 17.8 5.8 21 7 14.5 2 9.3 8.9 8.5 12 2" fill="#ffd700" className="star"/>                   
                </svg>

                <p>&nbsp;{avgRating}<span>&nbsp;.&nbsp; {slaString}</span></p>
              
            </div>
            
        </div>

    );
};
export default RestaurentCards;