// import axios from "axios";
import { useLoaderData } from "react-router-dom";


const BookDetails = () => {
    const bookDetails = useLoaderData();
    const { 
        // _id,
         image, title, author, category, quantity, short_description, rating, } = bookDetails;

    const handleBorrowBooks = (event) => {
        event.preventDefault();
        const form = event.target;
        const returnBooks = form.returnBooks.value;
        const borrowBooks = form.borrowBooks.value;

        const borrow = { returnBooks, borrowBooks };
        console.log(borrow)
        // axios.patch(`/books/${_id}`,borrow)
        // .then((result) => {
        //     console.log(result)
        // }).catch((err) => {
        //     console.log(err.message)
        // });
    }


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
                    <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
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