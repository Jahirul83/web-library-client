import { useLoaderData } from "react-router-dom";
import BorrowedBooksRow from "./BorrowedBooksRow";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const BorrowedBooks = () => {
    const { user } = useContext(AuthContext)
    const borrowed = useLoaderData();
    const [borrowedBooks, setBorrowedBooks] = useState();

    useEffect(() => {
        let rem = borrowed.filter(filterData => filterData?.email === user?.email)
        setBorrowedBooks(rem);
    }, [borrowed, user?.email])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>email</th>
                            <th>title</th>
                            <th>author</th>
                            <th>returnBooks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            borrowedBooks?.map(borrow => <BorrowedBooksRow
                                key={borrow._id}
                                borrow={borrow}
                            ></BorrowedBooksRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BorrowedBooks;
