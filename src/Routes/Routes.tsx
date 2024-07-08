import Main from "@/Layout/Main";
import Home from "@/Pages/Home/Home";
import Products from "@/Pages/Products/Products";
import { createBrowserRouter } from "react-router-dom";

const routes=createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/products',
                element:<Products/>
            }
        ]
    }
])
export default routes;