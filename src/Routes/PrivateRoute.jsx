import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <progress className="progress w-56" value="100" max="100"></progress>
    }
    return children;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node
}