import PropTypes from 'prop-types';

const BooksCard = ({ book }) => {
    const { image , title, short_description } = book;
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
                        <button className="btn btn-primary">borrow</button>
                        <button className="btn btn-primary">details</button>
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