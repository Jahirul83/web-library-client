import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Category from "../Categories/Category";
// import Categories from "../Categories/Categories";


const Home = () => {
    const LoadedData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-2 gap-4 m-4">
                {
                    LoadedData?.map(data => <Category
                        key={data.id}
                        data={data}
                    ></Category>)
                }
            </div>
            {/* <Categories></Categories> */}
        </div>
    );
};

export default Home;