import PropTypes from 'prop-types';

const BorrowedBooksRow = ({ borrow }) => {
    const { email, author, title, returnBooks } = borrow;
    return (
        <div>
            <div className="overflow-x-auto">
                <tr className="bg-base-200">
                    <th>{email}</th>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>{returnBooks}</td>
                </tr>
            </div>
        </div>
    );
};

export default BorrowedBooksRow;
BorrowedBooksRow.propTypes = {
    borrow: PropTypes.object
}