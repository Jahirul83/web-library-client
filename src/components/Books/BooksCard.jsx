import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BooksCard = ({ book }) => {
    const { _id, image, title, short_description } = book;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{short_description}</p>
                    <div className="card-actions">
                        <Link to={`/bookUpdate/${_id}`}>
                            <button className="btn btn-primary">Update</button>
                        </Link>
                        <Link to={`/BookDetails/${_id}`}><button className="btn btn-primary">details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;

BooksCard.propTypes = {
    book: PropTypes.object
}