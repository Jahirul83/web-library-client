import faqPic from '../../../assets/undraw_Questions_re_1fy7.png'

const FAQ = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={faqPic} className="max-w-sm w-1/2 md:w-full rounded-lg shadow-2xl" />
                    {/* FAQ */}
                    <div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                How do I borrow books from the online library?
                            </div>
                            <div className="collapse-content">
                                <p>To borrow books, simply log in to your account, search for the desired book, and click on the Borrow button. Follow the prompts to complete the borrowing process.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                What if I return a book late?
                            </div>
                            <div className="collapse-content">
                                <p>Overdue fines may apply for late returns. Its important to check the due dates for your borrowed items and return them on time to avoid fines.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Is there a limit to the number of books I can borrow at a time?
                            </div>
                            <div className="collapse-content">
                                <p>The borrowing limit is typically set in your account settings. Check your account details to see the maximum number of books you can borrow simultaneously.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FAQ;