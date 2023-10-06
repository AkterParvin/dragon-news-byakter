import { Link } from "react-router-dom";
import userPic from "../../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Nav = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(res => {
                console.log(res.user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const navLinks = <>
        <li><Link to='/' className="text-lg text-zinc-600 font-medium">Home</Link></li>
        <li><Link to='/about' className="text-lg text-zinc-600 font-medium">About</Link></li>
        <li><Link to='/career' className="text-lg text-zinc-600 font-medium">Career</Link></li>
        <li><Link to='/login' className="text-lg text-zinc-600 font-medium">Login</Link></li>

    </>
    return (

        <div className="navbar bg-base-100 mt-5 mb-10">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <img src={userPic} alt="" className="w-10 mr-3" />
                {
                    user ?
                        <button onClick={handleSignOut} className="bg-gray-600 text-white font-semibold px-8 py-2">Sign Out</button> :
                        <Link to="/login">
                            <button className="bg-gray-600 text-white font-semibold px-8 py-2">Login</button>
                        </Link>
                }


            </div>
        </div>
    );
};

export default Nav;