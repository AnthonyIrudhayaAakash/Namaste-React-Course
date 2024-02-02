import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import About from "./Components/About";
import Contact_us from "./Components/Contact_us";
import Error from "./Components/Error";
import Searchbody from "./Components/Searchbody";
import RestaurentCards from "./Components/RestaurentCards";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurentMenu from "./Components/RestaurentMenu";




const root = ReactDOM.createRoot(document.getElementById("container"));
const MasterLayout = () =>{
    return (
        <div className="MasterContainer">
            <Header/>
            <Outlet/>
        </div>
    )
}

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <MasterLayout/>,
        children:[
            {
                path:"/",
                element:<Searchbody/>
            },
            {
                path:"/about",
                element: <About/>,
            },
            {
                path:"/contact",
                element: <Contact_us/>
            },
            {
                path:"/restaurentmenu/:resid",
                element: <RestaurentMenu/>
            }
        ],
        errorElement: <Error/>
    },

])




root.render(<RouterProvider router={AppRouter}/>);