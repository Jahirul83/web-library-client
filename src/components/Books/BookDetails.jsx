import { useLoaderData } from "react-router-dom";


const BookDetails = () => {
    const bookDetails = useLoaderData();
    const { image, title, author, category, quantity, short_description, rating, } = bookDetails;


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
                    <button className="btn btn-primary">Borrow</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;