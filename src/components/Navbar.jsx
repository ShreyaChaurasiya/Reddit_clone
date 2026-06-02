import { Link, useNavigate } from "react-router-dom";
import { FaRedditAlien, FaSignOutAlt, FaHome, FaPlusCircle, FaUsers } from "react-icons/fa";

function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate("/login");
    };

    return (
        <div className="flex justify-between items-center px-8 py-4 bg-black/90 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-2 rounded-full shadow-lg">
                    <FaRedditAlien className="text-white text-2xl" />
                </div>
                <div>
                    <h1 className="text-2xl font-extrabold text-orange-400">MemeSphere</h1>
                    <p className="text-xs text-gray-400">Laugh • Post • Chill 🚀</p>
                </div>
            </Link>

            {/* NAV LINKS */}
            <div className="flex gap-6 items-center">
                <Link to="/" className="flex items-center gap-2 hover:text-orange-400 transition text-gray-300">
                    <FaHome /> Home
                </Link>
                {token && (
                    <>
                        <Link to="/create-post" className="flex items-center gap-2 hover:text-orange-400 transition text-gray-300">
                            <FaPlusCircle /> Create Post
                        </Link>
                        <Link to="/create-community" className="flex items-center gap-2 hover:text-orange-400 transition text-gray-300">
                            <FaUsers /> Community
                        </Link>
                    </>
                )}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">
                {token ? (
                    <>
                        <span className="text-orange-300 font-semibold">👋 {username || "User"}</span>
                        <button
                            onClick={logout}
                            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-pink-600 px-5 py-2 rounded-xl hover:scale-105 transition font-semibold"
                        >
                            <FaSignOutAlt /> Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="border border-orange-500 px-5 py-2 rounded-xl hover:bg-orange-500 transition">
                            Login
                        </Link>
                        <Link to="/signup" className="bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-2 rounded-xl hover:scale-105 transition font-semibold">
                            Signup
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;