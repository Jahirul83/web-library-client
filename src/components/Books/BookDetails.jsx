// import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";


const BookDetails = () => {
    const { user } = useContext(AuthContext);
    const bookDetails = useLoaderData();
    const {
        _id,
        image, title, author, category, quantity, short_description, rating } = bookDetails;

    let currentQuantity = quantity - 1;

    const handleBorrowBooks = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const returnBooks = form.returnBooks.value;
        const borrowBooks = form.borrowBooks.value;

        const borrow = { bookId: _id, email, title, author, currentQuantity , quantity, short_description, rating, returnBooks, borrowBooks };
        console.log(borrow);
        // axios.patch(`/books/${_id}`,borrow)
        // .then((result) => {
        //     console.log(result)
        // }).catch((err) => {
        //     console.log(err.message)
        // });

        axios.post('https://web-library-server.vercel.app/borrowBooks',borrow)
        .then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err?.message)
        });
    }

    // bookId

    // email

    // title

    // author

    // category

    // currentQuantity

    // returnBooks

    // borrowBooks



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl w-full" />
                <div>
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-3">description: {short_description}</p>
                    <p className="py-3">Author Name: {author}</p>
                    <p className="py-3">Category : {category}</p>
                    <p className="py-3">quantity: {quantity}</p>
                    <p className="py-3">rating: {rating}</p>

                    {/* Model */}
                    <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_1').showModal()}>Borrow</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action">
                                <form onSubmit={handleBorrowBooks} method="dialog">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Borrow Date</span>
                                        </label>
                                        <input type="email" defaultValue={user?.email} className="input input-bordered" name="email" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Borrow Date</span>
                                        </label>
                                        <input type="date" className="input input-bordered" name="borrowBooks" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Return Date</span>
                                        </label>
                                        <input type="date" className="input input-bordered" name="returnBooks" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <input className="btn btn-primary" type="submit" value="Borrow" />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;