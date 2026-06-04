import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaRedditAlien } from "react-icons/fa";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const login = async () => {
        if (!email || !password) {
            setError("Please fill all fields");
            return;
        }
        setLoading(true);
        setError("");
        try {
            const response = await axios.post(
                "https://reddit-backend-xp48.onrender.com/api/auth/login",
                { email, password }
            );
            localStorage.setItem("token", response.data);

            // Username bhi store karo
            const parts = email.split("@");
            localStorage.setItem("username", parts[0]);

            navigate("/");
        } catch (error) {
            setError("Invalid email or password");
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

                <h1 className="text-4xl font-bold text-center mb-2 text-orange-400">Welcome Back!</h1>
                <p className="text-center text-gray-400 mb-8">Login to MemeSphere 🚀</p>

                {error && (
                    <div className="bg-red-500/20 border border-red-500 text-red-400 p-3 rounded-xl mb-5 text-center">
                        {error}
                    </div>
                )}

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 mb-4 rounded-2xl bg-black/40 border border-gray-700 text-white outline-none focus:border-orange-500 transition"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-4 mb-6 rounded-2xl bg-black/40 border border-gray-700 text-white outline-none focus:border-orange-500 transition"
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && login()}
                />

                <button
                    onClick={login}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 p-4 rounded-2xl text-lg font-bold hover:scale-105 transition disabled:opacity-50"
                >
                    {loading ? "Logging in..." : "Login 🚀"}
                </button>

                <p className="text-center text-gray-400 mt-6">
                    Account nahi hai?{" "}
                    <Link to="/signup" className="text-orange-400 hover:underline font-semibold">
                        Signup karo
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
