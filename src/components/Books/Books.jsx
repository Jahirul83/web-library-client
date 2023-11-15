import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BooksCard from "./BooksCard";

const Books = () => {
    const books = useLoaderData();
    const [remaining, setRemaining] = useState([]);
    // const [category, setCategory] = useState([]);
    // const [currentCategory, setCurrentCategory] = useState([]);
    const { category_name } = useParams();

    useEffect(() => {


        let rem =  books.filter(filterData => category_name.toLowerCase() === filterData.category.toLowerCase());
        setRemaining(rem);
        // console.log(rem);

    }, [category_name,books])


    return (
        <div>
            <h2>this is books:{remaining.length}</h2>
            {
                remaining?.map(bookData => 
                <BooksCard 
                    key={bookData.id}
                    bookData={bookData}
                    ></BooksCard>)
            }
        </div>
    );
};

export default Books;