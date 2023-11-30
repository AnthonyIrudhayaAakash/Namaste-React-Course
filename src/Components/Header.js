import logo from "../configs/media/food-logo-bg.png"
import searchicon from "../configs/media/searchicon.png"
const Header = () =>{
    return (
     <div className="header">
         <div className="logo-box">
             <img  className ="logo" src={logo} width="150"></img>
         </div>
 
         <div className="searchbar-container">
                 <div className="child-searchbar-div">
                     <input className="searchinput"placeholder="Search your food" type="search"></input>
 
                     <button className="search-btn"><img src={searchicon} width="30" className="search-icon-png" aria-label="Search"></img></button>
 
                 </div>
         </div>
 
         <div className="nav-links">
             <ul className="navlist">
                 <li>Home</li>
                 <li>Cart</li>
                 <li>login</li>
                 <li>About Us</li>
                 <li>Contact Us</li>
             </ul>
 
         </div>
 
     </div>
    )
 }
 export default Header;