import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../Components/Error/ErrorPage"
import Home from "../Components/Home/Home"
import Statistics from "../Components/Statistics/Statistics"
import TakeQuiz from "../Components/TakeQuiz/TakeQuiz"
import Main from "../Layout/Main"

export const Router = createBrowserRouter([
    {path:'/',
     element:<Main></Main>
     ,errorElement:<ErrorPage></ErrorPage>
    //  This is the children element of the router
            ,children:[
                {index:true
                ,element:<Home></Home>,
                loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz')
            },
            {
                path:'/takequiz/:quizID',
                element:<TakeQuiz></TakeQuiz>
                ,loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`)
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>,
                loader:()=> fetch('https://openapi.programming-hero.com/api/quiz')
            }
            ]
    }


])