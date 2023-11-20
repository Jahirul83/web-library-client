import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllbooksCard = ({ book }) => {
    const { _id, image,author, title, short_description, category, rating } = book;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="image" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title">author: {author}</h2>
                    <p>{short_description}</p>
                    <p>category: {category}</p>
                    <p>rating: {rating}</p>
                    <div className="card-actions">
                    <Link to={`/bookUpdate/${_id}`}>
                            <button className="btn btn-primary">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllbooksCard;

AllbooksCard.propTypes = {
    book: PropTypes.object
}