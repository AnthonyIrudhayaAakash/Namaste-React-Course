import { OFFER_IMAGE_URL } from "../configs/constants";

const Offercards = () => {
    return(
      <div className="offer-scroller">
        <div className="offer-card-container">
        <img src={OFFER_IMAGE_URL} className="offer-card" width={425} height={252}></img>
        </div>
        <div className="offer-card-container">
        <img src={OFFER_IMAGE_URL} className="offer-card" width={425} height={252}></img>        </div>     
        <div className="offer-card-container">
        <img src={OFFER_IMAGE_URL} className="offer-card" width={425} height={252}></img>        </div>
        <div className="offer-card-container">
        <img src={OFFER_IMAGE_URL} className="offer-card" width={425} height={252}></img>        </div>
  
      </div>
    )
  }
export default Offercards;  