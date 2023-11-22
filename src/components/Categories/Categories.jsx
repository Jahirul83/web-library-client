import { useLoaderData } from "react-router-dom";
import Category from "./Category";


const Categories = () => {
    const categories = useLoaderData();
    return (
        <div>
            {/* <h2>category:{categories.length}</h2> */}
            {
                categories?.map(category => <Category
                    key={category.id}
                    category={category}
                ></Category>)
            }
        </div>
    );
};

export default Categories;