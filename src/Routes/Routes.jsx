
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
import BookUpdate from "../components/Books/BookUpdate";
import Allbooks from "../components/Books/AllBooks/Allbooks";
import BorrowedBooks from "../components/Books/BorrowedBooks/BorrowedBooks";
import PrivateRoute from "./PrivateRoute";

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
                path: "/books/:category_name",
                element: <Books></Books>,
                loader: () => fetch('http://localhost:5000/books')
            },
            {
                path: "/BookDetails/:id",
                element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)
            },
            {
                path: "/bookUpdate/:id",
                element: <PrivateRoute><BookUpdate></BookUpdate></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)
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
            {
                path: "/allBooks",
                element: <Allbooks></Allbooks>,
                loader: () => fetch('http://localhost:5000/books')
            },
            {
                path: "/borrowedBooks",
                element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/borrowBooks')
            },
        ],
    },
]);

export default router;