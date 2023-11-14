
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Categories from "../components/Categories/Categories";
import Books from "../components/Books/Books";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children: [
        {
            path:"/",
            element:<Home></Home>,
            loader: ()=> fetch('categories.json')
             
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path:"/register",
            element: <Register></Register>
        },
        {
            path:"/categories",
            element: <Categories></Categories>,
            loader: ()=> fetch('categories.json') 
        },
        {
            path:"/books/:category_name",
            element: <Books></Books>
        },
      ],
    },
  ]);

  export default router;