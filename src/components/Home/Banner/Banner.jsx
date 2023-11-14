import img1 from '../../../assets/banner1.jpg'
import img2 from '../../../assets/banner2.jpg'
import img3 from '../../../assets/banner3.jpg'
import img4 from '../../../assets/banner4.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-80">
                <div id="item1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full h-auto" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h3 className='text-4xl font-bold'>Welcome to Our Library</h3>
                            <p>Explore a World of Knowledge and Imagination</p>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full h-auto" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h3 className='text-4xl font-bold'>Discover Featured Collections</h3>
                            <p>From Classics to Contemporary Reads</p>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full h-auto" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h3 className='text-4xl font-bold'>Join Our Exciting Events</h3>
                            <p>Book Clubs, Author Talks, and More!</p>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full h-auto" />
                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h3 className='text-4xl font-bold'>Access Our Digital Resources</h3>
                            <p>eBooks, Audiobooks, and Online Learning</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;