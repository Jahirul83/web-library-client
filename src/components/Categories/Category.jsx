import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const Category = ({ data }) => {
    const { image_url, category_name, description } = data;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img className="w-72" src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category_name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/books/${category_name}`}><button className="btn btn-primary">show books</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
Category.propTypes = { data: PropTypes.object }