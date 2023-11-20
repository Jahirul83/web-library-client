import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Category from "../Categories/Category";
import FAQ from "./FAQ/FAQ";
import About from "./About/About";
import Contact from "./Contact/Contact";
// import Categories from "../Categories/Categories";


const Home = () => {
    const LoadedData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-3xl font-semibold text-center m-6">Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
                {
                    LoadedData?.map(data => <Category
                        key={data.id}
                        data={data}
                    ></Category>)
                }
            </div>
            <div>
                <h2 className="text-3xl font-semibold text-center m-6">FAQ</h2>
                <FAQ></FAQ>
            </div>
            <div>
                <h2 className="text-3xl font-semibold text-center m-6">About</h2>
                <About></About>
            </div>
            <div>
                <h2 className="text-3xl font-semibold text-center m-6">Contact Us</h2>
                <Contact></Contact>
            </div>
        </div>


    );
};

export default Home;