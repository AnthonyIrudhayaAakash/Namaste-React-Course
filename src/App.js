import React from "react";
/*The react-dom/client module is specifically designed for client-side rendering.
 so we are using client here*/
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body"
import Offercards from "./Components/Offercards";
// import Filter from "./Components/Filter";


const root = ReactDOM.createRoot(document.getElementById("container"));
const MasterLayout = () =>{
    return (
        <div className="MasterContainer">
            <Header/>
            
            
            {/* <div className="Bodycontainer">
               
               <Body/>
            </div> */}
        </div>
    )
}


root.render(<MasterLayout/>);