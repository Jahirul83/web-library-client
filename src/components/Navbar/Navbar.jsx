import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {
    const { user,LogOut } = useContext(AuthContext);
    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">about</NavLink></li>
        <li><NavLink to="/contacts">contacts</NavLink></li>
        {
            user && <><li><NavLink to="/addBook">Add Book </NavLink></li>
                <li><NavLink to="/allBook"> All Books</NavLink></li>
                <li><NavLink to="/borrowed">Borrowed Books</NavLink></li>
            </>
        }
    </>

    const handleLogout = () => {
        LogOut()
        .then(() => {   
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">BOOKS <span className="text-indigo-600">POINT</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleLogout} className="btn btn-secondary">Logout</button> : <Link className="btn btn-secondary" to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;