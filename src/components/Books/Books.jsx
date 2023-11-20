import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BooksCard from "./BooksCard";

const Books = () => {
    const books = useLoaderData();
    const [remaining, setRemaining] = useState([]);
    const { category_name } = useParams();

    useEffect(() => {


        let rem = books?.filter(filterData => category_name.toLowerCase() === filterData.category.toLowerCase());
        setRemaining(rem);
        // console.log(rem);

    }, [category_name, books])


    return (
        <div>
            <h2>this is books:{remaining.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    remaining?.map(book =>
                        <BooksCard
                            key={book.id}
                            book={book}
                        ></BooksCard>)
                }
            </div>
        </div>
    );
};

export default Books;