import {

    Link,

    useNavigate

} from "react-router-dom";

import Logo from "./Logo";

function Navbar() {

    const navigate =
        useNavigate();

    const token =
        localStorage.getItem("token");

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");
    };

    return (

        <div
            className="flex justify-between items-center px-10 py-5 bg-black/80 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50"
        >

            <Logo />

            <div
                className="flex gap-8 items-center text-lg"
            >

                <Link
                    className="hover:text-orange-400 transition"
                    to="/"
                >
                    Home
                </Link>

                <Link
                    className="hover:text-orange-400 transition"
                    to="/create-post"
                >
                    Create Post
                </Link>

                <Link
                    className="hover:text-orange-400 transition"
                    to="/create-community"
                >
                    Community
                </Link>

                {

                    !token ?

                        <>

                            <Link to="/login">
                                Login
                            </Link>

                            <Link to="/signup">
                                Signup
                            </Link>

                        </>

                        :

                        <button

                            onClick={logout}

                            className="bg-gradient-to-r from-red-500 to-pink-500 px-5 py-2 rounded-xl hover:scale-105 transition"
                        >
                            Logout
                        </button>
                }

            </div>

        </div>
    );
}

export default Navbar;