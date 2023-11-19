
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Categories from "../components/Categories/Categories";
import Books from "../components/Books/Books";
import AddBook from "../components/Books/AddBook";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import BookDetails from "../components/Books/BookDetails";
import About from "../components/Home/About/About";
import Contact from "../components/Home/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('categories.json')

            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/categories",
                element: <Categories></Categories>,
                loader: () => fetch('categories.json')
            },
            {
                path: "/BookDetails/:id",
                element: <BookDetails></BookDetails>,
                loader: ({ params }) => fetch(`http://localhost:3000/books/${params.id}`)
            },
            {
                path: "/books/:category_name",
                element: <Books></Books>,
                loader: () => fetch('http://localhost:3000/books')
            },
            {
                path: "/addBook",
                element: <AddBook></AddBook>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contacts",
                element: <Contact></Contact>
            },
        ],
    },
]);

export default router;