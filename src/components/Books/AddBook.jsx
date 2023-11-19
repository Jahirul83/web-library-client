import axios from "axios";


const AddBook = () => {
    const handleAddBook = e => {

        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const quantity = form.quantity.value;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const short_description = form.short_description.value;
        const image = form.image.value;
        const available = true;

        const fromInfo = { title, quantity, author, category, rating, short_description, image, available }

        // console.log(fromInfo);


        axios.post('http://localhost:3000/books', fromInfo)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });

    }

    return (
        <div>
            <h2>this is all books</h2>
            <div>
                <form onSubmit={handleAddBook}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity of the book</span>
                            </label>
                            <input type="text" name="quantity" placeholder="quantity" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Author Name</span>
                            </label>
                            <input type="text" name="author" placeholder="Author Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">

                                <select name="category" className="input input-bordered w-full">
                                    <option value="Fiction">Fiction</option>
                                    <option value="Science Fiction">Science Fiction</option>
                                    <option value="Mystery">Mystery</option>
                                    <option value="Non-Fiction">Non-Fiction</option>
                                    <option value="Self-Help">Self-Help</option>
                                    <option value="Fantasy">Fantasy</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                type="number"
                                name="rating"
                                placeholder="Rating"
                                className="input input-bordered w-full"
                                min="1"
                                max="5"
                                step="1"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name="image" placeholder="Image Url" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <textarea type="text" defaultValue="short_description" name="short_description" placeholder="short description" className="textarea textarea-bordered textarea-sm w-full" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Add books" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBook;