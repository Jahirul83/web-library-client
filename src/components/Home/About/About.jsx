import aboutPic from '../../../assets/undraw_Portfolio_website_re_jsdd.png'
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 p-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={aboutPic}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">About Our Library Website</h1>
                        <h1 className="text-3xl font-bold">Our Mission</h1>
                        <p className="py-6">At Library, our mission is to connect readers with their next favorite book, providing a seamless and enjoyable experience for exploring, discovering, and embracing the world of literature.</p>
                        <h1 className="text-3xl font-bold">What We Offer</h1>
                        <h1 className="text-2xl font-bold">Extensive Book Collection</h1>
                        <p className="py-6">Dive into our vast collection of books spanning various genres, from timeless classics to contemporary bestsellers. Whether your a fan of fiction, non-fiction, mystery, romance, or science fiction, weve got something for every reader.</p>
                        <h1 className="text-3xl font-bold">Our Mission</h1>
                        <p className="py-6">At Library, our mission is to connect readers with their next favorite book, providing a seamless and enjoyable experience for exploring, discovering, and embracing the world of literature.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;