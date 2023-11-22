import React from "react";
/*The react-dom/client module is specifically designed for client-side rendering.
 so we are using client here*/
import ReactDOM from "react-dom/client"
import image from "./Screenshot (1)-modified.png"
import icon from "./icons8-search-48.png"
import uicon from "./icons8-user-35.png"

const root = ReactDOM.createRoot(document.getElementById("container"));

const Header = () => {
    return (
        <div className="containerJS" id="containerJS">
            <img src={image} height= "100"></img>
            <form className="search-form">
                <label for="search"></label>
                <input type="search" id="searchbar" placeholder="Search for Something"></input>
                
            </form>
            <img className="btn-1" src={uicon} width="40"></img>
        </div>
    )
}
root.render(<Header/>);