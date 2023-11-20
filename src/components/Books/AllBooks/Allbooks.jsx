import { useLoaderData } from "react-router-dom";
import AllbooksCard from "./AllbooksCard";
import { useEffect, useState } from "react";


const Allbooks = () => {
    const booksData = useLoaderData();
    const [allbooks, setAllbooks] = useState(booksData);
    const [availableBooks, setAvailableBooks] = useState([]);

    useEffect(() => {
        let rem = booksData.filter(filterData => filterData.available === true)
        console.log(rem);
        setAvailableBooks(rem);
    }, [booksData])

    const handleFilterForAvailable = () => {
        setAllbooks(availableBooks);
    }

    const handleFilterForAllbooks = () => {
        setAllbooks(booksData);
    }


    return (
        <div className="p-6">
            <div>
                <button onClick={handleFilterForAllbooks} className="btn btn-primary mr-3">all</button>
                <button onClick={handleFilterForAvailable} className="btn btn-primary">available books</button>
            </div>
            <h2>this is all books: {allbooks.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    allbooks.map(book => <AllbooksCard
                        key={book._id}
                        book={book}
                    ></AllbooksCard>)
                }
            </div>
        </div>
    );
};

export default Allbooks;