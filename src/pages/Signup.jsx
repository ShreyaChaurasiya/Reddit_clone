import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaRedditAlien } from "react-icons/fa";

function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const signup = async () => {
        if (!username || !email || !password) {
            setError("Please fill all fields");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }
        setLoading(true);
        setError("");
        try {
            await axios.post(
                "https://reddit-backend-xp48.onrender.com/api/auth/signup",
                { username, email, password }
            );
            alert("Account ban gaya! Ab login karo 🎉");
            navigate("/login");
        } catch (error) {
            setError("Signup failed. Email already registered ho sakti hai.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-black via-gray-900 to-orange-950">
            <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-[420px] border border-gray-700">

                <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4 rounded-full">
                        <FaRedditAlien className="text-white text-4xl" />
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-center mb-2 text-orange-400">Join MemeSphere</h1>
                <p className="text-center text-gray-400 mb-8">Create your account 🎉</p>

                {error && (
                    <div className="bg-red-500/20 border border-red-500 text-red-400 p-3 rounded-xl mb-5 text-center">
                        {error}
                    </div>
                )}

                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-4 mb-4 rounded-2xl bg-black/40 border border-gray-700 text-white outline-none focus:border-orange-500 transition"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 mb-4 rounded-2xl bg-black/40 border border-gray-700 text-white outline-none focus:border-orange-500 transition"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password (min 6 characters)"
                    className="w-full p-4 mb-6 rounded-2xl bg-black/40 border border-gray-700 text-white outline-none focus:border-orange-500 transition"
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && signup()}
                />

                <button
                    onClick={signup}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 p-4 rounded-2xl text-lg font-bold hover:scale-105 transition disabled:opacity-50"
                >
                    {loading ? "Creating account..." : "Create Account 🚀"}
                </button>

                <p className="text-center text-gray-400 mt-6">
                    Already account hai?{" "}
                    <Link to="/login" className="text-orange-400 hover:underline font-semibold">
                        Login karo
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
