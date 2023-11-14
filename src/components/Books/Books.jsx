import { useParams } from "react-router-dom";

const Books = () => {
    const { category_name } = useParams();
    return (
        <div>
            <h2>this is books:{category_name.toLowerCase()}</h2>
        </div>
    );
};

export default Books;