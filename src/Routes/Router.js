import { createBrowserRouter } from "react-router-dom"
import Home from "../Components/Home/Home"
import Main from "../Layout/Main"

export const Router = createBrowserRouter([
    {path:'/',
     element:<Main></Main>
    //  This is the children element of the router
            ,children:[
                {index:true
                ,element:<Home></Home>},
            ]
    }


])